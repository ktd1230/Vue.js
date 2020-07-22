<!-- 
     1. 차트 라이브러리 npm으로 설치
     2. 설치된 라이브러리를 import로 Chart.vue에서 로딩
     3. mounted() 라이프 사이클 훅에서 차트를 그림 (ref 속성)
     4. 차트를 컴포넌트화
     5. 컴포넌트의 플러그인화
     6. 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합
     7. vue chart.js가 따로 있기도 하다. (vue를 위한 특정 라이브러리)
      -->

<template>
  <div>
      <h1>Chart.js</h1>
      <bar-chart v-on:refresh:chart="refreshChart" :propsdata="chartDataSet"></bar-chart>
      <!-- 라인 차트 컴포넌트 -->
      <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue';
import LineChart from '../components/LineChart.vue';

export default {
    // 컴포넌트 속성 && 인스턴스 옵션
    components: {
        BarChart,
        LineChart,
    },
    data() {
        return {
            chartDataSet: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }],
        }
    },
    methods: {
        refreshChart() {
            console.log('여기왔다')
            this.chartDataSet = [{
                    label: '# of Votes',
                    data: [7, 7, 7, 7, 7, 7],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
        },
    },
    created() {
        
    },
}
</script>

<style>

</style>