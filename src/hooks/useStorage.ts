export default function useStorage<
  T extends string | number | boolean | Record<string, any> | null
>(
  key: string,
  value: T | null = null,
  storage: Storage = sessionStorage
): T | Promise<T> {
  if (!value) {
    const keyValue = storage.getItem(key);
    return keyValue ? JSON.parse(keyValue) : null;
  }
  return Promise.resolve()
    .then(() => {
      storage.setItem(key, JSON.stringify(value));
      return value;
    })
    .catch(() => {
      return value;
    });
}
