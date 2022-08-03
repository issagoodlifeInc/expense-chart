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

  console.log(data);

  const days = data.map((day) => {
    let dayStyles = {
      height: `${day.amount * 3}px`,
      width: "50px",
      backgroundColor: "red",
    };
    return (
      <div className="day">
        <div className="amount--day" style={dayStyles}></div>
        <p className="amount--text">{day.day}</p>
      </div>
    );
  });

  return (
    <main className="container">
      <h1 className="main--title">Spending - Last 7 days</h1>
      <section className="graph">{days}</section>
      <hr />
      <div className=" flex">
        <div className="total-month">
          <p className="main--text">Total this month</p>
          <h2 className="main--cost">$478.33</h2>
        </div>
        <div className="difference">
          <h3 className="h3 percentage-difference">+2.4%</h3>
          <p className="difference-p">from last month</p>
        </div>
      </div>
    </main>
  );
}
