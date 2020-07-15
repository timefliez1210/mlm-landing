import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          How to earn money online - The new world covid-19 forces us into
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        <section className="content" id="content">
          <div className="wrapper">
            <h1>Let's talk about now and the future</h1>

            <div className="card">
              <div>
                <img width="80%" src="./assets/img/covid-19_corona-virus.jpg" />
              </div>
              <div>
                <h2>
                  The year 2020, covid-19 and how they (should) change our view
                  of the world.
                </h2>
                <p>
                  Last year was a normal year, most people had a permanent job,
                  worked “9-to-5”, came home, paid the bills and were happy if
                  something was left over. Many dreamed of an independent life,
                  independent of location and in a modern way, but never put it
                  into practice.
                </p>
                <h2>But what is happening at the moment?</h2>
                <p>
                  The current situation shows us that the system that we are
                  taught from an early age has its limits, we are forced to
                  either endure and persevere or finally to exhaust the
                  possibilities that our time gives us, believe it or not, it
                  are more than enough people who still make their money the
                  easiest way regardless of covid-19.
                </p>
              </div>
            </div>

            <h2>“That’s all very nice, but how do I do this?”</h2>
            <p>
              Well, I won't lie here. It’s a long way ahead of you which will
              take a lot of dedication and discipline, sadly there is no
              “you-will-get-rich-overnight”-scheme, so plan in your time to
              build things up, but what I can tell you: It’s worth it. I am a 30
              years old german, earning exclusively online, and were able to
              move to the philippines. So if you want to live independently, or
              simply just a little money from the side, drop your email here and
              I can show you step-by-step how you can achieve this too.
            </p>

            <div className="card">
              <div className="display-image2">
                <img src="./assets/img/ethereum.jpg" width="80%" />
              </div>
              <div>
                <h2>How to start:</h2>
                <p>
                  Last year was a normal year, most people had a permanent job,
                  worked “9-to-5”, came home, paid the bills and were happy if
                  something was left over. Many dreamed of an independent life,
                  independent of location and in a modern way, but never put it
                  into practice.
                </p>
                <h2>The exciting new world</h2>
                <p>
                  The current situation shows us that the system that we are
                  taught from an early age has its limits, we are forced to
                  either endure and persevere or finally to exhaust the
                  possibilities that our time gives us, believe it or not, it
                  are more than enough people who still make their money the
                  easiest way regardless of covid-19.
                </p>
              </div>
            </div>
            <h1>
              The Blockchain, Ethereum and how this exiting new world can help
            </h1>
            <div className="card">
              <div className="display-image2">
                <img src="./assets/img/blockchain.jpg" width="80%" />
              </div>
              <div>
                <h2>So what is this Blockchain and how it can help me?</h2>
                <p>
                  I will try to keep it simple, you can imagine a Blockchain as
                  a decentralized database. But the difference between a
                  classical database is that data, once put into a Blockchain,
                  can NOT be changed anymore. We call this immutable.
                  <br />
                  <br />
                  This way of handling data, transactions or apps builds a
                  trustless environment which is governed by a smart contract
                  which can never be changed or disappear. And everybody who
                  wants to deal with a smart contract can read it first, before
                  any interaction because it's public. So if you use these
                  contracts to start a business model, it doesn’t matter what
                  any government says about it, they can not close it or
                  interfere in it, hackers can not steal your data and personal
                  information AND you can read the contract in the very start to
                  verify that nobody messes with you. Isn't this already awesome
                  by itself? Being totally independent?
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
                <Link href="/voomo">
                  <a className="button">Let's start</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </body>

      <style jsx>{`
        .content {
          min-height: 100vh;
          display: flex;
          align-content: center center;
          padding: 100px 15px;
          background-color: #07051a;
          color: white;
        }

        .wrapper {
          width: 95vw;
          max-width: 1080px;
          margin: 0 auto;
        }

        h1 {
          text-align: center;
          font-size: 32px;
        }

        h2,
        h3 {
          text-align: left;
        }

        p {
          text-align: left;
          line-height: 18px;
        }

        .button {
          background-color: #789bc3;
          color: white;
          padding: 20px 30px;
          border-radius: 15px;
          width: 300px;
          margin: auto auto;
          font-style: bold;
          text-decoration: none;
          font-size: 20px;
        }

        .card {
          margin: 5vh auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          padding: 20px;
          border-radius: 40px;
          background: #07051a;
          box-shadow: 18px 18px 36px #050311, -18px -18px 36px #090723;
          position: relative;
          z-index: 0;
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
        .display-imgage2 {
          width: 100px;
          align-self: center;
          z-index: 0;
          border-radius: 40px;
          box-shadow: 5px 5px 10px #000910, -5px -5px 10px #002340;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          width: 100vw;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

{
  /* <div id="mc_embed_signup">
              <form
                action="https://gmail.us10.list-manage.com/subscribe/post?u=30daa631debe9c059299c8e7a&amp;id=bb6e405363"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <h2>Subscribe</h2>
                  <div class="indicates-required">
                    <span class="asterisk">*</span> indicates required
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">
                      Email Address <span class="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      class="required email"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-FNAME">First Name </label>
                    <input
                      type="text"
                      value=""
                      name="FNAME"
                      class=""
                      id="mce-FNAME"
                    />
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-LNAME">Last Name </label>
                    <input
                      type="text"
                      value=""
                      name="LNAME"
                      class=""
                      id="mce-LNAME"
                    />
                  </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response"></div>
                    <div class="response" id="mce-success-response"></div>
                  </div>
                  <div aria-hidden="true">
                    <input
                      type="text"
                      name="b_30daa631debe9c059299c8e7a_bb6e405363"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button"
                    />
                  </div>
                </div>
              </form>
            </div> */
}
