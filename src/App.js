import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Nav/>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
