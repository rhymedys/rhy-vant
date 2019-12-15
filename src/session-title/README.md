# SessionTitle

### Install

``` javascript
import Vue from 'vue';
import { SessionTitle } from 'vant';

Vue.use(SessionTitle);
```

## Usage

### Basic Usage

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

### Show Desc

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

### Show More

```html
  <vantbussiness-session-title
    :title="basicUsage.title"
    :desc="basicUsage.desc"
    :more="basicUsage.more"
    :txt-align="basicUsage.txtAlign"
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
          txt: 'more',
          link: 'https://www.baidu.com'
        }
      }
    }
  }
};
```

## API

### Props

| Attribute  | Description        | Type                  | Default | Version |
| ---------- | ------------------ | --------------------- | ------- | ------- |
| background | Background         | *string*              | `white` | -       |
| txt-align  | Text align         | *left\|middle\|right* | `left`  | -       |
| title      | Main title config  | *TitleConfig*         |         | -       |
| desc       | Description config | *TitleConfig*         |         | -       |
| more       | More config        | *MoreConfig*          |         | -       |


### TitleConfig Data Structure

| key    | Description   | Type                       |
| ------ | ------------- | -------------------------- |
| weight | Font weight   | *bold \| undefiend*        |
| txt    | Title content | *string*                   |
| size   | Font size     | *small \| middle \| large* |



### MoreConfig Data Structure

| key  | Description  | Type     |
| ---- | ------------ | -------- |
| txt  | More content | *string* |
| link | URL          | *string* |
