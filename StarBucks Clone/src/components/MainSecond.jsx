import "./mainsecond.css";

function MainSecond() {
  return (
    <div className="main-second">
      <div className="second-left">
        <h2>Supporting our Veteran community</h2>
        <p>
          We're contributing $100,000 each to two Veteran Service Organizations:
          Team Red, White & Blue and Travis Manion Foundation.
        </p>
        <button className="second-button">Learn more</button>
      </div>
      <div className="second-right">
        <img src="src/assets/images/main-2.webp" alt="" />
      </div>
    </div>
  );
}

export default MainSecond;
