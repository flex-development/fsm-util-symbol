/**
 * @file Unit Tests - ev
 * @module fsm-util-symbol/tests/unit/ev
 */

import testSubject from '../ev.mts'

describe('unit:chars', () => {
  it('should be event type dictionary', () => {
    expect(testSubject).to.have.keys(['enter', 'exit'])
    expect(testSubject).to.have.property('enter', 'enter')
    expect(testSubject).to.have.property('exit', 'exit')
    expect(testSubject).toMatchSnapshot()
  })
})
