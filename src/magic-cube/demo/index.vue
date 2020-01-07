<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <vantbussiness-magic-cube
        :list="base.list"
        :template-type="base.templateType"
        :pic-dis="base.picDis"
        :edge-dis="base.edgeDis"
      />
    </demo-block>
    <demo-block :title="$t('template2R2C')">
      <vantbussiness-magic-cube
        :list="template2R2C.list"
        :template-type="template2R2C.templateType"
        :pic-dis="template2R2C.picDis"
        :edge-dis="template2R2C.edgeDis"
      />
    </demo-block>
    <demo-block :title="$t('template1T2B')">
      <vantbussiness-magic-cube
        :list="template1T2B.list"
        :template-type="template1T2B.templateType"
        :pic-dis="template1T2B.picDis"
        :edge-dis="template1T2B.edgeDis"
      />
    </demo-block>
    <demo-block :title="$t('template1L2R')">
      <vantbussiness-magic-cube
        :list="template1L2R.list"
        :template-type="template1L2R.templateType"
        :pic-dis="template1L2R.picDis"
        :edge-dis="template1L2R.edgeDis"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      template2R2C: '2行2列',
      template1T2B: '1上2下',
      template1L2R: '1左2右'
    },
    'en-US': {
      template2R2C: '2Row 2Col ',
      template1T2B: 'template1T2B',
      template1L2R: 'template1L2R'
    }
  },
  data() {
    return {
      base: {
        templateType: '1*2',
        list: [
          {
            src:
              'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            link: 'https://baidu.com'
          },
          {
            src: 'https://img.yzcdn.cn/vant/cat.jpeg',
            link: 'https://baidu.com'
          },
          {
            src: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
            link: 'https://baidu.com'
          },
          {
            src:
              'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=3656342777,3322351644&fm=190&app=71&f=JPEG?w=121&h=75&s=F8E2B144C3F49E6E10C5E10B0000E081',
            link: 'https://taobao.com'
          }
        ],
        picDis: 4,
        edgeDis: 6
      },
      template2R2C: {
        templateType: '2*2',
        list: [
          {
            src:
              'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            link: 'https://baidu.com'
          },
          {
            src: 'https://img.yzcdn.cn/vant/cat.jpeg',
            link: 'https://baidu.com'
          },
          {
            src: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
            link: 'https://baidu.com'
          },
          {
            src:
              'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=3656342777,3322351644&fm=190&app=71&f=JPEG?w=121&h=75&s=F8E2B144C3F49E6E10C5E10B0000E081',
            link: 'https://taobao.com'
          }
        ],
        picDis: 4,
        edgeDis: 6
      },
      template1T2B: {
        templateType: '1T2B',
        list: [
          {
            src:
              'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            link: 'https://baidu.com'
          },
          {
            src: 'https://img.yzcdn.cn/vant/cat.jpeg',
            link: 'https://baidu.com'
          },
          {
            src: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
            link: 'https://baidu.com'
          }
        ],
        picDis: 4,
        edgeDis: 6
      },
      template1L2R: {
        templateType: '1L2R',
        list: [
          {
            src:
              'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            link: 'https://baidu.com'
          },
          {
            src: 'https://img.yzcdn.cn/vant/cat.jpeg',
            link: 'https://baidu.com'
          },
          {
            src: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
            link: 'https://baidu.com'
          }
        ],
        picDis: 4,
        edgeDis: 6
      }
    };
  },
  methods: {
    onMoreClick({ event, eventParam }) {
      console.log(event, eventParam);
      // custom,https://www.baidu.com
      if (event === 'custom') {
        window.location.href = eventParam;
      }
    }
  }
};
</script>
