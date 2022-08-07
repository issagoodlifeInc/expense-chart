import { useState } from "react";
import data from "../data";

export default function Main(props) {
  // How do you get JSON data -- decided to change the file to js and import
  // async function getData() {
  //   const res = await fetch("../data.json");
  //   const data = await res.json();
  //   return JSON.parse(data);
  // }

  // console.log(getData());
  // getData();

  const [showAmount, setShowAmount] = useState(false);

  // console.log(data);

  const currentDay = new Date().getDay();
  console.log(currentDay);

  // Styles to render the amount on top of each day onHover
  let amountShownStyle = {
    position: "absolute",
    // display: "none",
    backgroundColor: "var(--darkbrown)",
    padding: ".2rem .4rem",
    color: "var(--verypaleorange)",
    borderRadius: "5px",
  };

  const displayAmount = () => {
    const popup = document.querySelector(".amount--show");
    popup.style.display = "block";
  };

  const hideAmount = () => {
    const popup = document.querySelector(".amount--show");
    popup.style.display = "none";
  };

  const days = data.map((day) => {
    // Styles for all the graph elements
    let dayStyles = {
      position: "relative",
      height: `${day.amount * 3}px`,
      width: "50px",
      backgroundColor: "var(--softred)",
    };

    if (currentDay === day.id) {
      dayStyles = {
        position: "relative",
        height: `${day.amount * 3}px`,
        width: "50px",
        backgroundColor: "var(--cyan)",
      };
    }

    return (
      <div key={day.id} className="day">
        <div
          className="amount--day"
          style={dayStyles}
          // onMouseOver={() => displayAmount()}
          onMouseEnter={() => setShowAmount(true)}
          onMouseLeave={() => setShowAmount(false)}
          // onMouseLeave={() => hideAmount()}
        ></div>
        {showAmount && <div style={amountShownStyle}>{day.amount}</div>}
        {/* <div className="amount--show" style={amountShownStyle}>
          {day.amount}
        </div> */}
        <p className="amount--text">{day.day}</p>
      </div>
    );
  });

  return (
    <main className="container">
      <h1 className="main--title">Spending - Last 7 days</h1>
      <section className="graph">{days}</section>
      <hr />
      <div className=" flex main--body">
        <div className="total-month">
          <p className="main--text">Total this month</p>
          <p className="main--cost">$478.33</p>
        </div>
        <div className="difference">
          <p className="percentage-difference">+2.4%</p>
          <p className="difference-p">from last month</p>
        </div>
      </div>
    </main>
  );
}
