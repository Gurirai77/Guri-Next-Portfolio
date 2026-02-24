"use client";

import Image from "next/image";

export default function Work() {
  return (
    <div id="work">
      <div className="work">
        <div className="workc1">
          <h1 className="headline" >🚀 Recent Projects</h1>
        </div>

        <div className="workc2">

          {/* Card 1 */}
          <div className="wcard1">
            <div className="cardimg">
              <Image
                src="/loginpage.jpeg"
                alt="Login Project"
                width={600}
                height={350}
              />
            </div>

            <div className="cardtext">
              <h4>Login Page Design</h4>
              <p>
                Created a responsive login form with hover effects and shadows.
              </p>
              <p>
                Practiced input styling, alignment, and clean modern layout.
              </p>

              <div className="cardlang">
                <p>HTML</p>
                <p>CSS</p>
              </div>

            </div>
          </div>

          {/* Card 2 */}
          <div className="wcard1">
            <div className="cardimg">
              <Image
                src="/theguri.jpeg"
                alt="Portfolio Project"
                width={400}
                height={250}
              />
            </div>

            <div className="cardtext">
              <h4>Responsive Portfolio Website</h4>
              <p>
                Created a fully responsive personal portfolio website.
              </p>
              <p>
                Includes smooth layout, modern UI, and interactive hover
                effects for professional design.
              </p>

              <div className="cardlang">
                <p>HTML</p>
                <p>CSS</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 