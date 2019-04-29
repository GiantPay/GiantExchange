<template>
  <div>
    <b-table
      striped
      responsive
      caption-top
      hover
      show-empty
      :items="list"
      :fields="fields"
      :sort-by.sync="sortBy"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :class="{ 'block-opt-refresh': isLoading }"
      class="block deals-table"
      @filtered="onFiltered"
      @row-clicked="rowClicked"
    >
      <template slot="table-caption">
        <div class="caption-block px-3">
          <h2>Deals</h2>
          <div class="right-block">
            <b-form-input
              v-model="filter"
              placeholder="Type to Search"
              class="filter-input"
            />
            <div class="btn-group">
              <button
                v-for="button in buttons"
                :key="button.caption"
                :class="{ focus: button.isActive }"
                class="btn btn-default"
                type="button"
                @click="toggleDeals(button)"
              >
                {{ button.caption }}
              </button>
            </div>
          </div>
        </div>
      </template>

      <template slot="isShow" slot-scope="data">
        <i
          class="fa fa-eye"
          aria-hidden="true"
          :class="{ 'fa-eye-slash': !data.value }"
          @click.stop="showDeal(data.item)"
        />
      </template>

      <template slot="time" slot-scope="data">
        <div>{{ getFormattedDate(data.value.open) }}</div>
        <div>{{ getFormattedDate(data.value.close) }}</div>
      </template>

      <template slot="reward" slot-scope="data">
        <div :class="{ 'text-danger': !parseInt(data.value) }">
          {{ data.value }}
        </div>
      </template>

      <template slot="amount" slot-scope="data">
        <div
          class="text-success"
          :class="{ 'text-danger': data.item.type === DEAL_TYPE.PUT }"
        >
          {{ data.value }}
          <i
            v-if="data.item.type === DEAL_TYPE.CALL"
            class="fa fa-arrow-up"
            aria-hidden="true"
          />
          <i v-else class="fa fa-arrow-down" aria-hidden="true" />
        </div>
      </template>

      <template slot="status" slot-scope="data">
        <div
          :class="{
            'text-danger': data.value === DEAL_STATUS_CAPTION.FAIL,
            'text-warning': data.value === DEAL_STATUS_CAPTION.WAITING
          }"
        >
          {{ data.value }}
        </div>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
    />

    <b-modal
      ref="modalDealInfo"
      :title="dealInfo.id"
      centered
      hide-footer
      body-class="form-popup"
      modal-class="form-modal"
    >
      <DealInfo :deal-info="dealInfo" />
    </b-modal>
  </div>
</template>

<script>
import moment from "moment";

import {
  DEAL_OWNER,
  DEAL_STATUS_CAPTION,
  DEAL_TYPE
} from "@/modules/constants";

const dateFormat = "DD.MM.YYYY, HH:mm:ss";

import DealInfo from "./DealInfo.vue";

export default {
  name: "DealsTable",
  components: {
    DealInfo
  },
  props: {
    dealList: {
      type: Array
    },
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    fields: [
      {
        key: "isShow",
        label: "Hide"
      },
      {
        key: "time",
        sortable: true
      },
      {
        key: "id",
        sortable: true
      },
      {
        key: "openValue",
        label: "Open",
        sortable: true
      },
      {
        key: "closeValue",
        label: "Close",
        sortable: true
      },
      {
        key: "amount",
        sortable: true,
        tdClass: "text-danger"
      },
      {
        key: "reward",
        sortable: true,
        tdClass: "text-success"
      },
      {
        key: "status",
        sortable: true,
        tdClass: "text-success"
      }
    ],
    sortBy: "time",
    currentPage: 1,
    perPage: 10,
    filter: "",
    totalRows: 1,

    buttons: [
      {
        caption: "My",
        isActive: true,
        dealOwner: DEAL_OWNER.USER
      },
      {
        caption: "All",
        isActive: false,
        dealOwner: DEAL_OWNER.ALL
      }
    ],

    DEAL_STATUS_CAPTION,
    DEAL_TYPE,

    dealInfo: {
      time: {}
    }
  }),
  computed: {
    list() {
      return this.dealList.map(item => ({
        isShow: true,
        ...item
      }));
    }
  },
  watch: {
    dealList(val) {
      this.totalRows = val.length;
    }
  },
  methods: {
    getFormattedDate(date) {
      if (date) {
        return moment(date).format(dateFormat);
      }
      return "-";
    },
    toggleDeals(button) {
      this.buttons.forEach(value => {
        value.isActive = false;
      });
      button.isActive = true;
      this.$emit("toggleDeals", button.dealOwner);
    },
    showDeal(item) {
      item.isShow = !item.isShow;
      this.$emit("showDeal", item.id);
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    rowClicked(item) {
      this.dealInfo = item;
      this.$refs.modalDealInfo.show();
    }
  }
};
</script>

<style lang="scss" scoped>
.caption-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    box-shadow: none;
  }
}
.right-block {
  display: flex;
}
.filter-input {
  margin-right: 15px;
}
.block {
  background: #f9f9f9;
  &.block-opt-refresh:before {
    background: rgba(255, 255, 255, 0.7);
  }
}
.deals-table /deep/ td {
  cursor: pointer;
}
</style>
