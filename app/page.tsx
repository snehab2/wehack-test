import Jumbotron from "./sections/JumbotronPage/Jumbotron";
import About from "./sections/AboutPage/About";

export default function Home() {
  return (
    // this is where all our components will go
    <div className="App">
      <Jumbotron/>
      {/* <About/> */}
    </div>
  );
}
