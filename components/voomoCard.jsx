const VoomoCard = () => {
  return (
    <div>
      <section className="content" id="content">
        <h1>Voomo - The Smart Contract</h1>
        <h2>Designed from the Community for the Community</h2>
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
              time gives us, believe it or not, it are more than enough people
              who still make their money the easiest way regardless of covid-19.
            </p>
          </div>
        </div>

        <div className="card2">
          <h1>
            Your chance to work independantly or to create a passive income
          </h1>
          <div className="divider"></div>
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
            </p>
            <br />
            <br />
          </div>
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

export default VoomoCard;
