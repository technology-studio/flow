/**
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Date: 2019-07-09T17:07:18+02:00
 * @Copyright: Technology Studio
 * @flow
**/

export const extend = <TYPE_EXTENSION, TYPE: Object>(value: TYPE): TYPE & TYPE_EXTENSION => (
  value: any
)

export const varianceFix = <TYPE: Object>(value: TYPE) => ({
  ...value,
})
