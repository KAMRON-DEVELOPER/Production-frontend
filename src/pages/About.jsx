import { HeartSVG } from "../icons"


function About() {
  return (
    <div className="about-wrapper">
      <div className="about">
        <div className="about-fchild">
          <div className="heart-logo">
            <HeartSVG />
          </div>
          <div className="info">
            <h1>registered users: 4 806 289</h1>
            <h1>website is launched: 29-07-2024</h1>
            <h1> max monthly visitors: 278 349 / 25-09-2024</h1>
            <h1> max daily visitors: 24 817 / 11-08-2024</h1>
            <h1> male users: 2 699 874</h1>
            <h1> female users: 2 106 345</h1>
          </div>
        </div>
        <div className="creator">
          <h1>created by: Atajanov Kamronbek</h1>
        </div>
      </div>
    </div>
  )
}

export default About