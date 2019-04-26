<template>
  <div class="terms-of-use">
    <h1 class="mb-4 mt-4">
      Giant.Exchange Terms Of Use
    </h1>

    <ol class="terms-list">
      <li>
        You must be at least 18 years old to become a Giant.Exchange
        (hereinafter GEX) user.
      </li>
      <li>
        GEX offers to use binary options as a means for betting included but not
        limited to cryptocurrency price motion. GEX does not provide
        cryptocurrency exchange services (crypto-to-crypto, crypto-to-fiat or
        fiat-to-crypto). GEX is a decentralized application (dApp) based on the
        blockchain and smart contracts system built by the Giant Coin (GIC)
        creators.
      </li>
      <li>
        GEX founders are not endorsing the current dominating mechanism of
        binary options in which brokers are knowingly creating offerings to
        deceive investors. The mechanism of smart-contract binary options is
        open-source and can be analyzed by anyone before taking part in the
        related deals.
      </li>
      <li>
        GEX does not have any central authority: decisions on the financial
        policy of GEX are to be based on public votes. All day-to-day economic
        processes are automated.
      </li>
      <li>
        GEX fees are always displayed on the screen before the user can take any
        actual steps which require the said fees.
      </li>
      <li>
        Every GEX account is connected to the Giant Coin (GIC) wallet the user
        specifies. GEX does not perform unauthorized payments without the user
        confirmation. Giant Coin (GIC) is a cryptocurrency which cannot be
        viewed as a security: holders are investing in it not to participate in
        an enterprise and use the results of the work made by other persons,
        they use Giant Coin to pay for betting and win rewards which can be
        characterized as utility purposes.
      </li>
      <li>
        Every binary option on GEX has an underlying asset - the subject on
        which the user bets are based. A reliable underlying asset data source
        API (e.g. cryptocurrency price aggregator) must be linked with the GEX
        in the form of an oracle smart contract. The data source reliability is
        decided on a public vote on the addition of the new oracle into the GEX
        smart contracts pool. Without the said oracle smart contract, you cannot
        create a binary option with the underlying asset you desire. You must
        also have an enabling Giant Coin masternode to create GEX smart
        contracts.
      </li>
      <li>
        Every GEX binary option works on the following scheme. The user bets on
        a certain event in the future, gets a specified sum if the prognose was
        correct or nothing if the prognose was incorrect. The reward sum of
        Giant Coins is automatically transferred on the Giant Coin (GIC) wallet
        of the user who made a correct prediction. Transaction fees are excluded
        from the reward in advance. There can be different variations of binary
        options present on GEX (e.g. call options, put options) but this general
        principle is applied in all cases.
      </li>
      <li>
        GEX is a decentralized platform for binary options without any means to
        refund the sums you may lose during impudently-made bets. Please act
        rationally and invest only what you are ready to lose.
      </li>
      <li>
        GEX founders cannot be held responsible for the anomalous economic
        behavior of the underlying assets made by third parties and available to
        be used for bets on the platform.
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "TermsOfUse"
};
</script>

<style lang="scss" scoped>
.terms-of-use {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
}
.terms-list {
  padding-left: 25px;
  li {
    margin-bottom: 10px;
  }
}
</style>
