<template>
  <ul>
    <span class="triangle"></span>
    <li @mouseover="change(-1)" @mouseout="change(-2)">
      <a href="" :class="{listActive:selected==-1}">
        <!--激活：黑色-->
        <img v-show="!allImg" src="../../assets/index/分类.png"/>
        <!--未激活：灰色-->
        <img v-show="allImg" src="../../assets/index/全部.png"/>
        <span>全部</span>
      </a>
    </li>
    <li @mouseover="change(index)" @mouseout="change(-2)" v-for="(a, index) in arr">
      <a href=""  :class="{listActive:selected==index}">
        <span class="colorPoint" :style="{backgroundColor:a.pointColor}"></span>
        <span>{{a.name}}</span>
      </a>
    </li>
  </ul>

</template>

<script>
  export default {
    name: 'Classify',
    data() {
      return {
        selected: -2,
        allImg: true,
        arr: [
          {
            name: '日用',
            pointColor: 'rgb(228, 204, 169)'
          },
          {
            name: '公共',
            pointColor: 'rgb(161, 228, 64)'
          },
          {
            name: '关爱',
            pointColor: 'rgb(255, 71, 71)'
          },
          {
            name: '家居',
            pointColor: 'rgb(88, 0, 24)'
          },
          {
            name: '时尚',
            pointColor: 'rgb(174, 0, 255)'
          },
          {
            name: '美食',
            pointColor: 'rgb(255, 150, 0)'
          },
          {
            name: '数码',
            pointColor: 'rgb(33, 140, 124)'
          },
          {
            name: '视觉',
            pointColor: 'rgb(255, 234, 0)'
          },
          {
            name: '空间',
            pointColor: 'rgb(0, 191, 243)'
          }
        ]
      }
    },
    methods: {
      change(index) {
        this.selected = index;
        if (this.selected == -1) {
          this.allImg = !this.allImg
        }
      }
    }
  }

</script>

<style scoped>
  ul {
    position: absolute;
    top: 35px;
    left: -7px;
    min-width: 100px;
    padding: 5px 10px;
    list-style: none;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
  }

  .triangle {
    position: absolute;
    top: -7px;
    left: 50%;
    width: 13px;
    height: 13px;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    border-right: 0;
    border-bottom: 0;
    background-color: #fff;
    margin-left: -5px;
    transform: rotate(45deg);
  }

  li {
    border-bottom: 1px solid #ececec;
    padding: 5px 0;
    color: #a6a7a7;
    font-weight: 500;
    display: flex;
    justify-content: center;
  }

  li:last-child {
    border-bottom: none;
  }

  li a {
    border-radius: 4px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    color: #a6a7a7;
    font-weight: 500;
    padding: 10px 15px;
    text-decoration: none;
  }

  .listActive {
    background-color: #ececec;
    color: #333;
  }

  .colorPoint {
    background-color: rgb(228, 204, 169);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
  }
</style>
