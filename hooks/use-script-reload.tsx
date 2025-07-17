import * as React from "react"

declare const $: any;
declare const jQuery: any;

interface UseScriptReloadOptions {
  onInitialize?: () => void;
  delay?: number;
}

export function useScriptReload(options: UseScriptReloadOptions = {}) {
  const { onInitialize, delay = 100 } = options;

  React.useEffect(() => {
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
  }, [onInitialize, delay]);

  const reinitialize = React.useCallback((callback?: () => void) => {
    if (typeof $ !== 'undefined' && typeof jQuery !== 'undefined') {
      if (callback) callback();
      if (onInitialize) onInitialize();
    }
  }, [onInitialize]);

  return { reinitialize };
} 