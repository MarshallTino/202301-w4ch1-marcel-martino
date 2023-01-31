import GentlemenComponent from "./components/GentlemanComponent/Gentleman";
import InfoComponent from "./components/InfoComponent/Info";

function App() {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <InfoComponent number={5} />

        <main className="main">
          <ul className="gentlemen">
            <GentlemenComponent
              name="Fairy"
              status="alive"
              id={1}
              profession={"Influenser"}
              twitter={"@papasito"}
              picture={"./img/fary.jpg"}
              alternativeText={"Hi"}
              selected={true}
            />
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
