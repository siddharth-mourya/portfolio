import withMDX from '@next/mdx';

const withMDXConfig = withMDX({ extension: /.mdx?$/ });

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx']
};

export default withMDXConfig(nextConfig);
