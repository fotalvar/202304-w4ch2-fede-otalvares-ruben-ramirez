const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <img
          className="main-logo"
          src="images/main-logo.webp"
          alt="stars words logo"
          width="200"
          height="96"
        />
        <h1 className="main-title">Characters Stars Words</h1>
      </header>
      <section className="main">
        <ul className="characters"></ul>
      </section>
    </div>
  );
};

export default App;
