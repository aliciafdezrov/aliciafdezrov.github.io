type ClassValue = string | number | boolean | undefined | null;

/**
 * Utility function to conditionally join classNames together.
 * Filters out falsy values (null, undefined, false, '', 0).
 *
 * @example
 * cn('foo', 'bar') // 'foo bar'
 * cn('foo', false && 'bar', 'baz') // 'foo baz'
 * cn('foo', null, undefined, '', 'bar') // 'foo bar'
 * cn(styles.base, isActive && styles.active) // conditional className
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
