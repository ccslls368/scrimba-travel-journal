import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      ></Card>
    );
  });
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="cards-list">
        {/* <Card></Card> */}
        {cards}
      </div>
    </div>
  );
}

export default App;
