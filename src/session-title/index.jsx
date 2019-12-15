import {
  createNamespace
} from "../utils";


const [createComponent, bem] = createNamespace('session-title');


export default createComponent({
  props: {
    txtAlign: String | undefined,
    background: String | undefined,
    title: {
      type: Object | undefined,
      default: () => { }
    },
    desc: {
      type: Object | undefined,
      default: () => { }
    },
    more: {
      type: Object | undefined,
      default: () => { }
    }
  },
  methods: {

    onMoreClick() {

      const {
        more
      } = this


      if (!more) {
        return
      }

      const {
        link
      } = more

      let {
        event,
        eventParam = {},
      } = more



      if (link) {
        window.location.href = link
        return
      }


      if (!event) {
        return
      }


      this.$emit('on-more-click', {
        event,
        eventParam
      })

    }
  },
  render() {


    const {
      title,
      desc,
      more,
      txtAlign
    } = this



    const isHadTitle = title && title.txt
    const isHadDesc = desc && desc.txt



    if (!isHadTitle && !isHadDesc) {
      return null
    }


    const style = {}
    if (txtAlign === 'middle') {
      style.textAlign = 'center'
    }



    const generateTitleDom = () => {


      const {
        txt,
        size,
        weight
      } = title

      const classModify = {}


      if (size) {
        classModify[size] = 1
      }

      if (weight) {
        classModify[weight] = 1
      }


      return (



        <div class={[bem('title', classModify), 'van-ellipsis']}>
          {
            txt
          }
        </div>
      )
    }


    const generataDescDom = () => {
      if (isHadDesc) {
        const {
          txt,
          size,
          weight
        } = desc

        const classModify = {}


        if (size) {
          classModify[size] = 1
        }

        if (weight) {
          classModify[weight] = 1
        }


        return (
          <div class={[bem('desc', classModify), 'van-ellipsis']}>
            {txt}
          </div>
        )
      }
    }


    const generateMoreDom = () => {

      if (more && txtAlign !== 'right') {
        const {
          txt = '更多',
        } = more

        const classModify = {}


        if (txtAlign === 'middle') {
          classModify['absolute'] = 1
        }

        return (
          <div class={[bem('more', classModify), 'van-ellipsis']} onClick={this.onMoreClick}>{txt}</div>
        )
      }
    }

    return (
      <div
        class={
          bem()
        }
      >
        <div class={bem('left')} style={style}>
          {
            generateTitleDom()
          }
          {
            generataDescDom()
          }
        </div>
        {
          generateMoreDom()
        }
      </div>

    )
  }
});
