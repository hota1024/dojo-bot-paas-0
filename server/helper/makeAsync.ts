/**
 * Make async function from a function.
 *
 * @param func Target function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function makeAsync<F extends (...args: any[]) => any>(func: F) {
  return (...args: Parameters<F>) =>
    new Promise<ReturnType<F>>((resolve) => resolve(func(...args)))
}
