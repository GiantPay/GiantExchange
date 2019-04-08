<template>
  <div class="card-bet" :class="{'card-bet-active': isActive}">
    <div class="header">
      <div class="header-currency" :class="{'header-currency-active': isActive}">
        <span>{{currencyFirst}} / {{currencySecond}}</span>
      </div>
      <div class="header-id-bet">
        <span>ID {{betId}}</span>
      </div>
    </div>
    <div class="body">

      <div v-if="!isActive" >
        <div class="body-profit">
        <span class="profit-value" :class="[{ green: (profitValue > 0) }, { red: (profitValue < 0) }]">
          <span v-if="profitValue > 0">+</span>{{profitValue}}
        </span>
          <span class="profit-gic"
                :class="[{ green: (profitValue > 0) }, { red: (profitValue < 0) }]">
          {{currencyBet}}</span>
        </div>
        <div class="body-bet">
          <span class="bet-value">{{betValue}}</span>
          <span class="bet-gic">{{currencyBet}}</span>
        </div>
      </div>

      <div v-if="isActive" class="body-bet-active">
        <div class="body-bet-block-left">
          <span class="active-rate-value-second">{{rateSecond}}</span>
          <span class="active-rate-value-first">
            {{rateFirst}}
            <span v-if="rateFirst > rateSecond" class="rate-icon-red">
            <CaretDown></CaretDown>
            </span>
            <span v-if="rateFirst < rateSecond" class="rate-icon-green">
              <CaretUp></CaretUp>
            </span>
          </span>
        </div>
        <div class="body-bet-block-right">
          <span class="active-bet-profit">
            {{profitValue}}
            <span class="active-profit-gic">{{currencyBet}}</span>
          </span>
          <span class="active-bet-value">
            {{betValue}}
            <span class="active-bet-gic">{{currencyBet}}</span>
          </span>
        </div>
      </div>

    </div>
    <div class="footer" v-if="!isActive">
        <div class="footer-data">
        <span class="data-icon">
          <Clock></Clock>
        </span>
          <span class="data-value">{{betDate}}</span>
        </div>
        <div class="footer-rate">
          <span class="rate-value">{{rateFirst}} &#8739; {{rateSecond}}</span>
          <span v-if="rateFirst > rateSecond" class="rate-icon-red">
          <CaretDown></CaretDown>
        </span>
          <span v-if="rateFirst < rateSecond" class="rate-icon-green">
          <CaretUp></CaretUp>
        </span>
        </div>
    </div>
    <div class="footer" v-if="isActive">
      <div class="time-bar">
        {{timeBet}}
      </div>
      <b-progress :value="barValue" :variant="barVariant" class="bar"/>
    </div>
  </div>
</template>

<script>
  import BarAlignLeft from '../../../assets/icons/BarAlignLeft.vue';
  import Clock from '../../../assets/icons/Clock.vue';
  import CaretDown from '../../../assets/icons/CaretDown.vue';
  import CaretUp from '../../../assets/icons/CaretUp.vue';

  export default {
    name: 'CardBet',
    components: {
      BarAlignLeft,
      Clock,
      CaretDown,
      CaretUp,
    },
    props: {
      currencyFirst: {
        type: String,
        default: '',
      },
      currencySecond: {
        type: String,
        default: '',
      },
      betId: {
        type: Number,
        default: 0,
      },
      profitValue: {
        type: Number,
        default: 0,
      },
      currencyBet: {
        type: String,
        default: 'GIC',
      },
      betValue: {
        type: Number,
        default: 0,
      },
      betDate: {
        type: String,
        default: '',
      },
      rateFirst: {
        type: Number,
        default: 0,
      },
      rateSecond: {
        type: Number,
        default: 0,
      },
      isActive: {
        type: Boolean,
        default: false,
      },
      barValue: {
        type: Number,
        default: 0,
      },
      timeBet: {
        type: String,
        default: '',
      }
    },
  };
</script>

