import chai, {
    expect
} from "chai";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {
    shallowMount,
    mount
} from "@vue/test-utils";
import Uploader from "@/uploader";
import http from '@/http'

// import Button from './Button'

chai.use(sinonChai)

describe("Uploader.vue", () => {
    it('存在.', () => {
        expect(Uploader).to.exist
    })
    xit('可以上传一个文件', (done) => {
        let stub = sinon.stub(http, 'post').callsFake((url, options) => {
            setTimeout(function () {
                options.success('{"id": "123123"}')
            }, 100)
        })

        // http.post = (url, options) => {
        //     setTimeout(() => {
        //         options.success('{"id": "123123"}')
        //         // expect(wrapper.find('use').exists()).to.eq(false)
        //         // expect(wrapper.find('img').exists()).to.eq(true)
        //         // expect(wrapper.find('img').attributes().src).to.eq('/preview/123123')
        //         done()
        //     }, 1000);
        // }

        const wrapper = mount(Uploader, {
            propsData: {
                name: 'file',
                action: '/upload',
                method: 'post',
                parseResponse: (response) => {
                    let object = JSON.parse(response)
                    return `/preview/${object.id}`
                },
                fileList: []
            },
            slots: {
                default: `<button id="x">click me</button>`
                // default: [Button]
            },
            listeners: {
                'update:fileList': (fileList) => {
                    wrapper.setProps({
                        fileList
                    })
                },
                'uploaded': () => {
                    expect(wrapper.find('use').exists()).to.eq(false)
                    expect(wrapper.props().fileList[0].url).to.eq('/preview/123123')
                    stub.restore()
                    done()
                }
            }
        })
        wrapper.find('#x').trigger('click')
        // wrapper.find({ ref: 'x' }).trigger('click')
        // wrapper.element.querySelector('#x').trigger('click')
        let inputWrapper = wrapper.find('input[type="file"]')
        let input = inputWrapper.element
        let file1 = new File(['xxxxxxxxx'], 'xxx.txt')

        const data = new DataTransfer()
        data.items.add(file1)
        input.files = data.files;

        let use = wrapper.find('use').element
        expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
    })
});