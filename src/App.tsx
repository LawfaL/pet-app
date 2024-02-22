import { Banner } from "pages/homepage/_partials/banner/Banner";
import "./App.css";
import { Header, Homepage } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="rect rect-1" />
      <Header />
      <Banner />
      <Homepage />
    </div>
  );
}

export default App;
