// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function includes<Value>(array: Value[], value: any): value is Value {
  return array.includes(value);
}
//type guard
