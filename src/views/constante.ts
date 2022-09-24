export const options = {
  title: {
    text: "埋点结果展示",
  },
  tooltip: {
    trigger: "item",
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {},
    },
  },
  legend: {
    data: ["Show", "Click", "Visit", "Inquiry"],
  },

  series: [
    {
      name: "Funnel",
      type: "funnel",
      left: "10%",
      top: 60,
      bottom: 60,
      width: "80%",
      min: 0,
      max: 100,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      gap: 2,
      label: {
        show: true,
        position: "inside",
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: "solid",
        },
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
      },
      emphasis: {
        label: {
          fontSize: 20,
        },
      },
      data: [
        { value: 40, name: "Inquiry" },
        { value: 20, name: "Order" },
        { value: 80, name: "Click" },
        { value: 100, name: "标记a —— 站点统计" },
      ],
    },
  ],
};
