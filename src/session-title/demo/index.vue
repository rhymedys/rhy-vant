<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <vantbussiness-session-title :title="basicUsage.title" />
    </demo-block>
    <demo-block :title="$t('showDesc')">
      <vantbussiness-session-title :title="basicUsage.title" :desc="basicUsage.desc" />
    </demo-block>
    <demo-block :title="$t('showMore')">
      <vantbussiness-session-title
        :title="basicUsage.title"
        :desc="basicUsage.desc"
        :more="basicUsage.more"
        :txt-align="basicUsage.txtAlign"
        @on-more-click="onMoreClick"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      showDesc: '显示描述',
      showMore: '显示更多'
    },
    'en-US': {
      showDesc: 'showDesc',
      showMore: 'showMore'
    }
  },
  data() {
    return {
      basicUsage: {
        background: 'white',
        txtAlign: 'middle',
        title: {
          weight: 'bold',
          txt: 'title',
          size: 'large'
        },
        desc: {
          txt: 'desc'
        },
        more: {
          visiable: true,
          txt: 'more',
          event: 'custom',
          eventParam: 'https://www.baidu.com'
        }
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
