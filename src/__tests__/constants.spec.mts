/**
 * @file Unit Tests - constants
 * @module fsm-util-symbol/tests/unit/constants
 */

import testSubject from '../constants.mts'

describe('unit:constants', () => {
  it('should be constants dictionary', () => {
    expect(testSubject).toMatchSnapshot()
  })
})
