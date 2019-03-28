<template>
  <div>
    <b-tabs v-model="tabIndex">
      <b-tab title="Information">
        <table class="table table-striped broker-info">
          <tr>
            <td>
              <a href="#" @click.prevent="tabIndex = 2">
                <vue-stars
                    name="brokerRating"
                    active-color="#ffc107"
                    inactive-color="#c9c9c9"
                    shadow-color="none"
                    hover-color="#ffc107"
                    :max="5"
                    :value="brokerInfo.rating"
                    :readonly="true"
                    char=""
                    inactive-char=""
                    class="fa stars"
                />
              </a>
            </td>
            <td>
              <a href="#" @click.prevent="tabIndex = 2">
                {{ brokerInfo.reviewsCount }} reviews
              </a>
            </td>
          </tr>
          <tr>
            <td>{{ brokerInfo.volume }} BTC (24 hr volume)</td>
            <td>{{ brokerInfo.openedOptions }} opened options</td>
          </tr>
        </table>
      </b-tab>
      <b-tab title="Statistics">
        <b-table
            striped
            responsive
            :items="brokerInfo.statistics"
            :fields="fields"
            class="statistics-table"/>
      </b-tab>
      <b-tab title="Reviews">
        <div class="reviews-list mb-4">
          <div v-for="review in brokerInfo.reviews" :key="review.id" class="review">
            <div class="name">
              <b>{{ review.name }}</b>
            </div>
            <div class="review-rating">
              <vue-stars
                  :name="review.id"
                  active-color="#ffc107"
                  inactive-color="#c9c9c9"
                  shadow-color="none"
                  hover-color="#ffc107"
                  :max="5"
                  :value="review.rating"
                  :readonly="true"
                  char=""
                  inactive-char=""
                  class="fa stars"
              />
            </div>
            <div class="review-text">
              {{ review.text }}
            </div>
          </div>
        </div>
        <b-form @submit.prevent="sendReview" class="review-form">
          <b-form-textarea
              id="textarea"
              v-model="text"
              required
              placeholder="Your feedback (A fee is charged for the review)"
              rows="3"
              max-rows="6"
              class="mb-2"
          />
          <div class="error mb-2 text-danger" v-if="!$v.text.maxLength">
            Maximum {{$v.text.$params.maxLength.max}} letters.
          </div>
          <vue-stars
              name="userRating"
              active-color="#ffc107"
              inactive-color="#c9c9c9"
              shadow-color="none"
              hover-color="#ffc107"
              :max="5"
              v-model="userRating"
              char=""
              inactive-char=""
              class="fa stars mb-2 user-rating"
          />
          <b-button variant="success" type="submit">Ok</b-button>
        </b-form>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { maxLength } from 'vuelidate/lib/validators';

const question = 'Leaving your feedback means creating a smart contract. Do you agree to make a 30 GIC payment';

export default {
  name: 'BrokerInfo',
  props: {
    brokerInfo: {
      type: Object,
      default: () => ({
        statistics: [],
        reviews: [],
      }),
    },
  },
  data: () => ({
    fields: [
      {
        key: 'label',
        label: '',
      },
      {
        key: 'day',
      },
      {
        key: 'week',
      },
      {
        key: 'month',
      },
    ],

    text: '',
    userRating: 5,

    tabIndex: 0,
  }),
  validations() {
    return {
      text: {
        maxLength: maxLength(1000),
      },
    };
  },
  methods: {
    async sendReview() {
      // eslint-disable-next-line
      const isAgree = confirm(question);
      if (!this.$v.$invalid && isAgree) {
        this.$store.commit('showPreload');
        await new Promise(resolve => {
          setTimeout(() => {
            this.brokerInfo.reviews.unshift({
              id: Math.random().toString(),
              name: 'Mike',
              text: this.text,
              rating: this.userRating,
            });
            resolve();
          }, 300);
        });
        this.$store.commit('hidePreload');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .stars /deep/ label {
    display: inline-block;
    cursor: pointer;
    margin-bottom: 0;
    font-size: 1.1em;
  }
  .broker-info {
    width: 100%;
    td {
      padding: 10px;
      width: 50%;
    }
  }
  .statistics-table /deep/ {
    td:first-child {
      font-weight: bold;
    }
  }
  .reviews-list {
    max-height: 200px;
    overflow: scroll;
  }
  .review {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 5px;
    &-text {
      width: 100%;
    }
  }
  .user-rating {
    display: block;
  }
</style>

