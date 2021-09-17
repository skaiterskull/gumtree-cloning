import "./App.css";
import { Info } from "./components/info/Info";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { MainContent } from "./components/main-content/MainContent";

function App() {
  return (
    <>
      <Info></Info>
      <Navbar></Navbar>
      <Header></Header>
      <MainContent></MainContent>
    </>
  );
}

export default App;