<style lang="scss" scoped>
  .card-bet {
    width: 188px;
    height: 112px;
    background-color: #F4F5F7;
    border-radius: 5px;
    border: 0;
    padding: 4px 10px;
  }

  .header {
    display: flex;
    position: relative;
    width: 100%;
    height: 20%;
    justify-content: space-between;
    align-items: center;
  }

  .body {
    display: flex;
    position: relative;
    width: 100%;
    height: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer {
    display: flex;
    position: relative;
    width: 100%;
    height: 20%;
    justify-content: space-between;
  }

  .header-currency {
  }

  .header-currency > span {
    font-family: "Gotham Pro";
    font-size: 10px;
    opacity: 0.6;
    color: #555555;
  }

  .header-id-bet {
  }

  .header-id-bet > span {
    font-family: "Gotham Pro Light";
    font-size: 8px;
    color: #C7C7C7;
  }

  .body-profit {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .profit-value {
    display: block;
    font-family: "Gotham Pro";
    font-size: 20px;
    color: #C7C7C7;
  }

  .profit-gic {
    display: block;
    font-family: "Gotham Pro Light";
    font-size: 10px;
    color: #C7C7C7;
    opacity: 0.6;
    padding-left: 4px;
    padding-bottom: 4px;
  }

  .body-bet {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .bet-value {
    font-family: "Gotham Pro Light";
    font-size: 10px;
    color: #C7C7C7;
  }

  .bet-gic {
    font-family: "Gotham Pro Light";
    font-size: 6px;
    color: #C7C7C7;
    padding-left: 2px;
    padding-bottom: 2px;
  }

  .footer-data {
    display: flex;
    width: 50%;
    justify-content: flex-start;
    align-items: center;
  }

  .data-icon {
    font-size: 10px;
    padding-right: 2px;
    color: #C7C7C7;
  }

  .data-value {
    font-family: "Gotham Pro Light";
    font-size: 8px;
    color: #C7C7C7;
  }

  .footer-rate {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    align-items: center;
  }

  .rate-value {
    font-family: "Gotham Pro Light";
    font-size: 8px;
    color: #C7C7C7;
  }

  .rate-icon-red {
    font-size: 10px;
    padding-left: 2px;
    color: #FD2B2B;
  }

  .rate-icon-green {
    font-size: 10px;
    padding-left: 2px;
    color: #00CC5B;
  }

  .green {
    color: #00CC5B
  }

  .red {
    color: #FD2B2B;
  }

  /*Active*/
  .card-bet-active {
    background-color: #ffffff;
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  }

  .header-currency-active > span {
    opacity: 1;
    font-weight: bold;
  }

  .body-bet-active {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .body-bet-block-left {
    display: flex;
    width: 50%;
    flex-direction: column;
  }

  .body-bet-block-right {
    display: flex;
    width: 50%;
    flex-direction: column;
  }

  .active-rate-value-second {
    font-size: 14px;
    justify-content: flex-start;
    align-items: center;
  }

  .active-rate-value-first {
    font-size: 10px;
    align-items: center;
  }

  .active-bet-profit {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 14px;
  }

  .active-profit-gic {
    font-family: "Gotham Pro Light";
    font-size: 10px;
    opacity: 0.6;
    padding-bottom: 1px;
    padding-left: 3px;
  }

  .active-bet-value {
    font-family: "Gotham Pro Light";
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 10px;
  }

   .active-bet-gic {
    font-family: "Gotham Pro Light";
    font-size: 6px;
    opacity: 0.6;
    padding-left: 2px;
    padding-bottom: 2px;
  }

  .bar {
    position: absolute;
    top: 1px;
    left: -10px;
    width: 188px;
    height: 24px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .progress {
    background-color: #F4F5F7;
  }

  .time-bar {
    position: absolute;
    top: 7px;
    left: 0;
    font-size: 8px;
    color: #ffffff;
    z-index: 1000;
  }
</style>
