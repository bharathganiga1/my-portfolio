
import './styles/App.css';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
      <section id="home">
          <h2>Home</h2>
          <p>Welcome to the Home section!</p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>This section contains information about me.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>Here are some of my projects.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </section>
      </main>
    </div>
  );
}

export default App;
