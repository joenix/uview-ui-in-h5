<template>
  <u-modal v-model="show" :show-cancel-button="true" confirm-text="升级" title="发现新版本" @cancel="cancel" @confirm="confirm">
    <div class="u-update-content">
      <rich-text :nodes="content"></rich-text>
    </div>
  </u-modal>
</template>

<script>
export default {
  name: "u-full-screen",

  data() {
    return {
      show: false,
      content: `
					1. 修复badge组件的size参数无效问题<br>
					2. 新增Modal模态框组件<br>
					3. 新增压窗屏组件，可以在APP上以弹窗的形式遮盖导航栏和底部tabbar<br>
					4. 修复键盘组件在微信小程序上遮罩无效的问题
				`
    };
  },
  onReady() {
    this.show = true;
  },
  methods: {
    cancel() {
      this.closeModal();
    },
    confirm() {
      this.closeModal();
    },
    closeModal() {
      uni.navigateBack();
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../libs/css/style.components.scss";

.u-full-content {
  background-color: #00c777;
}

.u-update-content {
  font-size: 26px;
  color: $u-content-color;
  line-height: 1.7;
  padding: 30px;
}
</style>
