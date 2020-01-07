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
    edgeDis: Number | undefined,
    // 可视化宽度
    clientWidth: Number | undefined
  },
  methods: {
    invokeJumpLink(item) {
      if (!this.$options.isArtManager) {
        window.location.href = item.link
      }
    },
    invokeComItemWidth(
      listNum,
      itemMargin = 0,
      edgeDis = 0
    ) {
      let mapClientWidth


      if (!this.clientWidth) {
        const {
          clientWidth
        } = document.body
        mapClientWidth = clientWidth
      } else {
        mapClientWidth = this.clientWidth
      }


      return mapClientWidth / listNum - itemMargin * listNum - edgeDis
    },
    mapSingleRowDom() {
      const {
        invokeComItemWidth,
        templateType,
        picDis,
        edgeDis,
        invokeJumpLink,
        list
      } = this

      let listNum = templateType.replace(/.*\*/g, '')
      try {
        listNum = Number(listNum)
      } catch (e) {

      }

      let itemMargin
      if (picDis) {
        itemMargin = picDis / 2
      }

      // 单行dom
      const itemWidth = invokeComItemWidth(
        listNum,
        itemMargin,
        edgeDis
      )

      let res = []




      const imgStyle = {
        flex: 1,
      }

      if (itemMargin) {
        imgStyle.margin = `${itemMargin}px`
      }

      if (itemWidth) {
        imgStyle.height = `${itemWidth}px`
        imgStyle.width = `${itemWidth}px`
      }


      while (res.length < listNum) {
        const imgObj = list[res.length]

        const ImageDom = (
          <VantImage
            key={imgObj.src || new Date().getTime()}
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
    },
    map2R2CCDom() {

      const {
        invokeComItemWidth,
        picDis,
        edgeDis,
        invokeJumpLink,
        list,
        templateType
      } = this


      let itemMargin
      const mapPic = picDis || 0
      if (mapPic) {
        itemMargin = picDis / 2
      }


      let listNum = templateType.replace(/.*\*/g, '')
      try {
        listNum = Number(listNum)
      } catch (e) {

      }


      let itemWidth = invokeComItemWidth(
        listNum,
        itemMargin,
        edgeDis
      )


      let res = []
      const imgStyle = {}

      if (itemMargin) {
        imgStyle.margin = `${itemMargin}px`
      }


      if (itemWidth) {
        imgStyle.minWidth = `${itemWidth}px`
        imgStyle.height = `${itemWidth}px`
        imgStyle.width = `${itemWidth}px`
      }

      while (res.length < 4) {
        const imgObj = list[res.length]

        const ImageDom = (
          <VantImage
            key={imgObj.src || new Date().getTime()}
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
    },
    map1L2RDom() {

      const {
        invokeComItemWidth,
        picDis,
        edgeDis,
        invokeJumpLink,
        list,
        templateType
      } = this

      let itemMargin
      const mapPic = picDis || 0
      if (mapPic) {
        itemMargin = mapPic / 2
      }

      let listNum = templateType.replace(/.*\*/g, '')
      try {
        listNum = Number(listNum)
      } catch (e) {

      }


      const itemWidth = invokeComItemWidth(
        2,
        itemMargin,
        edgeDis
      )


      let res = []

      const imgStyle = {
      }

      if (itemMargin) {
        imgStyle.margin = `${itemMargin}px`
      }

      const mapList = list.slice()

      const topDomData = mapList[0]

      res.push(
        <VantImage
          key={topDomData.src || new Date().getTime()}
          src={topDomData.src}
          style={Object.assign({
            height: `${itemWidth * 2 + mapPic}px`,
            width: `${itemWidth}px`
          }, imgStyle)}
          fit="none"
          onClick={invokeJumpLink.bind(null, topDomData)}
        />
      )


      res.push(
        <div style="display:flex;flex-direction:column">
          {

            [mapList[1], mapList[2]].map(val => {
              return (
                <VantImage
                  key={val.src || new Date().getTime()}
                  src={val.src}
                  style={Object.assign({
                    height: `${itemWidth}px`,
                    width: `${itemWidth}px`
                  }, imgStyle)}
                  fit="none"
                  onClick={invokeJumpLink.bind(null, val)}
                />
              )
            })

          }
        </div>
      )


      return res

    },
    map1T2BDom() {
      const {
        invokeComItemWidth,
        picDis,
        edgeDis,
        invokeJumpLink,
        list,
        templateType
      } = this

      const mapPic = picDis || 0
      let itemMargin
      if (mapPic) {
        itemMargin = mapPic / 2
      }


      let listNum = templateType.replace(/.*\*/g, '')
      try {
        listNum = Number(listNum)
      } catch (e) {

      }

      const itemWidth = invokeComItemWidth(
        2,
        itemMargin,
        edgeDis
      )


      let res = []


      const imgStyle = {
        flex: 1,
      }


      if (itemMargin) {
        imgStyle.margin = `${itemMargin}px`
      }

      const mapList = list.slice()


      const topDomData = mapList[0]

      res.push(
        <VantImage
          key={topDomData.src || new Date().getTime()}
          src={topDomData.src}
          style={Object.assign({
            height: `${itemWidth}px`,
            minWidth: `100%`,
            width:'100%'
          }, imgStyle)}
          fit="none"
          onClick={invokeJumpLink.bind(null, topDomData)}
        />
      )


      res.push(
        <div>
          {
            [
              mapList[1],
              mapList[2]
            ].map(val => {
              return (
                <VantImage
                  key={val.src || new Date().getTime()}
                  src={val.src}
                  style={Object.assign({
                    height: `${itemWidth}px`,
                    width: `${itemWidth}px`
                  }, imgStyle)}
                  fit="none"
                  onClick={invokeJumpLink.bind(null, val)}
                />
              )
            })

          }
        </div>
      )

      return res

    }
  },
  render(h) {

    const {
      edgeDis,
      templateType,
    } = this


    let contentDom


    const wrapperStyle = {}

    if (edgeDis) {
      wrapperStyle.paddingLeft = `${edgeDis}px`
      wrapperStyle.paddingRight = `${edgeDis}px`
    }


    if (singleRows.includes(templateType)) {
      contentDom = this.mapSingleRowDom()
    } else if (template2R2C === templateType) {
      wrapperStyle.flexWrap = 'wrap';
      contentDom = this.map2R2CCDom()
    } else if (template1T2B === templateType) {
      wrapperStyle.flexWrap = 'wrap';
      contentDom = this.map1T2BDom()
    } else if (template1L2R === templateType) {
      wrapperStyle.flexWrap = 'wrap';
      wrapperStyle.display = 'flex'
      contentDom = this.map1L2RDom()
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
