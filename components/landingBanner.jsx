import CustomForm from "../components/newsletter";

const LandingBanner = () => {
  return (
    <div>
      <div className="content">
        <h1>3000$ a month, no matter what?</h1>
        <div className="divider"></div>
        <p>
          Sounds too good to be true? Subscribe here for free and I will teach
          you how!
        </p>
        <CustomForm />
      </div>
      <style jsx>{`
        .content {
          position: relative;
          padding: 50px 0;
          width: 95vw;
          max-width: 1080px;
          margin: 20vh auto;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          border-radius: 10px;
          text-align: center;
          box-shadow: 11px 11px 22px black;
        }
        .divider {
          height: 3px;
          width: 40%;
          background: #c90859;
          margin: auto auto;
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
      `}</style>
    </div>
  );
};

export default LandingBanner;
