import pkgJson from '../../package.json';

const { version } = pkgJson;

export const searchConfig = {
  apiKey: '90067aecdaa2c85220e2783cd305caac',
  indexName: 'vant'
};

export const versions = [version, '1.x'];

export const github = 'https://github.com/youzan/vant';

export default {
  'zh-CN': {
    header: {
      logo: {
        image: 'https://b.yzcdn.cn/vant/logo-white.png',
        title: 'VanBussiness',
        href: '#/'
      },
      nav: {
        lang: {
          text: 'En',
          from: 'zh-CN',
          to: 'en-US'
        },
        logoLink: [
          {
            image: 'https://b.yzcdn.cn/vant/logo/weapp.svg',
            url: '/vant-weapp'
          },
          {
            image: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: github
          }
        ]
      }
    },
    nav: [
      {
        name: '开发指南',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: '介绍'
              },
              {
                path: '/quickstart',
                title: '快速上手'
              },
              {
                path: '/changelog',
                title: '更新日志'
              },
              {
                path: '/style',
                title: '内置样式'
              },
              {
                path: '/theme',
                title: '定制主题'
              },
              {
                path: '/contribution',
                title: '开发指南'
              },
              {
                path: '/design',
                title: '设计资源'
              },
              {
                path: '/style-guide',
                title: '风格指南'
              },
              {
                path: '/locale',
                title: '国际化'
              }
            ]
          }
        ]
      },
      {
        name: '组件',
        showInMobile: true,
        groups: [
          {
            groupName: '业务组件',
            icon: 'orders-o',
            list: [
              {
                path: '/session-title',
                title: '标题'
              },
              {
                path: '/test-component',
                title: 'test-component'
              }
            ]
          }
        ]
      }
    ]
  },
  'en-US': {
    header: {
      logo: {
        image: 'https://b.yzcdn.cn/vant/logo-white.png',
        title: 'VanBussiness',
        href: '#/'
      },
      nav: {
        lang: {
          text: '中文',
          from: 'en-US',
          to: 'zh-CN'
        },
        logoLink: [
          {
            image: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: github
          }
        ]
      }
    },
    nav: [
      {
        name: 'Essentials',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: 'Introduction'
              }
            ]
          }
        ]
      },
      {
        name: 'Components',
        showInMobile: true,
        groups: [
          {
            groupName: 'Bussiness Components',
            icon: 'orders-o',
            list: [
              {
                path: '/session-title',
                title: 'session-title'
              },
              {
                path: '/test-component',
                title: 'test-component'
              },
            ]
          }
        ]
      }
    ]
  }
};
