import {
    expect
} from 'chai'
import karmaTest from '@/karma-test'

describe('分支覆盖率演示', () => {
    it('存在', () => {
        expect(karmaTest).to.exist
    })
    it('小', () => {
        let result = karmaTest(6)
        expect(result).to.equal('小')
    })
    it('大', () => {
        let result = karmaTest(11)
        expect(result).to.equal('大')
    })
})