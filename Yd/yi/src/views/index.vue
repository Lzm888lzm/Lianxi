<template>
    <div>
       <ul class="top">
           <li v-for="(item,index) in get" :key="index" @click="open=index" :class="open==index?'title':''"><a href="javascript:;">{{item}}</a></li>
       </ul>
       <div v-if="open==0">
           <div>
               <hander @yu="show=!show"></hander>
              <div><a href="javascript:;" @click="show=!show">关闭</a></div></div>
           <img v-if="show" src="../assets/u=1184906558,4103197&fm=26&gp=0.jpg" alt="">
       </div>
       <div v-else-if="open==1">
           <div><a href="javascript:;" @click="tu=true">打开</a></div>
           <div><a href="javascript:;" @click="tu=false">关闭</a></div>
           <img v-if="tu" src="../assets/u=2114421946,2732335287&fm=26&gp=0.jpg" alt="">
       </div>
       <div v-else>
           <div><a href="javascript:;" @click="gu=true">打开</a></div>
           <div><a href="javascript:;" @click="gu=false">关闭</a></div>
           <img v-if="gu" src="../assets/u=2419538451,703791613&fm=26&gp=0.jpg" alt="">
       </div>
    </div>
</template>
<script>
import hander from '../components/hander'
export default {
    components:{
        hander
    },
    data(){
        return{
            get:["董小姐","莉莉安","喵小姐"],
            open:0,
            show:true,
            tu:true,
            gu:true
        }
    }
}
</script>
<style scoped>
 ul{
     padding: 0;
     margin: 0;
     list-style: none;
 }   
 .top{
     width: 400px;
     height: 200px;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
 }
 .top li a{
     display: inline-block;
     text-decoration: none;
     color: #000;
 }
.top .title a{
     color: #fff;
     background: #fa0;
 }
</style>