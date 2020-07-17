const HeaderAlt = () => {
  return (
    <div>
      <div className="header">
        <div className="content">
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
            <b>Let's get to it</b>
          </a>
        </div>
      </div>
      <style jsx>{`
        .header {
          padding: 20vh 0;
          height: 100vh;
          disply: flex;
          align-content: center center;
          justify-content: center;
          align-items: center;
          background: white;
        }

        // .header::before {
        //   content: "";
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100vh;
        //   background: #f78520;
        //   clip-path: polygon(57% 0, 81% 0, 100% 100%, 37% 100%);
        // }

        .header::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(
            323deg,
            rgba(245, 159, 16, 1) 0%,
            rgba(235, 0, 124, 1) 38%,
            rgba(15, 13, 48, 1) 59%
          );

          //   clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%);
        }

        .content {
          position: relative;
          z-index: 5;
          width: 95vw;
          max-width: 1080px;
          border-radius: 30px;
          margin: auto auto;
          color: white;
          text-align: center;
          padding: 50px 5px;
          background: rgba(0, 0, 0, 0.5);
        }

        .button {
          background: linear-gradient(45deg, #ff0081, #f78520);
          color: black;
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

export default HeaderAlt;
