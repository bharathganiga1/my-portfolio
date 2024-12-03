
import './styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Home/>
        </section>
        <section id="education">
          <Education/>
        </section>
        <section id="projects">
          
          <ProjectSection/>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
