import "./App.css";
import Book from "./Book";
import { Actor } from "./Actor";
import Singer from "./Singer";

function App() {
  // write all js before return

  const actors = ["Hero Alom", "Jeet", "Dev", "Jashim"];

  const singers = [
    { id: 1, name: "Hasan", age: 44 },
    { id: 2, name: "Alive", age: 44 },
    { id: 3, name: "Kutu", age: 44 },
  ];
  return (
    <>
      <h3>Learn React</h3>
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      <New></New>
      <Device name="Mobile" price={50000}></Device>
      <Device name="Laptop" price="60000"></Device>
      <Developer></Developer>
      <Book task="Learn React" isDone={true}></Book>
      <Book task="Explore React" isDone={false}></Book>
      <Book task="Explore React Native" isDone={true}></Book>
      <Actor name="Hero"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
    </>
  );
}
// style
const developerStyle = {
  margin: "20px",
  padding: "20px",
  border: "2px solid purple",
  borderRadius: "20px",
};

// component
// properties -> props -> read-only
//eslint error
function Device({ name, price }) {
  return (
    <>
      <div style={developerStyle}>
        <h3>
          This Device: {name}, Price: {price}
        </h3>
      </div>
    </>
  );
}

function New() {
  return <>New student</>;
}

function Developer() {
  return (
    <>
      <div style={developerStyle}>
        <h4>New Developer</h4>
        <p>Coding: </p>
      </div>
    </>
  );
}

export default App;
