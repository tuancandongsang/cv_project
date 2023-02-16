<template>
  <div class="components-input-demo-presuffix">
    <InputEmail placeholder="Email" label="Email" />
    <InputPassword placeholder="Mật Khẩu" label="Mật Khẩu" />
  </div>
</template>
<script>
import InputPassword from '@/components/input/inputPassword.vue';
import InputEmail from '@/components/input/inputEmail.vue';
export default {
  components: {
    InputPassword,
    InputEmail,
  },
};
</script>