import './App.css';
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Footer from "./components/footer"
import Projects from "./components/projects"
import Data from "./components/data"

function App() {
  const pro = Data.map((proj) => {
    return <Projects 
              image = {proj.image}
              title = {proj.title}
              about = {proj.about}
              langs = {proj.langs}
              link = {proj.link}
              code = {proj.code}
          />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      {pro}
      <Footer />
    </div>
  );
}

export default App;
