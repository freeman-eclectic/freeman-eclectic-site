export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
}
