# iSPA Element UI

Một Thư viện hoạt động trên VueJS bản 3.x dựa trên TailwindCss.

<p align="center">
  <a href="https://npmcharts.com/compare/ispa-element?minimal=true" target="_blank"><img src="https://img.shields.io/npm/dm/ispa-element.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/ispa-element" target="_blank"><img src="https://img.shields.io/npm/v/ispa-element.svg?sanitize=true" alt="Version"></a>
  <a href="https://lerna.js.org/" target="_blank"><img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="lerna"></a>
</p>

## Bắt đầu sử dụng
Để dùng thư viện này, mở cmd của bạn tại thư mục mà bạn muốn sử dụng và chạy dòng lệnh sau:

```sh
npm install ispa-element
```

Sau đó thêm bộ thư viện vào file chính của dự án:
```js
import {createApp} from 'vue'
import iSPAElement from 'ispa-element'

const app = createApp(App)
app.use(iSPAElement).mount('#app')
```

## Sử dụng từng phần tử
Khi bạn không có nhu cầu sử dụng hết toàn bộ các phần tử của bộ thư viện này, bạn có thể tùy chỉnh chỉ sử dụng một vài thành phần riêng lẻ cho dự án của bạn bằng cách "import" như ví dụ bên dưới:
```js
impot { IButton } from 'ispa-element'
```

Ở bước tiếp theo, đăng ký phần tử với tên tag mà bạn muốn dùng theo cách của bạn.
```js
//  Dùng trong app.js
import {createApp} from 'vue'
const app = createApp(App)

app.component(IButton.name, IButton)
// OR app.component('i-button', IButton)

app.mount('#app')

//  Dùng trong component.vue
export default {
  components: { IButton }
}
```

::: tip Lưu ý
Việc bạn dùng tên tag nào cũng được, nhưng mà tên thẻ tag có thể gây xung đột với các thẻ tag thường dùng, do đó, để đảm bảo trường hợp này không xảy ra, bạn hãy chắc chắn rằng bạn đặt thẻ tag là duy nhất để sử dụng.
:::

# Tài liệu hướng dẫn
Vui lòng [nhấp vào đây](https://element.ispa.io/) để đọc tài liệu hướng dẫn sử dụng iSPA Element UI.

# Lời cảm ơn đặc biệt
Chúng tôi xin gửi lời cảm ơn đến thư viện [PrimeVue](https://primefaces.org/primevue/showcase/#/) và [Element UI](https://element.eleme.io/#/), phiên bản đầu tiên của thư viện này được lấy cảm hứng từ hai thư viện trên.

## Các mốc

- [ ] Card Component
- [ ] Loading Component/Directives
- [ ] Nav/Tabs Component
- [ ] Progress bar Component
- [ ] Dropdown Component
- [x] Badge Component (2020-12-26)
- [x] Divider Component (2020-12-20)
- [x] Switch Component (2020-12-20)
- [x] Alert Component (2020-12-18)
- [x] Form/Input Component (2020-12-16)
- [x] Button Component (2020-12-09)

## CHANGELOG
Bạn có thể theo dõi các phiên bản thay đổi bằng cách click vào [đây (CHANGELOG.md)](CHANGELOG.md)

## Các phiên bản
Các phiên bản được xây dựng dựa trên Quy tắc xây dựng phiên bản của [Semantic Versioning guidelines](https://semver.org/).

## Giấy Phép

[MIT](https://opensource.org/licenses/MIT) © [Malayvuong](https://malayvuong.com/)

## Muốn đóng góp/Hỗ trợ?
Nếu bạn thích dự án này và muốn nó phát triển nhiều hơn nữa, bạn có thể gửi một email cho chúng tôi thông qua malayvuong@gmail.com, chúng tôi sẽ cung cấp thêm nhiều thông tin hơn cho bạn về việc đóng góp/hỗ trợ của bạn. Chúng tôi xin chân thành cảm ơn.

[⬆ back to top](#)
