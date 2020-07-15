const Header = () => {
  return (
    <div>
      <section className="header">
        <div className="content-holder">
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
        </div>
      </section>
      <style jsx>{`
        .header {
          min-height: 100vh;
          display: flex;
          align-content: center center;
          width: 100vw;
          background-image: url("assets/img/blockchain-banner.jpg");
          background-color: #cccccc;
          background-position: bottom left;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .content-holder {
          width: 95vw;
          max-width: 1080px;
          margin: auto auto;
          color: white;
          background: #07051a;
          border-radius: 10px;
          box-shadow: 10px 10px 20px #000000, -10px -10px 20px #000000;
          text-align: center;
          padding: 50px 5px;
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
    </div>
  );
};

export default Header;
