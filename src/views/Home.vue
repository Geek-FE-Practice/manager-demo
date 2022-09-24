<template>
  <div class="home">
    <a-card :title="title">
      <div id="container" :style="{ width: '800px', height: '800px' }"></div>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import * as echarts from "echarts";
import { options } from "./constante";
import { getSpmData } from "@/api";

export default defineComponent({
  name: "Home",
  setup() {
    /// 声明定义一下echart
    let echart = echarts;
    const title = ref();
    onMounted(async () => {
      const DEMO_TEMPLATE_DATE = "2022-09-20";
      title.value = `${DEMO_TEMPLATE_DATE} 统计结果展示`;
      const result = await getSpmData(DEMO_TEMPLATE_DATE);
      console.log(result);
      initChart();
    });

    onUnmounted(() => {
      echart.dispose;
    });

    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(
        document.getElementById("container") as HTMLElement,
        "dark"
      );
      // 把配置和数据放这里
      chart.setOption(options);
      window.onresize = function () {
        //自适应大小
        chart.resize();
      };
    }

    return { initChart, title };
  },
});
</script>
