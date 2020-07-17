const ContentCard = () => {
  return (
    <div>
      <section className="content" id="content">
        <h1>Let's talk about now and the future</h1>

        <div className="card">
          <div>
            <img width="80%" src="./assets/img/covid-19_corona-virus.jpg" />
          </div>
          <div>
            <h2>
              The year 2020, covid-19 and how they (should) change our view of
              the world.
            </h2>
            <p>
              Last year was a normal year, most people had a permanent job,
              worked “9-to-5”, came home, paid the bills and were happy if
              something was left over. Many dreamed of an independent life,
              independent of location and in a modern way, but never put it into
              practice.
            </p>
            <h2>But what is happening at the moment?</h2>
            <p>
              The current situation shows us that the system that we are taught
              from an early age has its limits, we are forced to either endure
              and persevere or finally to exhaust the possibilities that our
              time gives us, believe it or not, it are more than enough people
              who still make their money the easiest way regardless of covid-19.
            </p>
          </div>
        </div>
        <div className="card2">
          <h2>“That’s all very nice, but how do I do this?”</h2>
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
              independent of location and in a modern way, but never put it into
              practice.
            </p>
            <h2>The exciting new world</h2>
            <p>
              The current situation shows us that the system that we are taught
              from an early age has its limits, we are forced to either endure
              and persevere or finally to exhaust the possibilities that our
              time gives us, believe it or not, it are more than enough people
              who still make their money the easiest way regardless of covid-19.
            </p>
          </div>
        </div>
        <div className="card2">
          <h1>
            The Blockchain, Ethereum and how this exiting new world can help
          </h1>
        </div>
        <div className="card">
          <div className="display-image2">
            <img src="./assets/img/blockchain.jpg" width="80%" />
          </div>
          <div>
            <h2>So what is this Blockchain and how it can help me?</h2>
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
        </div>
        <div className="card">
          <div>
            <img width="90%" src="./assets/img/risk_free.jpg" />
          </div>
          <div>
            <h2>So how do we start?</h2>
            <p>
              In case you already had your first experiences with
              cryptocurrencies and the blockchain itself, especially if you know
              how so called DApp Browsers work, you should click here to skip
              the introduction to them and directly start with the real deal!
            </p>
            <br />
            <br />

            <a className="button" href="#content">
              Direct Start
            </a>
          </div>
        </div>
      </section>
      <style jsx>{`
        .content {
          position: relative;
          padding: 50px 0;
          width: 95vw;
          max-width: 1080px;
          margin: 65vh auto;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          border-radius: 10px;
        }
        h1 {
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
      `}</style>
    </div>
  );
};

export default ContentCard;
