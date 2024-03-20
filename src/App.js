import "./App.css";
import george from "./assets/images/george.jpg";

function App() {
  const randomImageUrl = "https://picsum.photos/400/265";
  return (
    <div className="App">
      <h1>Task: add three images with some styling.</h1>
      <img height={400} src={george} alt="George Costanza" />
      <img
        height={400}
        src={require("./assets/images/JohnMoney.jpg")}
        alt="Ah NSS Days"
      />
      <img src={randomImageUrl} height={400} alt="Steady as she goes" />
    </div>
  );
}

export default App;
