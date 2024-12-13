export default function App() {
  return (
    <main>
      <div className="left-column">
        <section className="card-name">
          <h1>KYUNG-MIN KIM</h1>
          <i>Junior Web Developer</i>
        </section>

        <section>
          <h3>CONTACT</h3>
          <p>0123456789
            <br />
            abc@email.com
            <br />
            New Zealand</p>
        </section>
        <section>
          <h3>CAREER OBJECTIVE</h3>
          <p>Aspiring graduate seeking to expand my learning under a reputable company.</p>
        </section>
        <section>
          <h3>SKILLS</h3>
          <i>Programming Languages:</i>
          <ul>
            <li>Python</li>
            <li>Javascript</li>
            <li>C#</li>
            <li>Ruby</li>
            <li>HTML5/CSS3</li>
          </ul>
          <i>Libraries and Frameworks:</i>
          <ul>
            <li>React</li>
            <li>Django</li>
          </ul>
          <i>Development Tools:</i>
          <ul>
            <li>Chrome DevTools</li>
            <li>Git</li>
            <li>Visual Studio Code</li>
            <li>Linux CLI</li>
          </ul>
          <i>Personal:</i>
          <ul>
            <li>Team player</li>
            <li>Detail-oriented</li>
            <li>Analytical</li>
            <li>Patient</li>
          </ul>
        </section>
      </div>
      <div className="right-column">
        <article>
          <h3>EDUCATION</h3>
          <div>
            <p>
              <b>University of Auckland</b>
              <br />
              Bachelor of Science
              <br />
              Major in Computer Science
            </p>
            <span>2016-2020</span>
          </div>
          <div>
            <p>
              <b>Unitec</b>
              <br />
              Graduate Diploma of Computer
            </p>
            <span>2022-2023</span>
          </div>
        </article>
        <article>
          <h3>PERSONAL PROJECTS</h3>
          <a href="https://sentient-cactus.itch.io/togwycmps">'That One Game Where You Climb a Mountain with a Pogo Stick'</a>
          <ul>
            <li>Designed, developed, and deployed a web browser game using
              Unity during a 3-day game jam</li>
            <li>Collaborated with a partner by utilising Unity's built in cloud
              repository, Unity Collab</li>
            <li>Implemented unique game behaviour using scripts, written in C#</li>
            <li>Debugged the game within Unity Editor and web browser DevTools</li>
          </ul>
          <p>'Odin Calculator'</p>
          <ul>
            <li>Deployed to GitHub as part of an online course</li>
            <li>Displays proficiency in HTML5, CSS3 and Javascript</li>
            <li>Designed to simulate the behaviour of a pocket calculator</li>
            <li>Demonstrated understanding of ideal git commits</li>
          </ul>
        </article>
        <article>
          <h3>UNIVERSITY PROJECTS</h3>
          <p>'Dog Forum'</p>
          <ul>
            <li>Followed Agile methodology alongside group members to create
              app</li>
            <li>Assisted group members by interpreting website requirements to
              write out user stories, and translate into code</li>
            <li>Developed product with Django and deployed on Heroku</li>
          </ul>
        </article>
        <article>
          <h3>WORK EXPERIENCE</h3>
          <div>
            <p>Retail Assistant</p>
            <p>2023-Present</p>
          </div>
          <ul>
            <li>Greeted customers and assisted them in choosing products</li>
            <li>Collected payment for products - cash or credit card transactions</li>
            <li>Priced stock and rotated stock in store as required</li>
          </ul>
        </article>
      </div>
    </main>
  )
}