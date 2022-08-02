export default function Main() {
  return (
    <main className="container">
      <h1 className="main--title">Spending - Last 7 days</h1>

      <section className="graph">{/* graph goes here!! */}</section>
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
