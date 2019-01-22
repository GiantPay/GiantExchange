<template>
  <div>
  <div class="trader">
    <b-row class="pb-40">
      <b-col md="12">
        <h3 class="text-center">Trader</h3>
      </b-col>
    </b-row>
    <div class="pb-40">
    <b-row>
      <b-col md="10">
        <h4>Balance: {{ objectTrader.balance }}</h4>
      </b-col>
      <b-col md="2" class="text-right">
        <v-date-picker
          mode='range'
          v-model='objectTrader.selectedData'
          show-caps
        >
        </v-date-picker>
      </b-col>
    </b-row>
    </div>
    <b-row>
      <b-col md="6">
        <GeneralChartPie
          :chartData="objectTrader.chartForecast"
        />
      </b-col>
      <b-col md="6">
        <GeneralChartPie
          :chartData="objectTrader.chartAmount"
        />
      </b-col>
      <b-col md="6">
        <GeneralChartPie
          :chartData="objectTrader.chartIncome"
        />
      </b-col>
      <b-col md="6">
        <h2 class="text-center">Trading ROI: {{ objectTrader.dataRoi }}</h2>
      </b-col>
    </b-row>
  </div>


    <div class="broker pt-60">
      <b-row class="pb-40">
        <b-col md="12">
          <h3 class="text-center">Broker</h3>
        </b-col>
      </b-row>
      <div class="pb-40">
        <b-row>
          <b-col md="2">
            <h4>Balance: {{ objectBroker.balance }}</h4>
            <b-form-select
              v-model="objectBroker.selected"
              :options="objectBroker.options"
              size="sm"
            />
          </b-col>
          <b-col md="8">
          </b-col>
          <b-col md="2" class="text-right">
            <v-date-picker
              mode='range'
              v-model='objectBroker.selectedData'
              show-caps
            >
            </v-date-picker>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col md="6">
          <h5 class="pb-20 pt-30">Quantitative indicators of deals:</h5>
          <b-list-group class="pb-20">
            <b-list-group-item>
              quantitative indicators of deals during this
              period: {{ objectBroker.allDeals.quantitative }}
            </b-list-group-item>
            <b-list-group-item>
              total deals with binary options: {{ objectBroker.allDeals.totalBinary }}
            </b-list-group-item>
            <b-list-group-item>
              current period revenue: {{ objectBroker.allDeals.revenue }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col md="6">
          <h5 class="pb-20 pt-30">Т-Т (Trader vs Trader) deals:</h5>
          <b-list-group class="pb-20">
            <b-list-group-item>
              total T-T deals quantity: {{ objectBroker.TTDeals.total }}
            </b-list-group-item>
            <b-list-group-item>
              fees sum: {{ objectBroker.TTDeals.sum }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col md="6">
          <h5 class="pb-20 pt-30">B-Т (Broker vs Trader) deals:</h5>
          <b-list-group class="pb-20">
            <b-list-group-item>
              total B-T deals quantity: {{ objectBroker.BTDeals.total }}
            </b-list-group-item>
            <b-list-group-item>
              secured funds quantity: {{ objectBroker.BTDeals.sum }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col md="6">
          <h2 class="text-center pt-30">Binary options ROI: {{ objectBroker.dataRoi }}</h2>
        </b-col>
        <b-col md="3">
        </b-col>
        <b-col md="6">
          <GeneralChartPie
            :chartData="objectBroker.chartIncome"
          />
        </b-col>
        <b-col md="3">
        </b-col>
      </b-row>
    </div>


    <div class="oracle pt-60">
      <b-row class="pb-40">
        <b-col md="12">
          <h4 class="text-center">Oracle</h4>
        </b-col>
      </b-row>
      <div class="pb-40">
        <b-row>
          <b-col md="10">
            <h4>Balance: {{ objectOracle.balance }}</h4>
          </b-col>
          <b-col md="2" class="text-right">
            <v-date-picker
              mode='range'
              v-model='objectOracle.selectedData'
              show-caps
            >
            </v-date-picker>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col md="12">
          <h5 class="pb-20 pt-30">Quantitative indicators of deals during this period:</h5>
          <b-list-group class="pb-20">
            <b-list-group-item>
              total deals: {{ objectOracle.deals.total }}
            </b-list-group-item>
            <b-list-group-item>
              your ‘Oracle’ smart contracts deals
              turnover: {{ objectOracle.deals.smartContractsTurn }}
            </b-list-group-item>
            <b-list-group-item>
              current period revenue: {{ objectOracle.deals.revenue }}
            </b-list-group-item>
            <b-list-group-item>
              fees sum (Oracle’s revenue): {{ objectOracle.deals.sumOracleRevenue }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </div>
    </div>
</template>

<script>
import GeneralChartPie from '@/components/page-components/General/GeneralChartPie.vue';


export default {
  name: 'FundsTable',
  components: {
    GeneralChartPie,
  },
  data() {
    return {
      objectTrader: {
        balance: '13245 GIC',
        dataRoi: '146%',
        selectedData: {
          start: new Date(2018, 0, 9),
          end: new Date(2018, 0, 18),
        },
        chartForecast: {
          title: {
            text: 'Forecast',
            subtext: 'Deals quantity in the course of this period of time',
          },
          seriesData: [
            { name: 'Successful', value: 80 },
            { name: 'Bad', value: 60 },
          ],
        },
        chartAmount: {
          title: {
            text: 'Amount successful forecast',
            subtext: 'Deals financial stats in the course of this period of time',
          },
          seriesData: [
            { name: 'Successful', value: 1100 },
            { name: 'Bad', value: 200 },
          ],
        },
        chartIncome: {
          title: {
            text: 'Income',
            subtext: 'Current period revenue',
          },
          legendData: [
            'Income', 'Loss',
          ],
          seriesData: [
            { name: 'Income', value: 900 },
            { name: 'Loss', value: 500 },
          ],
        },
      },
      objectBroker: {
        balance: '43245 GIC',
        dataRoi: '146%',
        selected: null,
        options: [
          { value: null, text: 'All brokers' },
          { value: 'Broker 1', text: 'Broker 1' },
          { value: 'Broker 2', text: 'Broker 2' },
          { value: 'Broker 3', text: 'Broker 3' },
          { value: 'Broker 4', text: 'Broker 4' },
        ],
        selectedData: {
          start: new Date(2018, 0, 9),
          end: new Date(2018, 0, 18),
        },
        allDeals: {
          quantitative: 56,
          totalBinary: 36,
          revenue: '1256 GIC',
        },
        TTDeals: {
          total: 15,
          sum: '124 GIC',
        },
        BTDeals: {
          total: 15,
          sum: '124 GIC',
        },
        chartIncome: {
          title: {
            text: 'Money made',
            subtext: 'Current period revenue',
          },
          legendData: [
            'Income', 'Loss',
          ],
          seriesData: [
            { name: 'Income', value: 900 },
            { name: 'Loss', value: 500 },
          ],
        },
      },
      objectOracle: {
        balance: '113245 GIC',
        selectedData: {
          start: new Date(2018, 0, 9),
          end: new Date(2018, 0, 18),
        },
        deals: {
          total: 1255,
          smartContractsTurn: '123454 GIC',
          revenue: '11456 GIC',
          sumOracleRevenue: '1456 GIC',
        },
      },
    };
  },
  methods: {

  },

};
</script>

<style lang="scss" scoped>
  .pb-20 {
    padding-bottom: 20px;
  }
  .pb-40 {
    padding-bottom: 40px;
  }
  .pt-30 {
    padding-top: 30px;
  }
  .pt-60 {
    padding-top: 60px;
  }
</style>
