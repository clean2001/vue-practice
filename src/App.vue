<template> <!-- 템플릿 속성 안에는 html 코드가 들어간다 -->
  <v-app>
    <v-main>
      <!-- <HelloWorld/> -->
      <ModalDialog/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ModalDialog from './components/ModalDialog.vue';

export default { // export default로 모듈을 추출하고 있다.
  name: 'App',

  components: {
    // HelloWorld,
    ModalDialog
  },

  data: () => ({
    //
  }),
}
</script>
