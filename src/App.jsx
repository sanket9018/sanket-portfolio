import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import Projects from "./components/Projects";
import "/src/assets/css/home.css";
import "/src/assets/css/nav.css";

const Portfolio = ({ myQuote, myAuth }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  useEffect(() => {
    const typed = new Typed(".auto-input", {
      strings: ["Web Developer ", "Back-End Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const goToTopBtn = document.getElementById("goToTopBtn");
    const scrollFunction = () => {
      if (window.scrollY > 20) {
        goToTopBtn.style.display = "block";
      } else {
        goToTopBtn.style.display = "none";
      }
    };
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const toggleSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  const toggleMenu = () => {
    const nav = document.getElementById("navbar");
    const ul = document.getElementById("myUl");
    const hambar = document.querySelector(".hambar");

    nav.classList.toggle("navback");
    ul.classList.toggle("show");
    hambar.classList.toggle("active");
  };

  const skillList = [
    { src: "python.svg", label: "Python" },
    { src: "django.svg", label: "Django" },
    { src: "fastapi.svg", label: "FastAPI" },
    { src: "react.svg", label: "React" },
    { src: "aws.svg", label: "AWS" },
    { src: "docker.svg", label: "Docker" },
    { src: "selenium.svg", label: "Selenium" },
    { src: "microservice-icon.svg", label: "microservice" },
    { src: "mysql.svg", label: "MySQL" },
    { src: "postgresq.svg", label: "Postgres" },
    { src: "mongodb.svg", label: "MongoDB" },
    { src: "github.svg", label: "GitHub" },
    { src: "gitlab.svg", label: "GitLab" },
    { src: "js.svg", label: "JavaScript" },
    { src: "html.svg", label: "HTML5" },
    { src: "css.svg", label: "CSS3" },
    { src: "tailwindcss.svg", label: "Tailwindcss" },
    { src: "bootstrap.svg", label: "Bootstrap" },
    { src: "Jquery.svg", label: "Jquery" },
    { src: "jira.svg", label: "Jira" },
    { src: "trello.svg", label: "Trello" },
    { src: "postman.svg", label: "Postman" },
  ];

  const visibleSkills = showAllSkills ? skillList : skillList.slice(0, 5);

  return (
    <div className="main">
      <div id="navbar">
        <div className="hambar" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul id="myUl">
          <li><a href="#welcome-section" onClick={toggleMenu}>about</a></li>
          <li><a href="#skills" onClick={toggleMenu}>skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>work</a></li>
          <li><a href="#contact" onClick={toggleMenu}>contact</a></li>
        </ul>
      </div>

      <div className="content">
        <section id="welcome-section">
          <div className="welcomecontent">
            <h1 id="head"> Hey I am <span>Sanket</span></h1>
            <h2><span className="auto-input"> </span></h2>
            <div className="about-content">
              I'm a skilled Python Developer passionate about building scalable web applications and automation tools. I specialize in FastAPI, Django, and data-driven solutions using tools like Apache Airflow, Selenium, and Pandas. Focused on performance optimization, microservices architecture, and real-time analytics, I enjoy solving complex problems with clean, efficient code and a constant drive to learn and innovate.
            </div>
            {/* <div className="about-content">
              I was learning about <strong><em><u><a target="_blank" rel="noreferrer" style={{ color: "#be3144" }} href="https://en.wikipedia.org/wiki/Web_development">web development</a></u></em></strong> in my Bachelor of Computer Science and I'm also able to develop and improve my programming skills and apply them into a variety of projects.
            </div> */}
          </div>
          <div className="welcomeimg">
            <img className="myimg" src="/img/s.jpg" alt="" />
            <a href="/files/python_developer_sanket_resume.pdf" download className="download-btn">Resume</a>
          </div>
        </section>

        <section id="skills">
          <div className="skills-grid">
            {visibleSkills.map(({ src, label }) => (
              <div className="skill-card" key={label}>
                <img src={`/img/skills/${src}`} alt={label} />
                <p>{label}</p>
              </div>
            ))}
          </div>
          <button id="show-more" className="show-more-btn" onClick={toggleSkills}>
            {showAllSkills ? "Show Less" : "Show All"}
          </button>
        </section>

        <Projects />

        <section id="contact">
          <div className="contact-header">
            <h1>Contact Me <i className="fa-solid fa-handshake"></i></h1>
          </div>
          <div className="contact-links">
            <a href="mailto:sanket.dev025@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i>Gmail</a>
            <a href="https://www.linkedin.com/in/sanket-chudasama-1728a0256/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i>Linkedin</a>
            <a href="https://github.com/sanket9018" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i>Github</a>
            <a href="https://codepen.io/sanket9018" target="_blank" rel="noreferrer"><i className="fa-brands fa-codepen"></i>Codepen</a>
            <a href="https://twitter.com/ChudasamaSanket" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i>Twitter</a>
            <a href="https://www.instagram.com/_sanket_025/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-instagram"></i>Instagram</a>
          </div>
          <div className="quoteSection">
            <span className="quote">
              {myQuote ? `${myQuote}\n- ${myAuth}` : `"Do what you can, with what you have, where you are."\n- Theodore Roosevelt.`}
            </span>
          </div>
        </section>

        <button id="goToTopBtn" title="Go to top" style={{ display: "none" }}>
          <img src="/img/top.svg" alt="Top" />
        </button>

        <footer>
          <p>Thank You For Visit 😊</p>
          <p>©sanket025</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;