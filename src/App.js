import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";
import "./App.css";

function App() {
  return (
    <main>
      <div className="container container_1">
        <div className="logo">
          <img src={sedans} alt="sedans" />
        </div>
        <div className="info">
          <h1>sedans</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or your next road trip.
          </p>
          <button className="btn btn_1">Learn More</button>
        </div>
      </div>

      <div className="container container_2">
        <div className="logo">
          <img src={suvs} alt="suv" />
        </div>
        <div className="info">
          <h1>suvs</h1>
          <p>
            Take an SUV for its spacious interior, power and versetility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="btn btn_2">Learn More</button>
        </div>
      </div>

      <div className="container container_3">
        <div className="logo">
          <img src={luxury} alt="luxury" />
        </div>
        <div className="info">
          <h1>sedans</h1>
          <p>
            Cruise is the best car brands without bloated prices. Enjoy the
            enhanced comfort of luxury rental and arrive in style.
          </p>
          <button className="btn btn_3">Learn More</button>
        </div>
      </div>
    </main>
  );
}

export default App;
