import Head from "next/head";

const Voomo = () => {
  return (
    <div>
      <Head>
        <title>
          Voomo - The Smart Contract which has the power to change your life.
        </title>
      </Head>
      <section className="content" id="content">
        <div className="wrapper">
          <h1>
            Your chance to work independantly or to create a passive income
          </h1>
          <div className="card">
            <div>
              <img width="90%" src="./assets/img/risk_free.jpg" />
            </div>
            <div>
              <h2>So how do we start?</h2>
              <p>
                In case you already had your first experiences with
                cryptocurrencies and the blockchain itself, especially if you
                know how so called DApp Browsers work, you should click here to
                skip the introduction to them and directly start with the real
                deal!
              </p>
              <br />
              <br />

              <a className="button" href="#content">
                Direct Start
              </a>
            </div>
          </div>
          <div className="card">
            <div>
              <img width="90%" src="./assets/img/risk_free.jpg" />
            </div>
            <div>
              <h2>How to buy crypto?</h2>
              <p>
                In case you already had your first experiences with
                cryptocurrencies and the blockchain itself, especially if you
                know how so called DApp Browsers work, you should click here to
                skip the introduction to them and directly start with the real
                deal!
              </p>
              <br />
              <br />

              <a className="button" href="#content">
                Direct Start
              </a>
            </div>
          </div>
          <div className="card">
            <div>
              <img width="90%" src="./assets/img/risk_free.jpg" />
            </div>
            <div>
              <h2>Your wallet - your money</h2>
              <p>
                In case you already had your first experiences with
                cryptocurrencies and the blockchain itself, especially if you
                know how so called DApp Browsers work, you should click here to
                skip the introduction to them and directly start with the real
                deal!
              </p>
              <br />
              <br />

              <a className="button" href="#content">
                Direct Start
              </a>
            </div>
          </div>
          <div className="card">
            <div>
              <img width="90%" src="./assets/img/risk_free.jpg" />
            </div>
            <div>
              <h2>The DApp Browser</h2>
              <p>
                In case you already had your first experiences with
                cryptocurrencies and the blockchain itself, especially if you
                know how so called DApp Browsers work, you should click here to
                skip the introduction to them and directly start with the real
                deal!
              </p>
              <br />
              <br />

              <a className="button" href="#content">
                Direct Start
              </a>
            </div>
          </div>
          <div className="card">
            <div>
              <img width="90%" src="./assets/img/risk_free.jpg" />
            </div>
            <div>
              <h2>And let's get started!</h2>
              <p>
                In case you already had your first experiences with
                cryptocurrencies and the blockchain itself, especially if you
                know how so called DApp Browsers work, you should click here to
                skip the introduction to them and directly start with the real
                deal!
              </p>
              <br />
              <br />

              <a className="button" href="#content">
                Register
              </a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 32px;
        }

        h2,
        h3 {
          text-align: left;
        }
        .content {
          min-height: 100vh;
          display: flex;
          align-content: center center;
          padding: 100px 15px;
        }
        .wrapper {
          width: 95vw;
          max-width: 1080px;
          margin: 0 auto;
        }
        .card {
          margin: 5vh auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          padding: 20px;
          border-radius: 40px;

          position: relative;
          z-index: 0;
        }
        .display-imgage {
          height: 100%;
          align-self: center;
          z-index: 0;
          border-radius: 40px;
          box-shadow: 5px 5px 10px #000910, -5px -5px 10px #002340;
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
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Voomo;

{
  /* <div className="content-holder">
          <h1>
            You are spending hours a day online?
            <br />
            <br />
            But still don't earn money? <br />
            You are doing it wrong.
          </h1>
          <br />
          <br />
          <br />
          <a className="button" href="#content">
            Let's get to it
          </a>
        </div> */
}
