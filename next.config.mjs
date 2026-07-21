/** @type {import('next').NextConfig} */

// GitHub Pages project sites are served under /<repo>/. Set the repo name here
// (or override with BASE_PATH env). For a user/org root repo (<user>.github.io)
// or a custom domain, set BASE_PATH="" .
const basePath = process.env.BASE_PATH ?? "/gbrf-microsite";

const nextConfig = {
  // Static HTML export → out/ (required for GitHub Pages, which has no Node server).
  output: "export",

  // Pages is a dumb file host: no next/image optimizer, so serve images as-is.
  images: { unoptimized: true },

  // Serve each route as <route>/index.html — clean URLs on Pages + one file per
  // route for StatiCrypt to encrypt.
  trailingSlash: true,

  // Project-site subpath. Prefixes routing and _next assets. NOTE: files in
  // public/ referenced by string src are NOT auto-prefixed, so we expose the
  // basePath to the client (see lib/asset.ts) and prepend it manually.
  basePath,
  assetPrefix: basePath || undefined,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
