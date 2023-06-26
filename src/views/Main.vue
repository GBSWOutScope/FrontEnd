<template>
<div>
  <Nav/>
  <p>최근 발급된 외출증</p>
  <div class="tableForm">
    <table>
        <thead>
            <th>시간</th>
            <th>상세시간</th>
            <th>학번</th>
            <th>이름</th>
            <th>동행자</th>
            <th>외출 사유</th>
        </thead><br>
        <tbody>
          <tr>
            <td>점심</td>
            <td>13:30</td>
            <td>3201</td>
            <td>홍길동</td>
            <td>홍길동</td>
            <td>없음</td>
          </tr>
        </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang = "scss">
$primaryColor: #5865F2;

p
{
  color: $primaryColor;
  text-align: center;
  font-size: 24px;  
}

table
{
  background-color: rgba(204, 200, 200,0.2);
  width: 1459px;
  padding: 20px;
  margin-left: 130px;
  gap: 17px;
}

thead
{
  color: $primaryColor;
  display: flex;

  th
  {
    padding-right: 100px; 
  }

}

</style>