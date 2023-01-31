import GentlemenComponent from "./components/GentlemanComponent/Gentleman";
import InfoComponent from "./components/InfoComponent/Info";

function App() {
  let gentlemanArray = [
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      id: 2,
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ];

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
