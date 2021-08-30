<template>
  <div>
    <!-- components/内に配置したコンポーネントを描画 -->
    <HeaderMenu />
    <div>
      <div class="canvas-container">
        <canvas id="myCanvas" />
      </div>
      <div class="container">
        <!-- locales/内の言語毎に対応する文字列を$t('key')の形式で呼び出す -->
        <MessageCard :message="$t('top')" />
      </div>
    </div>
  </div>
</template>

<script>
// threejsのサンプルコードから描画開始の関数をインポート
import { init } from '~/assets/js/threejs_test'

// .vueファイルのexport defaultでdata()等の予約済の名称で
// 関数を指定するとライフサイクルイベントに対応した処理等を実行できる
export default {
  // DOM描画前に発火するライフサイクルイベント
  data () {
    return {
      messageText: 'This is main page'
    }
  },
  head () {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  // DOM描画後に呼び出されるライフサイクルイベント
  mounted () {
    init()
  }
}
</script>

<style scoped >
.container {
  justify-content: center;
  display: flex;
  margin: 20px;
}

.canvas-container {
  text-align: center;
  margin-top: 20px;
}
</style>
