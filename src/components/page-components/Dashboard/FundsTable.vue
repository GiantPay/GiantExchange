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
      <b-col md="12" class="roiHeader">
        <h2 class="text-center">Trading ROI: {{ objectTrader.dataRoi }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4" class="text-center">
        <GeneralChartPie
          :chartData="objectTrader.chartForecast"
        />
      </b-col>
      <b-col md="4">
        <GeneralChartPie
          :chartData="objectTrader.chartAmount"
        />
      </b-col>
      <b-col md="4">
        <GeneralChartPie
          :chartData="objectTrader.chartIncome"
        />
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
          <b-col md="8">
            <h4>Balance: {{ objectBroker.balance }}</h4>
          </b-col>
          <b-col md="2">
            <b-form-select
              v-model="objectBroker.selected"
              :options="objectBroker.options"
              size="sm"
            />
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
        <b-col md="12" class="roiHeader">
          <h2 class="text-center">Binary options ROI: {{ objectBroker.dataRoi }}</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" class="roiHeader">
          <h3 class="text-center">Total deals: {{ objectBroker.totalDeals }}</h3>
          <b-list-group class="pb-20">
            <b-list-group-item>
              Indicators of Deals for a chosen period: {{ objectBroker.dealsAll }}
            </b-list-group-item>
            <b-list-group-item>
              Total deals with binary options: {{ objectBroker.dealsTotalBinary }}
            </b-list-group-item>
            <b-list-group-item>
              Current period profit: {{ objectBroker.dealsRevenue }}
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-card border-variant="Default"
                  header="Т-Т (Trader vs Trader) deals:"
                  header-bg-variant="Default"
                  align="center">
            <b-list-group class="pb-20">
              <b-list-group-item>
                total T-T deals quantity: {{ objectBroker.TTtotal }}
              </b-list-group-item>
              <b-list-group-item>
                fees sum: {{ objectBroker.TTsum }}
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card border-variant="Default"
                  header="B-Т (Broker vs Trader) deals:"
                  header-bg-variant="Default"
                  align="center">
            <b-list-group class="pb-20">
              <b-list-group-item>
                total B-T deals quantity: {{ objectBroker.BTtotal }}
              </b-list-group-item>
              <b-list-group-item>
                secured funds quantity: {{ objectBroker.BTsum }}
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="pt-30">
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
        <b-col md="6">
          <b-card border-variant="Default"
                  header="Deals:"
                  header-bg-variant="Default"
                  align="center">
            <b-progress class="mt-1" show-value>
              <b-progress-bar
                :value="objectOracle.dealsTotal"
                variant="primary"
              >
              </b-progress-bar>
              <b-progress-bar
                :value="objectOracle.dealsSmartContractsTurn"
                variant="danger"
              >
              </b-progress-bar>
            </b-progress>
            <b-list-group class="pb-20">
              <b-list-group-item>
                total deals:
                <b-badge variant="primary">
                  {{ objectOracle.dealsTotal }}
                </b-badge>
              </b-list-group-item>
              <b-list-group-item>
                your ‘Oracle’ smart contracts deals
                turnover:
                <b-badge variant="danger">
                  {{ objectOracle.dealsSmartContractsTurn }}
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card border-variant="Default"
                  header="Revenue:"
                  header-bg-variant="Default"
                  align="center">
            <b-progress class="mt-1" show-value>
              <b-progress-bar
                :value="objectOracle.dealsRevenue"
                variant="primary"
              >
              </b-progress-bar>
              <b-progress-bar
                :value="objectOracle.dealsSumOracleRevenue"
                variant="danger"
              >
              </b-progress-bar>
            </b-progress>
            <b-list-group class="pb-20">
              <b-list-group-item>
                current period revenue:
                <b-badge variant="primary">
                  {{ objectOracle.dealsRevenue }}
                </b-badge>
              </b-list-group-item>
              <b-list-group-item>
                fees sum (Oracle’s revenue):
                <b-badge variant="danger">
                  {{ objectOracle.dealsSumOracleRevenue }}
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </div>
    </div>
</template>

<script>
import GiantGovernance from '@/modules/giant-governance/mocks';
import GeneralChartPie from '@/components/page-components/General/GeneralChartPie.vue';


export default {
  name: 'FundsTable',
  components: {
    GeneralChartPie,
  },
  data() {
    return {
      objectTrader: {
        chartForecast: {
          title: {
            text: 'Forecast',
            subtext: 'Deals over a chosen period of time',
          },
          seriesData: [
            { name: 'Successful', value: 80 },
            { name: 'Unsuccessful ', value: 60 },
          ],
        },
      },
      objectBroker: {},
      objectOracle: {},
    };
  },
  created() {
    this.getObjectTrader();
    this.getObjectBroker();
    this.getObjectOracle();
  },
  methods: {
    async getObjectTrader() {
      /* this.objectTrader = await GiantGovernance.getObjectTrader(); */
    },
    async getObjectBroker() {
      this.objectBroker = await GiantGovernance.getObjectBroker();
    },
    async getObjectOracle() {
      this.objectOracle = await GiantGovernance.getObjectOracle();
    },
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
  .roiHeader {
    padding: 10px 10px 10px 10px;
    margin-bottom: 30px;
    background: #eee;
  }
</style>
