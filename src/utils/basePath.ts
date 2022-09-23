export default function basePath(path: string): string {
  return (process.env.BASE_PATH ?? '') + path;
}
