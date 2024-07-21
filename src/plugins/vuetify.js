// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors' // 색깔을 임포트 해야한다.

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    //== 이부분이 추가됨!! ==//
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.green.darken1, // #4CAF5
            secondary: colors.green.lighten4, // #C8E6C
            deep: colors.green.darken4,
            custom_color: "#FAED7D"
          }
        },
      },
    }
     //== 추가된 부분 끝 ==//
  }
)
