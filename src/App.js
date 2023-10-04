import "./App.css";
import BodyComponent from "./components/Body.component";
import Footer from "./components/Footer.component";
import Header from "./components/Header.component";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BodyComponent />
      <Footer />
    </div>
  );
};

export default App;
