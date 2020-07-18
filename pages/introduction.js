import ContentCard from "../components/contentCard";
import Header from "../components/header";
import SocialButtons from "../components/social";

const Introduction = () => {
  return (
    <div>
      <body>
        <Header />
        <ContentCard />
        <SocialButtons />
      </body>
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

export default Introduction;
