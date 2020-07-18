import {
  FaTelegramPlane,
  FaFacebook,
  FaEthereum,
  FaMoneyBillWave,
} from "react-icons/fa";
import Link from "next/link";

const SocialButtons = () => {
  return (
    <div>
      <div className="button-holder">
        <Link href="/introduction">
          <a title="" className="buttons">
            <FaEthereum />
          </a>
        </Link>
        <Link href="/voomo">
          <a title="" className="buttons">
            <FaMoneyBillWave />
          </a>
        </Link>
        <a href="" title="" rel="noopener noreferrer" className="buttons">
          <FaTelegramPlane />
        </a>
        <a href="" title="" rel="noopener noreferrer" className="buttons">
          <FaFacebook />
        </a>
      </div>
      <style jsx>{`
        .button-holder {
          position: fixed;
          bottom: 0px;
          left: 0px;
          width: 100vw;
          min-width: 250px;
          min-height: 100px;
          z-index: 10;
          display: flex;
          justify-content: space-evenly;
          padding: 20px 0;
          background: rgba(0, 0, 0, 0.95);
        }
        .buttons {
          height: 60px;
          width: 60px;
          border-radius: 50%;

          font-size: 40px;
          color: #c90859;
          display: flex;
          align-content: center center;
          justify-content: center;
          padding-top: 10px;

          box-shadow: 4px 4px 28px rgba(255, 255, 255, 0.2),
            -4px -4px 60px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default SocialButtons;
