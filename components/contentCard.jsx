import CustomForm from "./newsletter";
import Link from "next/link";

const ContentCard = () => {
  return (
    <div>
      <section className="content" id="content">
        <h1>Let's talk about now and the future</h1>
        <div className="divider"></div>
        <div className="card">
          <div>
            <img width="90%" src="./assets/img/covid-19-changes.png" />
          </div>
          <div>
            <h2>
              The year 2020, covid-19 and how they (should) change our view of
              the world.
            </h2>
            <div className="divider"></div>
            <p>
              Last year was a normal year, most people had a permanent job,
              worked “9-to-5”, came home, paid the bills and were happy if
              something was left over. Many dreamed of an independent life,
              independent of location and in a modern way, but never put it into
              practice.
            </p>
            <h2>But what is happening at the moment?</h2>
            <div className="divider"></div>
            <p>
              The current situation shows us that the system that we are taught
              from an early age has its limits, we are forced to either endure
              and persevere or finally to exhaust the possibilities that our
              time gives us, believe it or not, there are more than enough
              people who still make their money, the easiest way regardless of
              covid-19.
            </p>
          </div>
        </div>
        <div className="card2">
          <h2>“That’s all very nice, but how do I do this?”</h2>
          <div className="divider"></div>
          <p>
            Well, I won't lie here. It’s a long way ahead of you which will take
            a lot of dedication and discipline, sadly there is no
            “you-will-get-rich-overnight”-scheme, so plan in your time to build
            things up, but what I can tell you: It’s worth it. I am a 30 years
            old german, earning exclusively online, and were able to move to the
            philippines. So if you want to live independently, or simply just a
            little money from the side, drop your email here and I can show you
            step-by-step how you can achieve this too.
          </p>
        </div>
        <div className="card2">
          <h3>Subscribe</h3>
          <div className="divider"></div>
          <br />
          <br />
          <br />
          <br />
          <CustomForm />
        </div>
        <div className="card2">
          <h1>
            The Blockchain, Ethereum and how this exiting new world can help
          </h1>
          <div className="divider"></div>
        </div>
        <div className="card">
          <div className="display-image2">
            <img src="./assets/img/blockchain.jpg" width="90%" />
          </div>
          <div>
            <h2>So what is this Blockchain and how it can help me?</h2>
            <div className="divider"></div>
            <p>
              I will try to keep it simple, you can imagine a Blockchain as a
              decentralized database. But the difference between a classical
              database is that data, once put into a Blockchain, can NOT be
              changed anymore. We call this immutable.
              <br />
              <br />
              This way of handling data, transactions or apps builds a trustless
              environment which is governed by a smart contract which can never
              be changed or disappear. And everybody who wants to deal with a
              smart contract can read it first, before any interaction because
              it's public. So if you use these contracts to start a business
              model, it doesn’t matter what any government says about it, they
              can not close it or interfere in it, hackers can not steal your
              data and personal information AND you can read the contract in the
              very start to verify that nobody messes with you. Isn't this
              already awesome by itself? Being totally independent?
              <br />
              <br />
              <b>
                But how can this help you earn money? Just go ahead, it’s
                simple!
              </b>
              <br />
              <br /> <br />
              <br />
            </p>
          </div>
        </div>
        <div className="card2">
          <h1>
            Your chance to work independantly or to create a passive income
          </h1>
          <div className="divider"></div>
        </div>
        <div className="card">
          <div>
            <img width="90%" src="./assets/img/what-is-ether.png" />
          </div>
          <div id="from-voomo">
            <h2>So how do we start?</h2>
            <div className="divider"></div>
            <p>
              In case you already had your first experiences with
              cryptocurrencies and the blockchain itself, especially if you know
              how so called DApp Browsers work, you should click here to skip
              the introduction to them and directly start with the real deal!
              <br />
              <br />
              And if not: That's not a big deal! I will give you a short
              introduction into the Blockchain ecosystem, especially Ethereum
              and it's native currency Ether! So we can afterwards go through
              really good DeFi Products and other profitable contracts.
            </p>
            <br />
            <br />

            <a className="button" href="#letsgo">
              <b>Direct Start</b>
            </a>
          </div>
        </div>
        <div className="card">
          <div>
            <img width="90%" src="./assets/img/buy-crypto.jpg" />
          </div>
          <div>
            <h2>How to buy crypto?</h2>
            <div className="divider"></div>
            <p>
              In case you already had your first experiences with
              cryptocurrencies and the blockchain itself, especially if you know
              how so called DApp Browsers work, you should click here to skip
              the introduction to them and directly start with the real deal!
            </p>
            <br />
            <br />

            <a
              className="button"
              href="https://www.coinbase.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="External Link to Coinbase Exchange"
            >
              <b>Coinbase Exchange</b>
            </a>
          </div>
        </div>
        <div className="card">
          <div>
            <img width="90%" src="./assets/img/crypto-wallet.png" />
          </div>
          <div>
            <h2>Your wallet - your money</h2>
            <div className="divider"></div>
            <p>
              In case you already had your first experiences with
              cryptocurrencies and the blockchain itself, especially if you know
              how so called DApp Browsers work, you should click here to skip
              the introduction to them and directly start with the real deal!
            </p>
            <br />
            <br />

            <a
              className="button"
              href="https://metamask.io/"
              target="_blank"
              rel="noopener noreferrer"
              title="Metamask Desktop / Laptop Wallet"
            >
              <b> Metamask</b>
            </a>
            <br />
            <br />
            <br />
            <br />
            <a
              className="button"
              href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              title="Trust Wallet for Android Devices"
            >
              <b>Trust Wallet</b>
            </a>
            <br />
            <br />
            <br />
            <br />
            <a
              className="button"
              href="https://apps.apple.com/us/app/coinbase-wallet/id1278383455"
              target="_blank"
              rel="noopener noreferrer"
              title="Coinbase Wallet for iOS Devices"
            >
              <b> Coinbase Wallet</b>
            </a>
          </div>
        </div>
        <div className="card">
          <div>
            <img width="90%" src="./assets/img/Dapp-browser.jpg" />
          </div>
          <div>
            <h2>The DApp Browser</h2>
            <div className="divider"></div>
            <p>
              In case you already had your first experiences with
              cryptocurrencies and the blockchain itself, especially if you know
              how so called DApp Browsers work, you should click here to skip
              the introduction to them and directly start with the real deal!
            </p>
            <br />
            <br />
          </div>
        </div>
        <div className="card" id="letsgo">
          <div>
            <img width="90%" src="./assets/img/risk_free.jpg" />
          </div>
          <div>
            <h2>And let's get started!</h2>
            <div className="divider"></div>
            <p>
              So now that you (hopefully) bought your first Ether and
              transferred it into your wallet with the DApp browser, we can
              start interacting with our first smart contract that can earn
              money. All you have to do is, if you are on Metamask at your
              Laptop or PC, click the nice button below. If you are not on your
              Laptop or PC you have to copy and paste this link into the DApp
              Browser of your Wallet:
              <br />
              <br />
              <a
                href="https://app.voomo.io/a/42/"
                target="_blank"
                rel="noopener noreferrer"
                title="The Smartcontract that will earn you money"
              >
                <b>https://app.voomo.io/a/42/</b>
              </a>
              <br />
              <br /> <br />
              <br />
              <a
                className="button"
                href="https://app.voomo.io/a/42/"
                target="_blank"
                rel="noopener noreferrer"
                title="The Smartcontract that will earn you money"
              >
                <b>Register</b>
              </a>
              <br />
              <br /> <br />
              <br />
              Both methods will open you a window with a big blue button “login
              automatically” (if the button is missing, refresh the site until
              it's there AND make sure that you are actually in your DApp
              browser, it won’t work otherwise). After that you will see the
              register now (same as above), after clicking this one, you will
              have to confirm the transaction of approximate 0.13 Ether (if it’s
              more I would wait a few minutes and try it again, the network fees
              vary). After approving the transaction you are done! Welcome to
              the first step to your passive income!
              <br />
              <br />
              <b>
                <u>
                  Go ahead and read now how exactly you will earn from this
                  contract!
                </u>
              </b>
              <br />
              <br /> <br />
              <br />
              <Link href="/voomo">
                <a
                  className="button"
                  title="External Link to Coinbase Exchange"
                >
                  <b>How to earn in voomo</b>
                </a>
              </Link>
            </p>
            <br />
            <br />
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card2">
          <h1>And don't forget to subscribe to me Newsletter</h1>
          <h2>Too always stay up to date with new possibilities!</h2>
          <div className="divider"></div>
        </div>
        <div className="card2">
          <CustomForm />
        </div>
      </section>
      <style jsx>{`
        .content {
          position: relative;
          padding: 50px 0;
          width: 95vw;
          max-width: 1080px;
          margin: 30vh auto;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          border-radius: 10px;
        }
        .divider {
          height: 3px;
          width: 40%;
          background: #c90859;
          margin: auto auto;
        }
        h1,
        h2,
        h3 {
          text-align: center;
        }

        .card {
          margin: 5vh auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          padding: 40px;
          border-radius: 40px;
        }
        .card2 {
          margin: 5vh auto;

          padding: 40px;
          border-radius: 40px;
        }
        .display-imgage {
          height: 100%;
          align-self: center;
          width: auto;
          margin: auto auto;
          z-index: 0;
          border-radius: 40px;
          box-shadow: 5px 5px 10px #000910, -5px -5px 10px #002340;
        }
        .button {
          border: 1px solid #c90859;
          color: #c90859;
          text-decoration: none;
          padding: 20px 50px;
          background: black;
          transition: all 0.5s ease-in-out;
        }

        .button:hover {
          background: #c90859;
          color: black;
          font-size: 18px;
        }

        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default ContentCard;
