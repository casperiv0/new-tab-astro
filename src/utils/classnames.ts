export function classnames(...args: (string | number | boolean | null | undefined)[]) {
  return args.filter(Boolean).join(" ");
}
