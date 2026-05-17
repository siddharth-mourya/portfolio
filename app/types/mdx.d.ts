declare module '*.mdx' {
  import type { ComponentType, PropsWithChildren } from 'react';

  const MDXComponent: ComponentType<PropsWithChildren<Record<string, unknown>>>;
  export default MDXComponent;
}
