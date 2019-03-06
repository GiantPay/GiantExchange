<template>
  <div class="home">
    <header id="header" class="header">
      <div class="container">
        <div class="logo">
          <img src="@/assets/home/logo.png" alt="Logo">
        </div>
        <div class="header__middle flex">
          <div class="header__text">
            <h1>
              Binary options 2.0
            </h1>
            <div class="header__text_signature">
              The decentralized market of binary options without risking data and
              user funds manipulation.
              Backed by automatic smart contracts execution and reputation system.
              An open platform where every user can be an Oracle, a Broker or a Trader.
            </div>
            <div class="header__buttons flex">
              <a href="https://giantpay.network/GiantExchangeWhitepaper.pdf" target="_blank" class="btn">White Paper</a>
              <a href="https://beta.giant.exchange/dashboard" target="_blank" class="btn">Dashboard</a>
            </div>
          </div>

          <div class="header__video flex">
            <div class="exp"></div>
            <div class="exp2"></div>
            <a href="#" v-b-modal.modalVideo>
              <span></span>
              <i>Watch video</i>
            </a>
          </div>
        </div>
        <div class="header__stat flex" style="display: none;">
          <div class="header__stat_item">
            <div class="header__stat_digit">
              12 525
            </div>
            <div class="header__stat_title">
              Traders
            </div>
          </div>
          <div class="header__stat_item">
            <div class="header__stat_digit">
              285
            </div>
            <div class="header__stat_title">
              Oracles
            </div>
          </div>
          <div class="header__stat_item">
            <div class="header__stat_digit">
              853
            </div>
            <div class="header__stat_title">
              Options
            </div>
          </div>
          <div class="header__stat_item">
            <div class="header__stat_digit">
              274 352
            </div>
            <div class="header__stat_title">
              Volume 24h (GIC)
            </div>
          </div>
        </div>

        <div class="header__signature">
          Powered by <a href="https://giantpay.network/" target="_blank"><span></span> technology</a>
        </div>
      </div>
    </header>

    <section class="rules">
      <div class="container">
        <h2 class="wow flipInX">
          The rules have changed
        </h2>
        <div class="rules__items flex">
          <div class="rules__item wow slideInLeft">
            <div class="rules__item_top flex">
              <div class="rules__item_title">
                <p>
                  Blockchain
                </p>
                <p>
                  stores your funds
                </p>
              </div>
              <p>
                no broker
              </p>
            </div>

            <div class="rules__item_text">
              The brokerage user funds are stored on their Giant blockchain wallets.
              There is no need to transfer the funds to the third party service.
              The lack of centralized funds storage eradicates withdrawal and theft issues.
              The money is controlled by no one else than the owner who uses
              the local wallet software.
            </div>
          </div>

          <div class="rules__item wow slideInUp">
            <div class="rules__item_top flex">
              <div class="rules__item_title">
                <p>
                  Smart contract
                </p>
                <p>
                  determines winners
                </p>
              </div>
              <p>
                no broker
              </p>
            </div>

            <div class="rules__item_text">
              Who predicts correctly and who gets the reward —
              this is defined by the Binary Option smart contract.
              For this to happen, the platform needs an accurate asset
              value transmitted from aggregator sites by another smart
              contract called Oracle with the help of the Giant.Exchange API.
              All this data is fully transparent and the Trader can always
              be sure that the deal is fair.
            </div>
          </div>

          <div class="rules__item wow slideInRight">
            <div class="rules__item_top flex">
              <div class="rules__item_title">
                <p>
                  Smart contract
                </p>
                <p>
                  sends rewards
                </p>
              </div>
              <p>
                no broker
              </p>
            </div>

            <div class="rules__item_text">
              The successful deal reward payment is made by the
              Binary Option smart contract. The reward amount is
              always equal to the value set in the contract terms
              in advance. All rewards are backed by the funds temporarily
              frozen on the smart contract address. No errors,
              delays or incomplete rewards are ever possible to emerge.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="safe">
      <div class="container">
        <h2 class="wow flipInX">
          Safe infrastructure
        </h2>
        <div class="safe__items">
          <div class="line line-one"></div>
          <div class="line line-two"></div>
          <div class="line line-three"></div>
          <div class="line line-four"></div>
          <div class="line line-five"></div>
          <div class="line line-six"></div>
          <div class="line line-seven"></div>
          <div class="safe__mobile-lines">
            <div class="line line-eith"></div>
            <div class="line line-nine"></div>
            <div class="line line-ten"></div>
            <div class="line line-eleven"></div>
            <div class="line line-twelve"></div>
            <div class="line line-thirteen"></div>
            <div class="line line-fourteen"></div>
            <div class="line line-fifteen"></div>
            <div class="line line-sixteen"></div>
          </div>
          <div class="safe__item safe__item-one">
            <div class="safe__item_text">
              Smart contract
            </div>
            <div class="safe__item_title">
              Oracle
            </div>
          </div>
          <div class="safe__item safe__item-two">
            <div class="safe__item_text">
              Smart contract
            </div>
            <div class="safe__item_title">
              Giant.Exchange
            </div>
          </div>
          <div class="safe__item safe__item-three">
            <div class="safe__item_text">
              Smart contract
            </div>
            <div class="safe__item_title">
              Binary option
            </div>
          </div>
          <div class="safe__item safe__item-center">
            <div class="safe__item_logo">
              <img src="@/assets/home/logo-word-black.png" alt="Safe logo">
            </div>
            <div class="safe__item-center_text">
              Blockchain
            </div>
          </div>
          <div class="safe__item safe__item-four">
            <div class="safe__item_top">
              <div class="safe__item_title">
                Giant.Exchange
              </div>
            </div>
            <div class="safe__item_bottom">
              <div class="safe__item_block">
                Back end
                <br>
                application
              </div>
              <div class="safe__item_block">
                Front end
                <br>
                application
              </div>
            </div>
          </div>
          <div class="safe__item safe__item-five flex">
            <div class="safe__item-five_title">
              Trader
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="smart">
      <div class="container">
        <h2 class="wow flipInX">
          Smart contracts
        </h2>

        <div class="smart__content flex">
          <div class="smart__slider-wrapper flex wow bounceInLeft">
            <slick
                ref="slickContracts"
                :options="smartContractsSlickOptions"
                class="smart__slider">
              <div class="smart__slider_item">
                <a href="#" class="smart__slider_item-top flex smart-link-two" @click="prev">
                  <div class="smart__slider_item-top-icon">
                    <img src="@/assets/home/smart-slider-icon.png" alt="Icon">
                  </div>
                  <div class="smart__slider_item-top-text">
                    <p>
                      Smart contract
                    </p>
                    <p>
                      Binary option
                    </p>
                  </div>
                </a>
                <div class="smart__slider_item-middle flex">
                  <div class="smart__slider_item-middle-icon">
                    <img src="@/assets/home/smart-slider-icon.png" alt="Icon">
                  </div>
                  <div class="smart__slider_item-middle-text">
                    <p>
                      Smart contract
                    </p>
                    <p>
                      Oracle
                    </p>
                  </div>
                </div>
                <a href="#" class="smart__slider_item-bottom flex smart-link-one" @click="next">
                  <div class="smart__slider_item-bottom-icon">
                    <img src="@/assets/home/smart-slider-icon.png" alt="Icon">
                  </div>
                  <div class="smart__slider_item-bottom-text">
                    <p>
                      Smart contract
                    </p>
                    <p>
                      Giant.Exchange
                    </p>
                  </div>
                </a>
              </div>
              <div class="smart__slider_item">
                <a href="#" class="smart__slider_item-top flex smart-link-zero" @click="prev">
                  <div class="smart__slider_item-top-icon">
                    <img src="@/assets/home/smart-slider-icon.png" alt="Icon">
                  </div>
                  <div class="smart__slider_item-top-text">
                    <p>
                      Smart contract
                    </p>
                    <p>
                      Oracle
                    </p>
                  </div>
                </a>
                <div class="smart__slider_item-middle flex">
                  <div class="smart__slider_item-middle-icon">
                    <img src="@/assets/home/smart-slider-icon.png" alt="Icon">
                  </div>
                  <div class="smart__slider_item-middle-text">
                    <p>
                      Smart contract
                    </p>
                    <p>
                      Giant.Exchange
                    </p>
                  </div>
                </div>
                <a href="#" class="smart__slider_item-bottom flex smart-link-two" @click="next">
                  <div class="smart__slider_item-bottom-icon">
                    <img src="@/assets/home/smart-slider-icon.png" alt="Icon">
                  </div>
                  <div class="smart__slider_item-bottom-text">
                    <p>
                      Smart contract
                    </p>
                    <p>
                      Binary option
                    </p>
                  </div>
                </a>
              </div>
              <div class="smart__slider_item">
                <a href="#" class="smart__slider_item-top flex smart-link-one" @click="prev">
                  <div class="smart__slider_item-top-icon">
                    <img src="@/assets/home/smart-slider-icon.png" alt="Icon">
                  </div>
                  <div class="smart__slider_item-top-text">
                    <p>
                      Smart contract
                    </p>
                    <p>
                      Giant.Exchange
                    </p>
                  </div>
                </a>
                <div class="smart__slider_item-middle flex">
                  <div class="smart__slider_item-middle-icon">
                    <img src="@/assets/home/smart-slider-icon.png" alt="Icon">
                  </div>
                  <div class="smart__slider_item-middle-text">
                    <p>
                      Smart contract
                    </p>
                    <p>
                      Binary option
                    </p>
                  </div>
                </div>
                <a href="#" class="smart__slider_item-bottom flex smart-link-zero" @click="next">
                  <div class="smart__slider_item-bottom-icon">
                    <img src="@/assets/home/smart-slider-icon.png" alt="Icon">
                  </div>
                  <div class="smart__slider_item-bottom-text">
                    <p>
                      Smart contract
                    </p>
                    <p>
                      Oracle
                    </p>
                  </div>
                </a>
              </div>
            </slick>
            <div class="smart__slider_control">
              <div class="smart__slider_arrows"></div>
              <div class="smart__slider_dots"></div>
            </div>
          </div>

          <div class="smart__text wow bounceInRight">
            <h3>
              Giant.Exchange
            </h3>
            <p>
              The Oracle smart contract (hereinafter Oracle) is designed
              to receive reliable information from open sources and to
              transfer this data to the Giant blockchain and the
              Giant.Exchange smart contract afterwards.
              Every user can create an Oracle by having a working
              Giant network masternode to sign the smart contract
              with a private key.
              The data provided by the Oracle is used by the Binary
              Option smart contract to define the winners among
              Traders who participate.
              The Oracle is earning new funds from fees every time
              when the provided data is used in the deal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="look">
      <div class="container flex">
        <div class="look__title">
          Check out the trading platform!
        </div>
        <div class="look__buttons flex">
          <a href="https://beta.giant.exchange/trading" target="_blank" class="btn">Let’s Go!</a>
        </div>
      </div>
    </section>

    <section class="governance">
      <div class="container">
        <h2 class="wow flipInX">
          Governance
        </h2>
        <div class="governance__top flex">
          <div class="governance__top_img flex wow zoomIn">
            <img src="@/assets/home/governance-img.png" alt="Governance image">
          </div>
          <div class="governance__text wow slideInRight">
            <p>
              Giant.Exchange is not operated by a central organization.
              Smart contracts execute the proposed changes after the
              majority approval of the new initiative is reached.
              The list of customizable features is wide and can be
              divided into two following groups. In other words, the
              work of Giant.Exchange can be discussed and configured by
              the public. This makes the platform a truly decentralized
              application built on the Giant blockchain.
            </p>
            <a href="#" class="btn" style="display: none;">
              Governance
            </a>
          </div>
        </div>

        <div class="governance__items flex">
          <div class="governance__item wow slideInLeft">
            <div class="governance__item_title">
              Trading Management
            </div>
            <p>
              On Giant.Exchange, traders are using Giant binary
              option and underlying asset data smart contracts
              on a daily basis. The addition, change and deletion
              of binary options, underlying assets and all other
              features connected with the usage of Giant.Exchange
              form a large group of customizable parameters.
            </p>
          </div>
          <div class="governance__item wow slideInRight">
            <div class="governance__item_title">
              Structural Management
            </div>
            <p>
              Behind the scenes, there is a big set of changeable
              variables. Although a regular user doesn’t see them
              on the trading interface, they provide the safe future
              of Giant.Exchange. Brokers dividends distribution,
              self-financing and other core principles of the platform
              –  all of this can be changed by user voting
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="digital">
      <div class="container">
        <h2 class="wow flipInX">
          Digital asset
        </h2>
        <div class="digital__content flex">
          <div class="digital__cards">
            <div class="digital__card flex wow flipInY">
              <div class="digital__card_left">
                <div class="digital__card_title">
                  GIC Price
                </div>
                <div class="digital__card_change inc" :class="{ dec: GIC.changePrice24h < 0 }">
                  {{ GIC.changePrice24h }} %
                </div>
              </div>
              <div class="digital__card_right">
                <div class="digital__card_dollars">
                  {{ GIC.usd.toFixed(2) }}$
                </div>
                <div class="digital__card_btc">
                  {{ GIC.btc }} BTC
                </div>
              </div>
            </div>
            <div class="digital__card flex wow flipInY">
              <div class="digital__card_left">
                <div class="digital__card_title">
                  Volume 24h
                </div>
                <div class="digital__card_change inc" :class="{ dec: GIC.changeVolume24h < 0 }">
                  {{ GIC.changeVolume24h }} %
                </div>
              </div>
              <div class="digital__card_right">
                <div class="digital__card_dollars">
                  {{ GIC.usdVolume.toFixed() }}$
                </div>
                <div class="digital__card_btc">
                  {{ GIC.volume.toFixed(5) }} BTC
                </div>
              </div>
            </div>
          </div>
          <div class="digital__text">
            Giant Coin (GIC) is a cryptocurrency in the Giant blockchain.
            This is the single payment tool for Giant.Exchange.
            All operations including the binary option purchase,
            rewards retrieval, smart contract fee payments,
            votes participation etc. are made exclusively in GIC.
            To start working with Giant.Exchange, you must first
            install a wallet software on your device and deposit a
            required amount of GIC on it. Giant Coin can be acquisitioned
            either through purchases on exchanges or passively.
            There are two passive GIC revenue generation methods:
            via PoS mining or by launching a masternode.
          </div>
        </div>
        <div class="digital__buttons flex">
          <a href="https://giantpay.network/exchange" target="_blank" class="btn">Exchanges</a>
          <a href="https://giantpay.network/wallet" target="_blank" class="btn">Wallet</a>
        </div>
      </div>
    </section>

    <section class="team">
      <div class="container">
        <h2 class="wow flipInX">
          Team
        </h2>
        <div class="team__slider-wrapper">
          <div class="team__slider_arrows"></div>
          <slick
              ref="slick"
              :options="teamSlickOptions"
              class="team__slider">
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/Mask Group-4.jpg" alt="Dmitry Filinberg">
              </div>
              <div class="team__slider_item-name">
                Dmitry Filinberg
              </div>
              <div class="team__slider_item-post">
                CEO/Technical Lead
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/Mask Group-1.jpg" alt="Pavel Bulatov">
              </div>
              <div class="team__slider_item-name">
                Pavel Bulatov
              </div>
              <div class="team__slider_item-post">
                Marketing Lead
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/Mask Group-2.jpg" alt="Mikhail Maximov">
              </div>
              <div class="team__slider_item-name">
                Mikhail Maximov
              </div>
              <div class="team__slider_item-post">
                Community Lead
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/Mask Group.jpg" alt="Maria Sergeeva">
              </div>
              <div class="team__slider_item-name">
                Maria Sergeeva
              </div>
              <div class="team__slider_item-post">
                Project Manager
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/Mask Group-3.jpg" alt="Nikolay Korinets">
              </div>
              <div class="team__slider_item-name">
                Nikolay Korinets
              </div>
              <div class="team__slider_item-post">
                Writer
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/Mask Group-5.jpg" alt="Dmitry Myachin">
              </div>
              <div class="team__slider_item-name">
                Dmitry Myachin
              </div>
              <div class="team__slider_item-post">
                Blockchain Dev
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/Mask Group-6.jpg" alt="Ablai Tursumbekov">
              </div>
              <div class="team__slider_item-name">
                Ablai Tursumbekov
              </div>
              <div class="team__slider_item-post">
                Front-End Dev
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/22496394.jpg" alt="Denis Seliverstov">
              </div>
              <div class="team__slider_item-name">
                Denis Seliverstov
              </div>
              <div class="team__slider_item-post">
                Front-End Dev Jr
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/Alexey.jpg" alt="Alexei Bokarev">
              </div>
              <div class="team__slider_item-name">
                Alexei Bokarev
              </div>
              <div class="team__slider_item-post">
                JS Dev
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/44868750.jpg" alt="Tuan Nguyen">
              </div>
              <div class="team__slider_item-name">
                Tuan Nguyen
              </div>
              <div class="team__slider_item-post">
                Support
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/profile_logo.jpg"
                     alt="Veeramanikandan Arunachalam">
              </div>
              <div class="team__slider_item-name">
                Veeramanikandan Arunachalam
              </div>
              <div class="team__slider_item-post">
                Support
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-photo/DSC_023501.jpg" alt="Alessio Mercurio">
              </div>
              <div class="team__slider_item-name">
                Alessio Mercurio
              </div>
              <div class="team__slider_item-post">
                Senior Moderator
              </div>
            </div>
          </slick>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <h2 class="wow flipInX">
          FAQ
        </h2>
        <div class="faq__content clear">
          <div class="faq__questions mCustomScrollbar" v-bar data-mcs-theme="dark">
            <div class="faq__questions">
              <div class="faq__question" :class="{ 'active': faq[0] }" @click="toggleFAQ(0)">
                Should I undergo the KYC procedure?
              </div>
              <div class="faq__question_answer" :class="{ 'active': faq[0] }" data-num="0">
                <div class="faq__answer_title">
                  Should I undergo the KYC procedure?
                </div>
                <p>
                  No, as the exchange lacks a unified leadership and authority
                  to conduct the checking. The goals of KYC are reached with
                  the help of the Giant blockchain and smart contracts system
                  which both prevent malicious activity.
                </p>
              </div>
              <div class="faq__question" :class="{ 'active': faq[1] }" data-num="1"
                   @click="toggleFAQ(1)">
                What currency is used on Giant.Exchange?
              </div>
              <div class="faq__question_answer" :class="{ 'active': faq[1] }" data-num="1">
                <div class="faq__answer_title">
                  What currency is used on Giant.Exchange?
                </div>
                <p>
                  The single payment tool on Giant.Exchange is Giant Coin
                  - a cryptocurrency in the Giant blockchain.
                  Every operation is held with its use: binary option purchase,
                  reward payments for successful deals, smart contracts fees etc.
                </p>
              </div>
              <div class="faq__question"  :class="{ 'active': faq[2] }" @click="toggleFAQ(2)">
                Should I deposit my funds on the Giant.Exchange account?
              </div>
              <div class="faq__question_answer" :class="{ 'active': faq[2] }" data-num="2">
                <div class="faq__answer_title">
                  Should I deposit my funds on the Giant.Exchange account?
                </div>
                <p>
                  You don’t need to replenish your trading deposit and give
                  your money for any third parties. The Giant.Exchange
                  trading deposit displays the quantity of Giant Coins
                  on your local wallet which is specified during the
                  Giant.Exchange authorization.
                </p>
              </div>
              <div class="faq__question"  :class="{ 'active': faq[3] }" @click="toggleFAQ(3)">
                How can I withdraw the money?
              </div>
              <div class="faq__question_answer" :class="{ 'active': faq[3] }" data-num="3">
                <div class="faq__answer_title">
                  How can I withdraw the money?
                </div>
                <p>
                  There is no ‘withdrawal’ on Giant.Exchange -
                  the money is always stored in the Giant blockchain on your local wallet.
                </p>
              </div>
              <div class="faq__question" :class="{ 'active': faq[4] }" @click="toggleFAQ(4)">
                How can I be sure that the data provided by the oracle is credible?
              </div>
              <div class="faq__question_answer" :class="{ 'active': faq[4] }" data-num="4">
                <div class="faq__answer_title">
                  How can I be sure that the data provided by the oracle is credible?
                </div>
                <p>
                  Every oracle is displaying the API-transferred data received from
                  open sources (price aggregators and/or exchanges). Every user
                  can see the smart contract code and check the data source
                  personally. Any smart contract code changes are unlocked
                  only after a vote.
                </p>
              </div>
              <div class="faq__question" :class="{ 'active': faq[5] }" @click="toggleFAQ(5)">
                Who guarantees rewards?
              </div>
              <div class="faq__question_answer" :class="{ 'active': faq[5] }" data-num="5">
                <div class="faq__answer_title">
                  Who guarantees rewards?
                </div>
                <p>
                  The trader cannot purchase a binary option smart contract unless
                  it has enough funds to cover the reward costs. Any changes of
                  the terms of a binary option contract are locked after the
                  addition on Giant.Exchange. An automatic payment is made as
                  a result of the deal. This can easily be checked by using
                  the reputation system and the code of smart contract.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__more" style="display: none;">
            <a href="#" class="btn">View more questions</a>
          </div>

          <div class="faq__answers faq__answers-zero" :class="{ 'active': faq[0] }" data-num="0">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  Should I undergo the KYC procedure?
                </div>
                <p>
                  No, as the exchange lacks a unified leadership and
                  authority to conduct the checking. The goals of KYC
                  are reached with the help of the Giant blockchain
                  and smart contracts system which both prevent
                  malicious activity.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-one" :class="{ 'active': faq[1] }" data-num="1">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  What currency is used on Giant.Exchange?
                </div>
                <p>
                  The single payment tool on Giant.Exchange is Giant Coin
                  - a cryptocurrency in the Giant blockchain.
                  Every operation is held with its use: binary option purchase,
                  reward payments for successful deals, smart contracts fees etc.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-two" :class="{ 'active': faq[2] }" data-num="2">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  Should I deposit my funds on the Giant.Exchange account?
                </div>
                <p>
                  You don’t need to replenish your trading deposit and give
                  your money for any third parties. The Giant.Exchange
                  trading deposit displays the quantity of Giant Coins
                  on your local wallet which is specified during the
                  Giant.Exchange authorization.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-three" :class="{ 'active': faq[3] }" data-num="3">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  How can I withdraw the money?
                </div>
                <p>
                  There is no ‘withdrawal’ on Giant.Exchange -
                  the money is always stored in the Giant blockchain on your local wallet.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-four" :class="{ 'active': faq[4] }" data-num="4">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  How can I be sure that the data provided by the oracle is credible?
                </div>
                <p>
                  Every oracle is displaying the API-transferred data received from
                  open sources (price aggregators and/or exchanges). Every user
                  can see the smart contract code and check the data source
                  personally. Any smart contract code changes are unlocked
                  only after a vote.
                </p>
              </div>
              <div class="faq__answer">
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-five" :class="{ 'active': faq[5] }" data-num="5">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  Who guarantees rewards?
                </div>
                <p>
                  The trader cannot purchase a binary option smart contract unless
                  it has enough funds to cover the reward costs. Any changes of
                  the terms of a binary option contract are locked after the
                  addition on Giant.Exchange. An automatic payment is made as
                  a result of the deal. This can easily be checked by using
                  the reputation system and the code of smart contract.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="release">
      <div class="container">
        <div class="release__bg">
          Release Q1 2019
        </div>
        <div class="release__title wow rotateIn">
          Release Q1 2019
        </div>
      </div>
    </section>

    <section class="airdrop">
      <div class="container">
        <h2 class="wow flipInX">
          Airdrop
        </h2>
        <div class="airdrop__signature">
          First 100 users who activate their account can get 100 GIC for
          free for their first trades on the exchange 107
        </div>
        <div class="airdrop__form">
          <form @submit.prevent="sendEmail">
            <div class="airdrop__email-wrapper">
              <input type="email" id="airdrop__email" v-model="email" required>
              <div class="airdrop__email_placeholder" v-show="!email">
                <i class="fa fa-envelope-o"></i> Email
              </div>
            </div>
            <label>Your Email for Airdrop registration</label>
            <button class="btn" type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer__doc">
          <div class="footer__doc_title">
            Documentation
          </div>
          <a href="https://giantpay.network/GiantExchangeWhitepaper.pdf" target="_blank">Giant.Exchange White paper</a>
          <!--<a href="">Manual for smart contract Oracle</a>-->
          <!--<a href="">Manual for smart contract Binary option </a>-->
        </div>
        <div class="footer__support" style="display: none;">
          <div class="footer__support_title">
            Support
          </div>
          <div class="footer__support_form">
            <form class="flex">
              <div class="footer__support_input-wrapper">
                <input type="text">
                <div class="footer__support_placeholder">
                  <i class="far fa-user"></i> Name
                </div>
              </div>
              <div class="footer__support_input-wrapper">
                <input type="email">
                <div class="footer__support_placeholder">
                  <i class="fa fa-envelope-o"></i> Email
                </div>
              </div>
              <div class="footer__support_textarea-wrapper">
                <textarea></textarea>
                <div class="footer__support_placeholder">
                  <i class="far fa-paper-plane"></i> Message
                </div>
              </div>
              <button type="submit" class="btn">Send</button>
            </form>
          </div>
        </div>
        <div class="footer__signature">
          Powered by <a href="https://giantpay.network/" target="_blank"><span></span> technology</a>
        </div>
      </div>
    </footer>

    <div class="cookies" :class="{ 'closed': cookie }">
      <div class="container flex">
        <p>
          Our website is using the Cookies technology.
          By continuing to use our site, you are accepting the
          <a href="/terms-of-use" target="_blank">Terms of Use</a>
        </p>
        <a href="#" class="btn" @click.prevent="cookie = !cookie">Accept</a>
        <span @click="cookie = !cookie">
          Close
        </span>
      </div>
    </div>

    <div class="up">
      <a class="btn animated pulse" href="#header"><i class="fas fa-chevron-up"></i></a>
    </div>

    <div class="popup" id="popup-one">
      <div class="popup-wrapper">
        <p>
          Thank you for you interest! We'll keep you updated
        </p>
      </div>
    </div>

    <div class="popup" id="popup-two">
      <div class="popup-wrapper">
        <p>
          Thank you for contacting us! We'll answer shortly
        </p>
      </div>
    </div>
    <b-modal id="modalSuccess" centered hide-footer hide-header size="sm"
             body-class="form-popup" modal-class="form-modal">
      <p>
        Thank you for contacting us! We'll answer shortly
      </p>
    </b-modal>
    <b-modal id="modalVideo" centered hide-footer hide-header size="lg">
      <div class="video-container">
          <iframe class="video" src="https://www.youtube.com/embed/MdwAUhH_8FI" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
      </div>
    </b-modal>

    <svg fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="team__slider_prev-arrow" viewBox="0 0 15 34">
        <path d="M2.21518 16.9918L14.4088 2.33899C14.7087 1.97862 14.7087 1.40067 14.4088
            1.0403C14.1089 0.679927 13.628 0.679927 13.3281 1.0403L0.591251 16.3459C0.29136
            16.7062 0.29136 17.2842 0.591251 17.6446L13.3281 32.9434C13.4752 33.1201 13.6732
            33.2153 13.8656 33.2153C14.058 33.2153 14.2561 33.1269 14.4032 32.9434C14.7031
            32.583 14.7031 32.005 14.4032 31.6447L2.21518 16.9918Z" fill="black"/>
      </symbol>
      <symbol id="team__slider_next-arrow" viewBox="0 0 15 34">
        <path d="M12.7847 16.9935L0.591009 31.6464C0.291118 32.0067 0.291118 32.5847
        0.591009 32.9451C0.8909 33.3054 1.37186 33.3054 1.67175 32.9451L14.4086
        17.6395C14.7085 17.2791 14.7085 16.7011 14.4086 16.3408L1.67175 1.04199C1.52463
        0.86521 1.32659 0.770018 1.13421 0.770018C0.941826 0.770018 0.743784 0.858412
        0.596669 1.04199C0.296777 1.40237 0.296777 1.98032 0.596669 2.34069L12.7847
        16.9935Z" fill="#222222"/>
      </symbol>
      <symbol id="next-arrow" viewBox="0 0 37 8">
          <path d="M36.3536 4.35356C36.5488 4.15829 36.5488 3.84171 36.3536
          3.64645L33.1716 0.464469C32.9763 0.269207 32.6597 0.269207 32.4645
          0.464469C32.2692 0.659731 32.2692 0.976314 32.4645 1.17158L35.2929
          4L32.4645 6.82843C32.2692 7.02369 32.2692 7.34027 32.4645 7.53554C32.6597
          7.7308 32.9763 7.7308 33.1716 7.53554L36.3536 4.35356ZM-4.37114e-08 4.5L36
          4.5L36 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="black"/>
      </symbol>
      <symbol id="prev-arrow" viewBox="0 0 37 8">
        <path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446
        4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308
        7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.7308
        0.976314 4.7308 0.659731 4.53553 0.464469C4.34027 0.269207 4.02369 0.269207
        3.82843 0.464469L0.646446 3.64645ZM37 3.5L1 3.5L1 4.5L37 4.5L37 3.5Z" fill="black"/>
      </symbol>

    </svg>
  </div>
