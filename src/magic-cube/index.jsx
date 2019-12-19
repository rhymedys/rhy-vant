import {
  createNamespace
} from "../utils";
import { Image } from 'vant'

const [createComponent, bem] = createNamespace('magic-cube');


const template1R2C = '1*2'
const template1R3C = '1*3'
const template1R4C = '1*4'

const template2R2C = '2*2'
const template1L2R = '1L2R'
const template1T2B = '1T2B'

const singleRows = [
  template1R2C,
  template1R3C,
  template1R4C
]




export default createComponent({
  components: {
    VantImage: Image,
  },
  props: {
    // 模版类型
    templateType: {
      type: String,
      default: ''
    },
    // 数据列表
    list: {
      type: Array,
      default: () => []
    },
    // 图片间距
    picDis: Number | undefined,
    // 边距
    edgeDis: Number | undefined
  },
  methods: {
    invokeJumpLink(item) {
      window.location.href = item.link
    }
  },
  render() {

    const {
      list,
      picDis = 0,
      edgeDis = 0,
      templateType,
      invokeJumpLink
    } = this

    const {
      clientWidth
    } = document.body

    let contentDom
    let itemMargin

    if (picDis) {
      itemMargin = picDis / 2
    }

    let listNum = templateType.replace(/.*\*/g, '')
    listNum = Number(listNum)

    const itemWidth = clientWidth / listNum - itemMargin * listNum - edgeDis

    const wrapperStyle = {}

    if (edgeDis) {
      wrapperStyle.paddingLeft = `${edgeDis}px`
      wrapperStyle.paddingRight = `${edgeDis}px`
    }




    const map1T2BDom = () => { }


    const map1L2RDom = () => { }

    if (singleRows.includes(templateType)) {
      // 单行dom
      const mapSingleRowDom = () => {


        if (listNum > list.length) {
          return
        }



        let res = []

        const imgStyle = {
          margin: `${itemMargin}px`,
          flex: 1
        }

        while (res.length < listNum) {
          const imgObj = list[res.length]

          const ImageDom = (
            <VantImage
              width={itemWidth}
              height={itemWidth}
              key={imgObj.src}
              src={imgObj.src}
              style={imgStyle}
              fit="none"
              onClick={invokeJumpLink.bind(null, imgObj)}
            />
          )

          res.push(
            ImageDom
          )

        }

        return res
      }

      contentDom = mapSingleRowDom()
    } else if (template2R2C === templateType) {
      wrapperStyle.flexWrap = 'wrap';
      // 2 * 2
      const map2R2CCDom = () => {


        let res = []

        if (list.length !== 4) {
          return
        }

        const imgStyle = {
          margin: `${itemMargin}px`,
          minWidth: `${itemWidth}px`
        }

        while (res.length < 4) {
          const imgObj = list[res.length]

          const ImageDom = (
            <VantImage
              width={itemWidth}
              height={itemWidth}
              key={imgObj.src}
              src={imgObj.src}
              style={imgStyle}
              fit="none"
              onClick={invokeJumpLink.bind(null, imgObj)}
            />
          )

          res.push(
            ImageDom
          )

        }

        return res
      }

      contentDom = map2R2CCDom()

    } else if (template1T2B === templateType) {
      contentDom = map1T2BDom()
    } else if (template1L2R === templateType) {
      contentDom = map1L2RDom()
    }


    return (
      <div
        class={
          bem()
        }
        style={wrapperStyle}
      >
        {contentDom}
      </div>

    )
  }
});
