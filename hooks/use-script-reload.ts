import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare const $: any;
declare const jQuery: any;

interface UseScriptReloadOptions {
  onInitialize?: () => void;
  delay?: number;
}

export const useScriptReload = (options: UseScriptReloadOptions = {}) => {
  const pathname = usePathname();
  const { onInitialize, delay = 100 } = options;

  useEffect(() => {
    const initializeScript = () => {
      if (typeof $ === 'undefined' || typeof jQuery === 'undefined') {
        setTimeout(initializeScript, delay);
        return;
      }

      if (onInitialize) {
        onInitialize();
      }
    };

    const timeoutId = setTimeout(initializeScript, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname, onInitialize, delay]);

  const reinitialize = (callback?: () => void) => {
    if (typeof $ !== 'undefined' && typeof jQuery !== 'undefined') {
      if (callback) callback();
      if (onInitialize) onInitialize();
    }
  };

  return { reinitialize };
};

export default useScriptReload; 