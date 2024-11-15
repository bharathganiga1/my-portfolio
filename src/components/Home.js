import React from "react";
import "../styles/home.css";

class Home extends React.Component {
    componentDidMount() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.2 } // Adjust as needed
        );

        const leftSection = document.querySelector(".home-left");
        const rightSection = document.querySelector(".home-right");

        if (leftSection) observer.observe(leftSection);
        if (rightSection) observer.observe(rightSection);

        return () => observer.disconnect();
    }

    render() {
        return (
            <div className="home-container">
                <div className="home-left">
                    <h2>Hello, Welcome</h2>
                    <h1>I'm Bharath</h1>
                    <p>
                        Byte by Byte, Crafting the Future 🛠️ | Engineer on a Keyboard |
                        Dreamer after Dusk 🌙 | Exploring the Art of Algorithms and Logic
                    </p>
                    <button>Resume</button>
                </div>
                <div className="home-right">
                    <img src="images/profile.png" alt="Profile" />
                </div>
            </div>
        );
    }
}

export default Home;
