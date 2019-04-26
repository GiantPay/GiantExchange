<template>
  <div>
    <AssetRegistration v-if="votingTypeId === VOTING_TYPE.UPLOAD.ASSET" />
    <AssetDelete v-if="votingTypeId === VOTING_TYPE.DELETE.ASSET" />
    <OracleRegistration v-if="votingTypeId === VOTING_TYPE.UPLOAD.ORACLE" />
    <OracleDelete v-if="votingTypeId === VOTING_TYPE.DELETE.ORACLE" />
    <BrokerRegistration
      v-if="votingTypeId === VOTING_TYPE.UPLOAD.FACTORY_BROKERS"
    />
    <BrokerDelete v-if="votingTypeId === VOTING_TYPE.DELETE.FACTORY_BROKERS" />
    <DividendPayment v-if="votingTypeId === VOTING_TYPE.OTHER.DIVIDENDS" />
    <FundingInitiative
      v-if="votingTypeId === VOTING_TYPE.OTHER.FUNDING_INITIATIVE"
    />
    <NoFundingInitiative v-if="votingTypeId === VOTING_TYPE.OTHER.INITIATIVE" />
    <NewOptionValue v-if="betweenNewValues" />
    <SmartContractCodeChange
      v-if="votingTypeId === VOTING_TYPE.OTHER.SMART_CONTRACT_CODE_CHANGE"
    />
    <p class="mb-2">
      Smart contract value - 30 GIC
    </p>
  </div>
</template>

<script>
import AssetRegistration from "./AssetRegistration.vue";
import AssetDelete from "./AssetDelete.vue";
import OracleRegistration from "./OracleRegistration.vue";
import OracleDelete from "./OracleDelete.vue";
import BrokerRegistration from "./BrokerRegistration.vue";
import BrokerDelete from "./BrokerDelete.vue";
import DividendPayment from "./DividendPayment.vue";
import FundingInitiative from "./FundingInitiative.vue";
import NoFundingInitiative from "./NoFundingInitiative.vue";
import NewOptionValue from "./NewOptionValue.vue";
import SmartContractCodeChange from "./SmartContractCodeChange.vue";

import { VOTING_TYPE } from "@/modules/constants";

export default {
  name: "VotingCreateForms",
  components: {
    AssetRegistration,
    AssetDelete,
    OracleRegistration,
    OracleDelete,
    BrokerRegistration,
    BrokerDelete,
    DividendPayment,
    FundingInitiative,
    NoFundingInitiative,
    NewOptionValue,
    SmartContractCodeChange
  },
  props: {
    votingTypeId: {
      type: Number
    }
  },
  data: () => ({
    VOTING_TYPE
  }),
  computed: {
    betweenNewValues() {
      return (
        this.votingTypeId >=
          VOTING_TYPE.OTHER.TRADING_OPTIONS.MAX_ORACLES_IN_ASSET &&
        this.votingTypeId <=
          VOTING_TYPE.OTHER.GOVERNANCE_OPTIONS.MASTERNODE_MULTIPLIER
      );
    }
  }
};
</script>
