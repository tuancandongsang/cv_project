<template>
  <div class="components-input-demo-presuffix">
    <InputUser placeholder="Họ và tên" label="Name" v-if="!loginOrSingin" />
    <InputEmail placeholder="Email" label="Email" />
    <InputPassword placeholder="Mật Khẩu" label="Mật Khẩu" />
    <InputPassword
      placeholder="Xác nhận mật khẩu"
      label="Xác nhận mật khẩu"
      v-if="!loginOrSingin"
    />
  </div>
</template>
<script>
import InputUser from '../../../components/input/InputUser.vue';
import InputPassword from '../../../components/input/inputPassword.vue';
import InputEmail from '../../../components/input/inputEmail.vue';
export default {
  components: {
    InputUser,
    InputPassword,
    InputEmail,
  },
  props: {
    loginOrSingin: {
      type: Boolean,
    },
  },
  created() {
    console.log(this.loginOrSingin);
  },
};
</script>
