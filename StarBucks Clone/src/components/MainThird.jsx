import "./mainthird.css";

function MainThird() {
  return (
    <div className="main-third">
      <div className="third-left">
        <img src="src/assets/images/main-3.png" alt="" />
      </div>
      <div className="third-right">
        <h2>Gingerbread meets chai</h2>
        <p>
          Say hello to the festive new Iced Gingerbread Oatmilk Chai. It's the
          beloved flavor of gingerbread with a twist. Here for a limited time
        </p>
        <button className="third-button">Order now</button>
      </div>
    </div>
  );
}

export default MainThird;
