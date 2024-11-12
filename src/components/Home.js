import '../styles/home.css';
import react from "react";

class Home extends react.Component{
    render(){
        return(
            <div className="home-container">
                <div className="home-left">
                    <h2>Hello , Welcome</h2>
                    <h1>I'm Bharath</h1>
                    <p>Byte by Byte, Crafting the Future 🛠️ | Engineer on a Keyboard | Dreamer after Dusk 🌙 | Exploring the Art of Algorithms and Logic</p>
                    <button>Resume</button>
                </div>
                <div className="home-right">
                    <img src="images/profile.png"/>
                </div>
            </div>
        )
    }
}
export default Home;