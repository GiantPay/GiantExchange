<template>
  <div class="block-oracles">
    <div class="header">
      <span>Oracles</span>
      <div class="icon-block">
        <ListUl class="icon"></ListUl>
      </div>
    </div>
    <div class="content">
      <div class="block-title">
        <div class="main-title">
          <span class="main-title-text">Main Title</span>
          <span class="main-title-assets">Option #{{ option }}</span>
        </div>
        <div class="rating">
          <div class="header-rating">
            <span class="text-rating">Rating</span>
            <div class="block-rating">
              <span :class="setTextVariant">{{ ratingValue }}</span>
              <span class="grey">/10</span>
            </div>
          </div>
          <b-progress :value="setBarValue" :variant="setBarVariant"></b-progress>
        </div>
      </div>
      <div class="block-bar">
        <div class="header-bar">
          <span class="grey tx-10">Reserved</span>
          <span class="grey tx-10">Avaliable</span>
        </div>
        <div class="broker-bar">
          <b-progress>
            <b-progress-bar variant="primary" :value="setReservedBarValue"></b-progress-bar>
            <b-progress-bar variant="success" :value="setAvaliableBarValue"></b-progress-bar>
          </b-progress>
        </div>
        <div class="value-bar">
          <div class="reserved">
            <span>{{ reserved }}</span>
            <span class="grey tx-8">GIC</span>
          </div>
          <div class="avaliable">
            <span>{{ avaliable }}</span>
            <span class="grey tx-8">GIC</span>
          </div>
        </div>
      </div>
      <div class="block-value">
        <div class="brokers">
          <span class="header-value">Reward</span>
          <span class="value">{{ rewardValue }} %</span>
        </div>
        <div class="options">
          <span class="header-value">Volume</span>
          <span class="value">{{ volumeValue }} <span class="tx-8">GIC</span></span>
        </div>
        <div class="fee">
          <span class="header-value">Fee</span>
          <span class="value">{{ feeValue }} %</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ListUl from "../../../assets/icons/ListUl.vue";

  export default {
    name: "BlockBrokers",
    components: {
      ListUl,
    },
    props: {
      option: {
        type: Number,
        default: 0,
      },
      ratingValue: {
        type: Number,
        default: 0,
      },
      reserved: {
        type: Number,
        default: 0,
      },
      avaliable: {
        type: Number,
        default: 0,
      },
      rewardValue: {
        type: Number,
        default: 0,
      },
      volumeValue: {
        type: Number,
        default: 0,
      },
      feeValue: {
        type: Number,
        default: 0,
      },
    },
    computed: {
      setBarValue() {
        return this.ratingValue * 10;
      },
      setBarVariant() {
        if (this.ratingValue < 3) {
          return 'danger';
        } else if (3 >= this.ratingValue && this.ratingValue < 5) {
          return 'warning';
        } else {
          return 'success';
        }
      },
      setTextVariant() {
        if (this.ratingValue < 3) {
          return 'red';
        } else if (3 >= this.ratingValue && this.ratingValue < 5) {
          return 'yellow';
        } else {
          return 'green';
        }
      },
      setReservedBarValue() {
        return this.reserved / (this.reserved + this.avaliable) * 100;
      },
      setAvaliableBarValue() {
        return this.avaliable / (this.reserved + this.avaliable) * 100;
      }
    }
  }
</script>

<style scoped>
  .block-oracles {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    margin: 5px;
    max-width: 350px;
    height: 250px;
    border-radius: 5px;
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  }
  .header {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .icon-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23px;
    height: 23px;
    border-radius: 5px;
    background-color: #F4F5F7;
    opacity: 0.6;
  }
  .icon {
    color: #C7C7C7;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
  }
  .block-title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(199, 199, 199, 0.5);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .main-title {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .main-title-text {
    font-size: 12px;
  }
  .main-title-assets {
    font-size: 10px;
    color: #C7C7C7;
  }
  .rating {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .header-rating {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  /deep/.progress {
    height: 6px;
  }
  .block-bar {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(199, 199, 199, 0.5);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .broker-bar {
    padding-top: 2px;
    padding-bottom: 3px;
  }
  .value-bar  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }
  .block-value {
    display: flex;
    justify-content: space-between;
  }
  .brokers {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .fee {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .header-value {
    padding-top: 3px;
    padding-bottom: 7px;
    font-size: 12px;
  }
  .value {
    background-color: #F4F5F7;
    padding: 2px 10px;
    border-radius: 5px;
    font-size: 12px;
    color: #0E5FDA;
  }

  .green {
    color: #00CC5B;
  }
  .yellow {
    color: #E8C900;
  }
  .red {
    color: #FD2B2B;
  }
  .grey {
    color: #C7C7C7;
  }
  .blue {
    color: #0E5FDA;
  }
  .tx-10 {
    font-size: 10px;
  }
  .tx-8 {
    font-size: 8px;
  }
</style>