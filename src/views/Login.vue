<template>
<div class="root">
    <div class="title ">
        <p><img class="symbol" src="../assets/img/symbol-only.png"/>
        <span>외출증</span> 관리 프로그램</p>
    </div>
    <div class="loginForm" > 
        <form>
          <input id = "memberIdInput" ref="memberIdInput" v-model.trim = "id" placeholder="  아이디 입력" type = "text" class = "Id"><br>
          <input id = "memberPasswordInput" ref="memberPasswordInput" v-model.trim = "password" placeholder="  비밀번호 입력" type = "password" class = "Password"><br>
          <button @submit.prevent = "doLogin()" class = "login_button">로그인</button> 
          
        </form>
        <p>{{ errorMessage }}</p>
    </div>
</div>
</template>

<script>
export default {
	name: 'Login',
	data : function() {
		return {
			id : '',
			password : '',
			errorMessage : ''
		};
	},
	methods : {
		doLogin() {
            let memberInfo = { id: this.id, password: this.password };
            this.$store.dispatch("loginStore/doLogin", memberInfo).then(() => {
            const returnUrl = window.location.search.replace(/^\?returnUrl=/, "");
            this.$router.push(returnUrl);
}).catch((err) => {
	this.errorMessage = err.response.data.errormessage;
});
			if (this.id == "") {
				alert("아이디를 입력하세요.");
				this.$refs.memberIdInput.focus();
				return;
			} else if (this.password == "") {
				alert("패스워드를 입력하세요.");
				this.$refs.memberPasswordInput.focus();
				return;
			}
		},
		doCancel() {
			this.$router.push('../');
		}
	},
	mounted() {
		this.$refs.memberIdInput.focus();
        
	}
};
</script>


<style lang="scss">
$primaryColor: #5865f2;
$inputColor: #E9E9E9;
$inputText: #777;
$pointColor: #4383FF;

.root
{
    margin: 10em;
}

.title 
{
    display: flex;
    justify-content: center;
    .symbol
    {
        vertical-align: middle;
        width: 110px;
        height: 108px;
        margin-right: 10px;
    }
    P 
    {
        font-size: 40px;
    }
    span
    {
        color: #0071B6;
    }
}
.loginForm 
{
    display: flex;
    justify-content: center;
    .Id, .Password
    {
        height: 60px;
        width: 590px;
        font-size: 15px;
        border-radius: 10px;
        background-color: $inputColor;
        border: #E9E9E9;
        margin: 10px;
    }
    .login_button 
    {
        height: 56px;
        font-size: 20px;
        width: 590px;
        border-radius: 5px;
        margin: 10px;
        color: #fff;
        border: none;
        background-color: $pointColor;
    }
}


</style>