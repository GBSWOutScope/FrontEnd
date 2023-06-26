<template>
  <div>
    <router-view/>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  
};
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif !important;
}
@font-face {
  font-family: 'Noto Sans KR', sans-serif;
  src: url('./assets/fonts/NotoSansKR-Regular.otf'),
    url('./assets/fonts/NotoSansKR-Bold.otf'),
    url('./assets/fonts/NotoSansKR-Black.otf'),
    url('./assets/fonts/NotoSansKR-Light.otf'),
    url('./assets/fonts/NotoSansKR-Medium.otf'),
    url('./assets/fonts/NotoSansKR-Thin.otf'),
    ;
}

</style>