<template>

  <nav>
    <div class="nav-title">
      <img class="symbol" src="../assets/img/symbol-only.png ">
      <b><p>외출중<br>관리 프로그램</p></b>
    </div>
    <div class="nav-menu">
        <ul>
            <li><a href="http://localhost:8081/"><img class="home" src="../assets/img/home.png"/>홈</a></li>
            <li><a><img class="write" src="../assets/img/write.png"/>외출중 작성</a></li>
            <li><a><img class="check" src="../assets/img/check.png"/>외출증 수락</a></li>
            <li><a><img class="user" src="../assets/img/user.png"/>마이페이지</a></li>
        </ul>
    </div>
    <div class="menu-logout">
      <ul>
        <li><img class="logout" src="../assets/img/logout.png"/>로그아웃</li>
      </ul>
    </div>
    
  </nav>
</template>

<script>
export default {

}
</script>
<style lang = "scss">

$primaryColor: #5865f2;
*
{
  margin: 0;
  padding: 0;
  
}
nav
{
  position: fixed;
  background-color: $primaryColor;
  height: 1080px ;
  width: 220px;
}
.nav-title
{
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  margin-bottom: 2em;
  .symbol
  {
    height:50px;
    width:50px;
    margin-left: 13px;
  }
  p
  {
    text-align: left;
    font-size: 20px;
    color: #fff;
    margin-right: 13px;
  }
}
.nav-menu
{
  a
  {
    text-decoration: none;
    color: #fff;
  }
  li
  {
    list-style: none;
    color: #fff;
    font-size: 25px;
    display: flex;
    width: 220px;
    height: 70px;
    padding: 3px 15px;
    align-items: center;
    gap: 10px;
  }
  img
  {    
    vertical-align: middle;
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }

}
.menu-logout
{
  li
  {
    color: #fff;
    font-size: 25px;
    margin-top: 28rem;
    display: flex;
    width: 220px;
    height: 70px;
    padding: 3px 15px;
    align-items: center;
    gap: 10px;
  }
  img
  {
    vertical-align: middle;
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
}

</style>
