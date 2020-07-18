import Head from "next/head";
import Header from "../components/header";
import SocialButtons from "../components/social";

const Voomo = () => {
  return (
    <div>
      <Head>
        <title>
          Voomo - The Smart Contract which has the power to change your life.
        </title>
      </Head>
      <body>
        <Header />
        <h1>Hallo von Voomo!</h1>
        <SocialButtons />
      </body>
      <style jsx>{`
        h1 {
          color: black;
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
