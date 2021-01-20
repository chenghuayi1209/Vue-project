<template>
  <div class="Login-container">
  <van-nav-bar
  title="登录"
  left-arrow
  @click-left="$router.back()"
/>
<van-cell-group>
  <van-field
    v-model="user.mobile"
    left-icon="phone-o"
    placeholder="请输入手机号"
  />
  <van-field
    v-model="user.code"
    clearable
    left-icon="eye-o"
    placeholder="请输入验证密码"
  >
   <template #button>
    <van-button size="small" type="primary">发送验证码</van-button>
  </template>
  </van-field>
</van-cell-group>
<van-button type="info" block>登录</van-button>
  </div>
</template>

<script>
export default {
    name:'LoginIndex',
    data(){
        return{
            user:{
                mobile:'', //手机号
                code:''  //验证码
            }
        }
    }
}
</script>

<style>

</style>