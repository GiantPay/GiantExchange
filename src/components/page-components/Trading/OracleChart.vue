<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'OracleChart',
  extends: Line,
  props: ['chartData', 'options'],
  watch: {
    'chartData.labels': {
      handler() {
        this.$data._chart.update();
      },
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
