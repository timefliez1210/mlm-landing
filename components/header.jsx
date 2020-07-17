const Header = () => {
  return (
    <div>
      <section className="header"></section>
      <style jsx>{`
        .header {
          height: 100vh;
          width: 100vw;
          position: fixed;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("assets/img/lets-start.jpg");
        }
      `}</style>
    </div>
  );
};

export default Header;
