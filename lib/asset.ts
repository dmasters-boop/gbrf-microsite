// Prefix a public/ asset path with the deployment basePath.
//
// Next.js does NOT automatically prepend `basePath` to files served from
// public/ when they're referenced by a string `src` (this is especially true
// for next/image with `unoptimized` in a static export). Without this, an image
// at "/images/foo.jpg" resolves to the domain root instead of "/<repo>/images/…"
// on a GitHub Pages project site — a 404.
//
// Use this for any public/ asset referenced by path. Absolute URLs and paths
// already carrying the basePath are returned unchanged.
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;          // external URL
  if (base && path.startsWith(base + "/")) return path; // already prefixed
  if (!path.startsWith("/")) return path;               // relative — leave as-is
  return `${base}${path}`;
}
