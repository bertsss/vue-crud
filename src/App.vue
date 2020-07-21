<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$primary: #515861;
@import 'bootstrap';

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html, body {
    // font-family: 'Montserrat', sans-serif !important;
    // font-size: 14px;
    color: #2c3e50;
    background-color: #F5F5F5;
}

#app {
    display: flex;
    justify-content: center;
}
</style>
