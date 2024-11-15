import React, { useEffect } from "react";
import "../styles/Education.css";

function Education() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible"); // Remove class when out of view
                    }
                });
            },
            { threshold: 0.4 } 
        );

        const elements = document.querySelectorAll(".education-block");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="Education">
            <h2>EDUCATION</h2>
            <div className="education-blocks">
                <div className="education-block">
                    <h3>SSLC</h3>
                    <p>
                        I completed My SSLC in Bondala Jagannatha Shetty Memorial
                        Government Highschool Shamboor
                    </p>
                    <h3>2018</h3>
                </div>
                <div className="education-block">
                    <h3>PUC</h3>
                    <p>
                        I completed My PUC in Vivekanadha Pre University, Nehru Nagara
                        Puttur
                    </p>
                    <h3>2018-20</h3>
                </div>
                <div className="education-block">
                    <h3>BE(CSE)</h3>
                    <p>
                        I completed My Bachelors of Engineering in Computer Science
                        Department from SJEC, Mangalore
                    </p>
                    <h3>2020-24</h3>
                </div>
            </div>
        </div>
    );
}

export default Education;
