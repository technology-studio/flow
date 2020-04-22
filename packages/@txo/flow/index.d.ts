declare module "@txo/flow" {
  type LiteralMap<KEY, VALUE> = {
    [KEY]: VALUE,
  }
  const is = <TYPE> (value: ?TYPE): TYPE
  const extend = <TYPE_EXTENSION, TYPE: Object>(value: TYPE): TYPE & TYPE_EXTENSION
  const varianceFix = <TYPE: Object>(value: TYPE)
}
