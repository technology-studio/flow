/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-01-02T13:14:53+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

'use strict'; // eslint-disable-line

export const is = <TYPE> (value: ?TYPE): TYPE => {
  if (value) {
    return value
  }
  throw Error('undefined value, should be present')
}
