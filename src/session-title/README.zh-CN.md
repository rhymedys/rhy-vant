# SessionTitle 标题

### 引入

``` javascript
import Vue from 'vue';
import { SessionTitle } from 'vant';

Vue.use(SessionTitle);
```

## 代码演示

### 基础用法

```html
  <vantbussiness-session-title :title="basicUsage.title" />
```

```js
export default {
  data() {
    return {
       basicUsage: {
        title: {
          weight: 'bold',
          txt: 'title',
          size: 'large'
        }
      }
    }
  }
};
```


### 显示描述

```html
  <vantbussiness-session-title :title="basicUsage.title" :desc="basicUsage.desc" />
```

```js
export default {
  data() {
    return {
       basicUsage: {
        title: {
          weight: 'bold',
          txt: 'title',
          size: 'large'
        }
      }
    }
  }
};
```


### 显示更多

```html
  <vantbussiness-session-title
    :title="basicUsage.title"
    :desc="basicUsage.desc"
    :more="basicUsage.more"
    :txt-align="basicUsage.txtAlign"
    @on-more-click="onMoreClick"
  />
```

```js
export default {
  data() {
    return {
       basicUsage: {
        txtAlign:'middle',
        title: {
          weight: 'bold',
          txt: 'title',
          size: 'large'
        },
        desc: {
          txt: 'desc'
        },
        more: {
          visiable:true,
          txt: 'more',
          event:'custom',
          eventParam: 'https://www.baidu.com'
        }
      }
    }
  },
  methods:{
    onMoreClick({
      event,
      eventParam
    }){
      console.log(event,eventParam)
      // custom,https://www.baidu.com
    }
  }
};
```

## API

### Props

| 参数       | 说明           | 类型                  | 默认值  | 版本 |
| ---------- | -------------- | --------------------- | ------- | ---- |
| background | 背景颜色       | *string*              | `white` | -    |
| txt-align  | text-align属性 | *left\|middle\|right* | `left`  | -    |
| title      | 标题配置       | *TitleConfig*         |         | -    |
| desc       | 描述配置       | *TitleConfig*         |         | -    |
| more       | 更多配置       | *MoreConfig*          |         | -    |

### TitleConfig Data Structure

| key    | Description | Type                       |
| ------ | ----------- | -------------------------- |
| weight | 标题粗细    | *bold \| undefiend*        |
| txt    | 标题内容    | *string*                   |
| size   | 字体大小    | *small \| middle \| large* |

### MoreConfig Data Structure

| key        | Description    | Type                |
| ---------- | -------------- | ------------------- |
| txt        | 更多文本内容   | *string*            |
| visiable   | 可见           | *boolean*           |
| event      | 自定义点击事件 | *string*            |
| eventParam | 点击事件参数   | *string\|undefiend* |
