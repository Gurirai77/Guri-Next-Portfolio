export default function About() {
  return (
    <div id="about">
      <div className="aboutme">
        <h2 className="headline">👨‍💻 About Me</h2>

        <div className="about-content">
          <p>
            I'm <b>Guri Rai</b>, a passionate <b>Frontend Developer</b> focused on
            building clean, modern, and responsive web applications.
          </p>

          <p>
            I have strong foundations in <b>HTML, CSS, JavaScript</b> and I
            actively build projects using <b>React, Next.js, and TypeScript</b>
            to sharpen my real-world development skills.
          </p>

          <p>
            My goal is to grow as a <b>Software Developer</b>, create impactful
            digital products, and eventually build my own tech-driven business.
          </p>

          <p>
            Currently studying in <b>11th grade</b>, I balance academics with
            continuous coding practice — believing that consistency and
            execution turn ideas into reality.
          </p>

          <p className="Lets">
            Let’s build something meaningful together 🚀
          </p>
        </div>

        <div className="cv-btn-wrapper">
          <a
            href="/guri-rai-frontend-developer.pdf"
            download
            className="cv-btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}