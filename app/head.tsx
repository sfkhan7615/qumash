// app/head.tsx
export const metadata = {
    title: "NextCommerce | Modern E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and NestJS",
    generator: 'v0.dev',
  };
  
  export default function Head() {
    return (
      <>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="assets/images/favicon.png" />
        <link rel="stylesheet" href="assets/css/plugins.css" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
      </>
    );
  }
  