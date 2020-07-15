import Head from "next/head";

const Voomo = () => {
  return (
    <div>
      <Head>
        <title></title>
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
              <h2>How to start in the world of Blockchain?</h2>
              <p>First of all, you will</p>
              <h2>But what is happening at the moment?</h2>
              <p>
                The current situation shows us that the system that we are
                taught from an early age has its limits, we are forced to either
                endure and persevere or finally to exhaust the possibilities
                that our time gives us, believe it or not, it are more than
                enough people who still make their money the easiest way
                regardless of covid-19.
              </p>
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
