import Jumbotron from "./sections/JumbotronPage/Jumbotron";
import About from "./sections/AboutPage/About";
import Nav from "./sections/Navbar/Nav";
import Footer from "./sections/Footer/Footer";
export default function Home() {
  return (
    // this is where all our components will go
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <About/>
      <Footer/>
    </div>
  );
}