</template>

<script>
import Vue from 'vue';

import Slick from 'vue-slick';
import Vuebar from 'vuebar';

Vue.use(Vuebar);

export default {
  name: 'Home',
  components: {
    Slick,
  },
  data: () => ({
    email: '',
    cookie: false,

    faq: [
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],

    GIC: {
      btc: 0,
      usd: 0,
      changePrice24h: 0,
      volume: 0,
      usdVolume: 0,
      changeVolume24h: 0,
    },

    smartContractsSlickOptions: {
      vertical: true,
      arrows: true,
      dots: true,
      appendArrows: '.smart__slider_arrows',
      prevArrow: '<div class="smart__slider_prev-arrow"></div>',
      nextArrow: '<div class="smart__slider_next-arrow"></div>',
      appendDots: '.smart__slider_dots',
      initialSlide: 1,
    },
    teamSlickOptions: {
      slidesToShow: 4,
      arrows: true,
      dots: false,
      appendArrows: '.team__slider_arrows',
      prevArrow: `<svg class="team__slider_prev-arrow" width="15" height="34">
                    <use xlink:href="#team__slider_prev-arrow"></use>
                  </svg>`,
      nextArrow: `<svg class="team__slider_next-arrow" width="15" height="34">
                    <use xlink:href="#team__slider_next-arrow"></use>
                  </svg>`,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    },
    faqSlickOptions: {
      arrows: true,
      dots: false,
      infinite: false,
      nextArrow: '<svg width="37" height="8"><use xlink:href="#next-arrow"></use></svg>',
      prevArrow: '<svg width="37" height="8"><use xlink:href="#prev-arrow"></use></svg>',
    },
  }),
  methods: {
    next() {
      this.$refs.slickContracts.next();
    },
    prev() {
      this.$refs.slickContracts.prev();
    },
    toggleFAQ(i) {
      this.faq = this.faq.map(() => false);
      this.faq.splice(i, 1, true);
    },
    sendEmail() {
      this.axios.post('/api/airdrop/', {
        email: this.email,
      }).then(() => this.$refs.modalSuccess.show());
    },
    getGICInfo() {
      this.axios.get('https://giantpay.network/api/rates').then(({ data }) => {
        this.GIC.btc = data.btc;
        this.GIC.usd = data.usd;
      });
      this.axios.get('https://giantpay.network/api/info').then(({ data }) => {
        this.GIC.changePrice24h = data.changePrice24h;
        this.GIC.volume = data.volume;
        this.GIC.usdVolume = data.usdVolume;
        this.GIC.changeVolume24h = data.changeVolume24h;
      });
    },
  },
  created() {
    this.getGICInfo();
  },
};
</script>

<style scoped src="../styles/home/font.css"></style>

<style lang="scss">
  .home {
    @import '../styles/home/main';
    @import '../styles/home/media';
    @import '../styles/home/slick';
    @import '../styles/home/vuebar';
  }
</style>

<style lang="scss" scoped>
  .home {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
  }
  .slick-slider.slick-dotted {
    margin-bottom: 0;
  }
  .container {
    padding: 0;
  }
  @media screen and (max-width: 576px) {
    .container {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
