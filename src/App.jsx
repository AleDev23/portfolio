import { useState } from "react";
import imagen_perfil from './assets/foto-perfil.jpg';

const phoneNumber = "+542645236102";
const predeterminatedMsj = "Hola Alejandro! me gusto tu portfolio";


export const App = () => {
  // Estado para controlar qué contenido se muestra
  const [activeTab, setActiveTab] = useState('about'); // 'about' es la pestaña activa por defecto

  // Función para manejar el cambio de pestañas
  const handleTabClick = (tab) => {
    setActiveTab('');

    setActiveTab(tab);
  }
  return (
    <>

      <div className="profile container">
        <div className="profile__container grid">
          <div className="profile__data">
            <div className="profile__border">
              <div className="profile__perfil">
                <img src={imagen_perfil} alt="" />
              </div>
            </div>

            <h2 className="profile__name">Alejandro Olmedo</h2>
            <h3 className="profile__profession">Bakend Java Developer</h3>

            <ul className="profile__social">
              <a href="https://www.linkedin.com/in/alejandro-olmedo-a3b42b337/" target="_blank" className="profile__social-link">
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a href="https://www.github.com/AleDev23" target="_blank" className="profile__social-link">
                <i className="ri-github-fill"></i>
              </a>
            </ul>
          </div>

          <div className="profile__info grid">
            <div className="profile__info-group">
              <h3 className="profile__info-number">Educación:</h3>
              <p className="profile__info-description">U.N.S.J.:</p>
              <p className="profile__info-description">Lic. Cs. de la computación</p>

            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">Experiencia:</h3>
              <p className="profile__info-description">Java Backend Dev</p>
              <p className="profile__info-description">TAUP</p>
            </div>
          </div>

          <div className="profile__buttons">
            <div className="btn-con">
              <a download="" href="" className="main-btn">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon"><i className="fas fa-download"></i></span>
              </a>
            </div>

            <div className="profile__buttons-small">
              <a href={`https://wa.me/${phoneNumber}/?text=${predeterminatedMsj}`} target="_blank" className="button button__small button__gray">
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="main">
        <section className="filters container">
          <ul className="filters__content">
            <button
              className={`filters__button ${activeTab === 'about' ? 'filter-tab-active' : ''}`}
              onClick={() => handleTabClick('about')}
            >
              About
            </button>

            <button
              className={`filters__button ${activeTab === 'projects' ? 'filter-tab-active' : ''}`}
              onClick={() => handleTabClick('projects')}
            >
              Projects
            </button>

            <button
              className={`filters__button ${activeTab === 'skills' ? 'filter-tab-active' : ''}`}
              onClick={() => handleTabClick('skills')}
            >
              Skills
            </button>

            <button className="filters__button" data-target="#contact">
              Contact
            </button>
          </ul>

          <div className="filters__sections">
            <div
              className={`about__content grid ${activeTab === 'about' ? 'filters__active' : 'hide'}`}
              id="about"
            >
              <h2 className="about__title title">About Me</h2>

              <div className="about__container grid">
                <img src="./img/foto-perfil.jpeg" alt="" />

                <div className="about__data">

                  <p className="aboout__description">
                    Soy un desarrollador backend con experiencia en Java, especializado en Spring MVC
                    y WebFlux. A lo largo de mi carrera, me he enfocado en crear soluciones escalables y
                    eficientes, aprovechando las capacidades de estas tecnologías para optimizar el rendimiento
                    de aplicaciones empresariales. Mi enfoque está en el diseño de arquitecturas robustas y
                    en la implementación de sistemas que puedan manejar grandes volúmenes de datos con alta
                    disponibilidad. Me apasiona aprender y seguir ampliando mis habilidades en desarrollo backend,
                    manteniéndome actualizado con las mejores prácticas y herramientas del sector.
                  </p>

                  <a href="#contact" className="button">Contact Me</a>
                </div>
              </div>
            </div>

            <div
              className={`about__content grid ${activeTab === 'projects' ? 'filters__active' : 'hide'}`}
              id="projects">
              <h3 className="project__subtitle subtitle">My Work</h3>
              <h2 className="project__title title">Portfolio</h2>

              <div className="projects__container container grid">
                <article className="projects__card">
                  <img src="./img/vmg-web.jpg" alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      <span className="projects__subtitle">Web</span>
                      <h3 className="projects__title">Enterprise site</h3>
                      <a href="#" className="projects__button button button__small">
                        <i className="ri-external-link-line"></i>
                      </a>
                    </div>
                  </div>
                </article>

                <article className="projects__card">
                  <img src="./img/vmg-web.jpg" alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      <span className="projects__subtitle">Web</span>
                      <h3 className="projects__title">Enterprise site</h3>
                      <a href="#" className="projects__button button button__small">
                        <i className="ri-external-link-line"></i>
                      </a>
                    </div>
                  </div>
                </article>

                <article className="projects__card">
                  <img src="./img/vmg-web.jpg" alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      <span className="projects__subtitle">Web</span>
                      <h3 className="projects__title">Enterprise site</h3>
                      <a href="#" className="projects__button button button__small">
                        <i className="ri-external-link-line"></i>
                      </a>
                    </div>
                  </div>
                </article>

                <article className="projects__card">
                  <img src="./img/vmg-web.jpg" alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      <span className="projects__subtitle">Web</span>
                      <h3 className="projects__title">Enterprise site</h3>
                      <a href="#" className="projects__button button button__small">
                        <i className="ri-external-link-line"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div
              className={`skills__content grid ${activeTab === 'skills' ? 'filters__active' : 'hide'}`}
              id="skills"
            >
              <div className="skills__area">
                <h3 className="skills__title">Frontend</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="fa-brands fa-html5"></i>
                      <div>
                        <h3 className="skills__name">HTML</h3>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-brands fa-css3"></i>
                      <div>
                        <h3 className="skills__name">CSS</h3>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-brands fa-js-square"></i>
                      <div>
                        <h3 className="skills__name">JavaScript</h3>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">

                    <div className="skills__data">
                      <i className="ri-reactjs-line"></i>
                      <div>
                        <h3 className="skills__name">React</h3>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-brands fa-git-alt"></i>
                      <div>
                        <h3 className="skills__name">Git</h3>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div className="skills__area">
                <h3 className="skills__title">Backend</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="fa-solid fa-database"></i>
                      <div>
                        <h3 className="skills__name">MySQL</h3>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="fa-brands fa-java"></i>
                      <div>
                        <h3 className="skills__name">Java</h3>
                      </div>
                    </div>
                    <div className="skills__data">
                      <i className="fa-solid fa-code"></i>
                      <div>
                        <h3 className="skills__name">Spring Webflux</h3>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">

                    <div className="skills__data">
                      <i className="fa-solid fa-terminal"></i>
                      <div>
                        <h3 className="skills__name">Spring MVC</h3>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="contact__content grid " data-content id="contact">
              <h3 className="section__subtitle subtitle">Get in touch</h3>
              <h2 className="section__title title">Contact Me</h2>

              <div className="contact__container container grid ">
                <div className="contact__content">
                  <h3 className="contact__title">Talk to me</h3>

                  <div className="contact__info">
                    <div className="contact__card">
                      <i className="fa-solid fa-envelope contact__card-icon"></i>
                      <h3 className="contact__card-title">Email</h3>
                      <span className="contact__card-data">giossodev@gmail.com</span>

                    </div>
                  </div>

                  <div className="contact__info">
                    <div className="contact__card">
                      <i className="ri-whatsapp-line contact__card-icon"></i>
                      <h3 className="contact__card-title">Whatsapp</h3>
                      <span className="contact__card-data">+54 3571 662277</span>

                    </div>
                  </div>

                  <div className="contact__info">
                    <div className="contact__card">
                      <i className="ri-linkedin-box-line contact__card-icon"></i>
                      <h3 className="contact__card-title">Linkedin</h3>
                      <span className="contact__card-data">valegiosso</span>

                    </div>
                  </div>
                </div>

                <div className="contact__content">
                  <h3 className="contact__title">Write me your project</h3>

                  <form action="" className="contact__form">
                    <div className="contact__form-div">
                      <label htmlFor="" className="contact__form-tag">Names</label>
                      <input type="text" className="contact__form-input" placeholder="Insert your name" />
                    </div>

                    <div className="contact__form-div">
                      <label htmlFor="" className="contact__form-tag">Mail</label>
                      <input type="email" className="contact__form-input" placeholder="Insert your mail" />
                    </div>

                    <div className="contact__form-div contact__form-area">
                      <label htmlFor="" className="contact__form-tag">Proposal</label>
                      <textarea name="" id="" cols="30" rows="10" placeholder="Write your proposal"
                        className="contact__form-input"></textarea>
                    </div>

                    <button className="button">Send Message</button>
                  </form>


                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

      <footer className="footer container">
        <span className="footer__copy">
          &#169; Alejandro N. Olmedo. All rigths reserved
        </span>
      </footer>
    </>
  )
}
