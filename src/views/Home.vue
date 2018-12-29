<template>
  <div class="home">
    <header id="header">
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
              A decentralized binary options marketplace with trustworthy assets data
              controlled by an independent arbiter, with automatic terms execution
              and public Broker reputation 171
            </div>
            <div class="header__buttons flex">
              <a href="#" class="btn">White Paper</a>
              <a href="#" class="btn">Dashboard</a>
            </div>
          </div>

          <div class="header__video flex">
            <div class="exp"></div>
            <div class="exp2"></div>
            <a href="#">
              <span></span>
              <i>Watch video</i>
            </a>
          </div>
        </div>
        <div class="header__stat flex">
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
          Powered by <a href="#"><span></span> technology</a>
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
              The money is controlled by no one else than the owner.
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
              The Oracle smart contract serves as an independent party to define
              the accurate value of the currency by using popular price aggregators and exchanges.
              The numbers are taken via the Giant.Exchange API and cannot be tampered.
              The Trader gets transparent collected data and the guarantee of its reliability.
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
              The reward payment for a successful option is made by the smart
              contract – to the address of the wallet from which the binary
              option purchase was made. The payment value is always equal to
              the one set in the deal. No errors, delays or incomplete
              rewards are ever possible to emerge.
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
              Ecstatic elegance gay but disposed. Pain son rose more park way that.
              Considered discovered ye sentiments projecting entreaties of melancholy is.
              Their saved linen downs tears son add music. Estate was tended ten boy
              nearer seemed.
              Limits far yet turned highly repair parish talked six.
              Estate was tended ten boy nearer seemed.
              A decentralized binary options marketplace with trustworthy assets data
              controlled by an independent arbiter, with automatic terms execution and public
              Broker reputation. Elegance gay but disposed. Pain son rose more park way that.
              Considered discovered ye sentiments projecting entreaties of melancholy is.
              Their saved linen downs tears son add music.
              Decentralized binary options marketplace with trustworthy assets data. 753
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
          <a href="#" class="btn">Let’s Go!</a>
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
              Mrs assured add private married removed believe did she.
              Hard do me sigh with west same lady.
              Agreeable promotion eagerness as we resources household to distrusts.
              We leaf to snug on no need. Whatever throwing we on resolved entrance
              together graceful. Pain son rose more park way that. Painful so he an
              comfort is manners. Fortune day out married parties. Working with the exchange
              you do not transfer money to a third party. 453
            </p>
            <a href="#" class="btn">
              Governance
            </a>
          </div>
        </div>

        <div class="governance__items flex">
          <div class="governance__item wow slideInLeft">
            <div class="governance__item_title">
              Independent Arbiter
            </div>
            <p>
              Working with the exchange you do not transfer money to a third party.
              Your balance always remains in your secure wallet.
              So you don't face the withdrawal problem.
            </p>
          </div>
          <div class="governance__item wow slideInRight">
            <div class="governance__item_title">
              Independent Arbiter
            </div>
            <p>
              Working with the exchange you do not transfer money to a third party.
              Your balance always remains in your secure wallet.
              So you don't face the withdrawal problem.
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
                <div class="digital__card_change inc">
                  12%
                </div>
              </div>
              <div class="digital__card_right">
                <div class="digital__card_dollars">
                  1.23$
                </div>
                <div class="digital__card_btc">
                  0.000215 BTC
                </div>
              </div>
            </div>
            <div class="digital__card flex wow flipInY">
              <div class="digital__card_left">
                <div class="digital__card_title">
                  Volume 24h
                </div>
                <div class="digital__card_change dec">
                  9%
                </div>
              </div>
              <div class="digital__card_right">
                <div class="digital__card_dollars">
                  35 485$
                </div>
                <div class="digital__card_btc">
                  7.89 BTC
                </div>
              </div>
            </div>
          </div>
          <div class="digital__text">
            Giant coin - private married removed believe did she.
            Hard do me sigh with west same lady. Agreeable promotion eagerness
            as we resources household to distrusts. We leaf to snug on no need.
            Whatever throwing we on resolved entrance together graceful.
            Pain son rose more park way that. Painful so he an comfort is manners.
            Fortune day out married parties. Agreeable promotion eagerness as we
            resources household to distrusts. We leaf to snug on no need. Whatever
            throwing we on resolved entrance together graceful.
            Pain son rose more park way that. 580
          </div>
        </div>
        <div class="digital__buttons flex">
          <a href="#" class="btn">Exchanges</a>
          <a href="#" class="btn">Wallet</a>
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
                <img src="@/assets/home/team-person.png" alt="Vadim Kruk">
              </div>
              <div class="team__slider_item-name">
                Vadim Kruk
              </div>
              <div class="team__slider_item-post">
                Company Director
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-person.png" alt="Anna Karenina">
              </div>
              <div class="team__slider_item-name">
                Anna Karenina
              </div>
              <div class="team__slider_item-post">
                Art Direcror
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-person.png" alt="Anton Chekhov">
              </div>
              <div class="team__slider_item-name">
                Anton Chekhov
              </div>
              <div class="team__slider_item-post">
                UX Designer
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-person.png" alt="Vladimir Zakharov">
              </div>
              <div class="team__slider_item-name">
                Vladimir Zakharov
              </div>
              <div class="team__slider_item-post">
                Manager
              </div>
            </div>
            <div class="team__slider_item">
              <div class="team__slider_item-photo">
                <img src="@/assets/home/team-person.png" alt="Vladimir Zakharov">
              </div>
              <div class="team__slider_item-name">
                Vladimir Zakharov
              </div>
              <div class="team__slider_item-post">
                Manager
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
              <div class="faq__question active" data-num="0">
                What our company does?
              </div>
              <div class="faq__question_answer" data-num="0">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants.
                  Do play they miss give so up. Am wound worth water he linen at vexed..
                  If in so bred at dare rose lose good.
                  He felicity no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__question" data-num="1">
                How to get to our team?
              </div>
              <div class="faq__question_answer" data-num="1">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now acceptance
                  bed compliment solicitude. Strictly numerous outlived kindness
                  whatever on we no on addition. Their saved linen downs tears son add music.
                  undefined. Pain son rose more park way that. Draw from upon here gone add one.
                  Feel and make two real miss use easy. We me rent been part what.
                  Any delicate you how kindness horrible outlived servants.
                  Do play they miss give so up. Am wound worth water he linen at vexed..
                  If in so bred at dare rose lose good.
                  He felicity no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__question" data-num="2">
                What are our advantages over others?
              </div>
              <div class="faq__question_answer" data-num="2">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now acceptance
                  bed compliment solicitude. Strictly numerous outlived kindness whatever
                  on we no on addition. Their saved linen downs tears son add music. undefined.
                  Pain son rose more park way that. Draw from upon here gone add one.
                  Feel and make two real miss use easy. We me rent been part what.
                  Any delicate you how kindness horrible outlived servants.
                  Do play they miss give so up. Am wound worth water he linen at vexed..
                  If in so bred at dare rose lose good.
                  He felicity no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__question" data-num="3">
                How much I can earn working with your company? 46
              </div>
              <div class="faq__question_answer" data-num="3">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now acceptance
                  bed compliment solicitude. Strictly numerous outlived kindness whatever
                  on we no on addition. Their saved linen downs tears son add music. undefined.
                  Pain son rose more park way that. Draw from upon here gone add one.
                  Feel and make two real miss use easy. We me rent been part what.
                  Any delicate you how kindness horrible outlived servants.
                  Do play they miss give so up. Am wound worth water he linen at vexed..
                  If in so bred at dare rose lose good.
                  He felicity no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__question" data-num="4">
                What I can get by participating in your promotion?
              </div>
              <div class="faq__question_answer" data-num="4">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__question" data-num="5">
                What our company does?
              </div>
              <div class="faq__question_answer" data-num="5">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__question" data-num="6">
                How to get to our team?
              </div>
              <div class="faq__question_answer" data-num="6">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__question" data-num="7">
                What are our advantages over others?
              </div>
              <div class="faq__question_answer" data-num="7">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__question" data-num="8">
                How much I can earn working with your company? 46
              </div>
              <div class="faq__question_answer" data-num="8">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__question" data-num="9">
                What I can get by participating in your promotion?
              </div>
              <div class="faq__question_answer" data-num="9">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
            </div>
          </div>

          <div class="faq__more">
            <a href="#" class="btn">View more questions</a>
          </div>

          <div class="faq__answers faq__answers-zero active" data-num="0">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
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

          <div class="faq__answers faq__answers-one" data-num="1">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-two" data-num="2">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__answer">
                <p>
                  Do play they miss give so up. Way own uncommonly travelling
                  now acceptance bed compliment solicitude.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-three" data-num="3">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-four" data-num="4">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
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

          <div class="faq__answers faq__answers-five" data-num="5">
            <div class="faq__slider">
              <div class="faq__answer">
                <p>
                  Do play they miss give so up. Way own uncommonly travelling
                  now acceptance bed compliment solicitude.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-six" data-num="6">
            <div class="faq__slider">
              <div class="faq__answer">
                <p>
                  Do play they miss give so up. Way own uncommonly travelling
                  now acceptance bed compliment solicitude.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-seven" data-num="7">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__answer">
                <p>
                  Do play they miss give so up. Way own uncommonly travelling
                  now acceptance bed compliment solicitude.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-eith" data-num="8">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__answer">
                <p>
                  Do play they miss give so up. Way own uncommonly travelling
                  now acceptance bed compliment solicitude.
                </p>
              </div>
            </div>
          </div>

          <div class="faq__answers faq__answers-nine" data-num="9">
            <div class="faq__slider">
              <div class="faq__answer">
                <div class="faq__answer_title">
                  What our company does?
                </div>
                <p>
                  Do play they miss give so up. Way own uncommonly travelling now
                  acceptance bed compliment solicitude. Strictly numerous outlived
                  kindness whatever on we no on addition. Their saved linen downs
                  tears son add music. undefined. Pain son rose more park way that.
                  Draw from upon here gone add one. Feel and make two real miss use easy.
                  We me rent been part what. Any delicate you how kindness horrible
                  outlived servants. Do play they miss give so up. Am wound worth water
                  he linen at vexed.. If in so bred at dare rose lose good. He felicity
                  no an at packages answered opinions juvenile.  602
                </p>
              </div>
              <div class="faq__answer">
                <p>
                  Do play they miss give so up. Way own uncommonly travelling
                  now acceptance bed compliment solicitude.
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
          Release Q4 2018
        </div>
        <div class="release__title wow rotateIn">
          Release Q4 2018
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
          <form>
            <div class="airdrop__email-wrapper">
              <input type="email" id="airdrop__email">
              <div class="airdrop__email_placeholder">
                <i class="fa fa-envelope-o"></i> Email
              </div>
            </div>
            <label>Your Email for Airdrop registration</label>
            <button class="btn" type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <div class="footer__doc">
          <div class="footer__doc_title">
            Documentation
          </div>
          <a href="#">Giant.Exchange White paper</a>
          <a href="">Manual for smart contract Oracle</a>
          <a href="">Manual for smart contract Binary option </a>
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
          Powered by <a href="#"><span></span> technology</a>
        </div>
      </div>
    </footer>

    <div class="cookies">
      <div class="container flex">
        <p>
          Our website is using the Cookies technology.
          By continuing to use our site, you are accepting the <a href="#">Terms of Use</a>
        </p>
        <a href="#" class="btn">Accept</a>
        <span>
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
      prevArrow: '<svg class="team__slider_prev-arrow" width="15" height="34" viewBox="0 0 15 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.21518 16.9918L14.4088 2.33899C14.7087 1.97862 14.7087 1.40067 14.4088 1.0403C14.1089 0.679927 13.628 0.679927 13.3281 1.0403L0.591251 16.3459C0.29136 16.7062 0.29136 17.2842 0.591251 17.6446L13.3281 32.9434C13.4752 33.1201 13.6732 33.2153 13.8656 33.2153C14.058 33.2153 14.2561 33.1269 14.4032 32.9434C14.7031 32.583 14.7031 32.005 14.4032 31.6447L2.21518 16.9918Z" fill="black"/></svg>',
      nextArrow: '<svg class="team__slider_next-arrow" width="15" height="34" viewBox="0 0 15 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7847 16.9935L0.591009 31.6464C0.291118 32.0067 0.291118 32.5847 0.591009 32.9451C0.8909 33.3054 1.37186 33.3054 1.67175 32.9451L14.4086 17.6395C14.7085 17.2791 14.7085 16.7011 14.4086 16.3408L1.67175 1.04199C1.52463 0.86521 1.32659 0.770018 1.13421 0.770018C0.941826 0.770018 0.743784 0.858412 0.596669 1.04199C0.296777 1.40237 0.296777 1.98032 0.596669 2.34069L12.7847 16.9935Z" fill="#222222"/></svg>',
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
      nextArrow: '<svg width="37" height="8" viewBox="0 0 37 8"><path d="M36.3536 4.35356C36.5488 4.15829 36.5488 3.84171 36.3536 3.64645L33.1716 0.464469C32.9763 0.269207 32.6597 0.269207 32.4645 0.464469C32.2692 0.659731 32.2692 0.976314 32.4645 1.17158L35.2929 4L32.4645 6.82843C32.2692 7.02369 32.2692 7.34027 32.4645 7.53554C32.6597 7.7308 32.9763 7.7308 33.1716 7.53554L36.3536 4.35356ZM-4.37114e-08 4.5L36 4.5L36 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="black"/></svg>',
      prevArrow: '<svg width="37" height="8" viewBox="0 0 37 8"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.7308 0.976314 4.7308 0.659731 4.53553 0.464469C4.34027 0.269207 4.02369 0.269207 3.82843 0.464469L0.646446 3.64645ZM37 3.5L1 3.5L1 4.5L37 4.5L37 3.5Z" fill="black"/></svg>',
    },
  }),
  methods: {
    next() {
      this.$refs.slickContracts.next();
    },
    prev() {
      this.$refs.slickContracts.prev();
    },
  },
  created() {
  },
};
</script>

<style scoped src="../styles/home/font.css"></style>

<style lang="scss" scoped>
  .home {
    background-color: #fff;
  }
  .home /deep/ {
    @import '../styles/home/main.css';
    @import '../styles/home/media.css';
    @import '../styles/home/slick.css';
    /*@import '../styles/home/animate.min.css';*/
    @import '../styles/home/vuebar.css';
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
