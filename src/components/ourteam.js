import React from "react";
import "../css/ourteam.css";
import DhirajImage from "../images/DhirajSir.jpg";
import HemantImage from "../images/HemantSir.jpg";
import AshishImage from "../images/AshishSir.jpg";
import MuskanImage from "../images/MuskanMam.jpg";
import AniketImage from "../images/AnkitSir.jpg";

const teamMembers = [
  { name: "Hemant Ghale", designation: "Founder & Director", image: HemantImage, linkedin: "https://www.linkedin.com/in/hemantghale/" },
  { name: "Dhiraj Umate", designation: "Head of Operations, India", image: DhirajImage, linkedin: "https://www.linkedin.com/in/dhiraj-umate-3819b9ab/" },
  { name: "Ashish Yadav", designation: "Client Engagement Head", image: AshishImage, linkedin: "https://www.linkedin.com/in/ashish-yadav-7b9701103/" },
  { name: "Muskan Nigam", designation: "Team Leader & Project Coordinator", image: MuskanImage, linkedin: "https://www.linkedin.com/in/muskan-nigam-717aaa1b3/" },
  { name: "Ankit Kharatmal", designation: "Business Development Manager", image: AniketImage, linkedin: "https://www.linkedin.com/in/ankit-kharatmal-359815140/" }
];

function OurTeam() {
  return (
    <section className="ourteam-section">
      {/* Tag */}
      <div className="ourteam-tag">Our Team</div>

      {/* Heading */}
      <h2 className="ourteam-heading">
        Meet the Powerhouses at<br/> vConnect iDees
      </h2>

      {/* Subtext */}
      <p className="ourteam-description">
        We bring together technology and strategy to create smarter sales solutions.
      </p>
      {/* Cards Grid */}
      <div className="ourteam-cards-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div
              className="team-card-image"
              style={{
                backgroundImage: `url(${member.image})`,
              }}
            ></div>
            <div className="team-card-footer">
              <div className="team-card-text">
                <span className="team-card-name">{member.name}</span>
                <span className="team-card-designation">{member.designation}</span>
              </div>
              <div className="team-card-icon">
                 <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                        <path d="M17.2363 0.791016H1.42383C1.09024 0.791016 0.770306 0.923535 0.53442 1.15942C0.298535 1.39531 0.166016 1.71524 0.166016 2.04883V17.8613C0.166016 18.1949 0.298535 18.5149 0.53442 18.7507C0.770306 18.9866 1.09024 19.1191 1.42383 19.1191H17.2363C17.5699 19.1191 17.8899 18.9866 18.1257 18.7507C18.3616 18.5149 18.4941 18.1949 18.4941 17.8613V2.04883C18.4941 1.71524 18.3616 1.39531 18.1257 1.15942C17.8899 0.923535 17.5699 0.791016 17.2363 0.791016ZM17.416 17.8613C17.416 17.909 17.3971 17.9547 17.3634 17.9884C17.3297 18.0221 17.284 18.041 17.2363 18.041H1.42383C1.37617 18.041 1.33047 18.0221 1.29677 17.9884C1.26307 17.9547 1.24414 17.909 1.24414 17.8613V2.04883C1.24414 2.00117 1.26307 1.95547 1.29677 1.92177C1.33047 1.88807 1.37617 1.86914 1.42383 1.86914H17.2363C17.284 1.86914 17.3297 1.88807 17.3634 1.92177C17.3971 1.95547 17.416 2.00117 17.416 2.04883V17.8613ZM6.27539 8.51758V14.2676C6.27539 14.4105 6.2186 14.5477 6.1175 14.6488C6.01641 14.7498 5.8793 14.8066 5.73633 14.8066C5.59336 14.8066 5.45625 14.7498 5.35515 14.6488C5.25406 14.5477 5.19727 14.4105 5.19727 14.2676V8.51758C5.19727 8.37461 5.25406 8.2375 5.35515 8.1364C5.45625 8.03531 5.59336 7.97852 5.73633 7.97852C5.8793 7.97852 6.01641 8.03531 6.1175 8.1364C6.2186 8.2375 6.27539 8.37461 6.27539 8.51758ZM14.1816 11.0332V14.2676C14.1816 14.4105 14.1248 14.5477 14.0238 14.6488C13.9227 14.7498 13.7855 14.8066 13.6426 14.8066C13.4996 14.8066 13.3625 14.7498 13.2614 14.6488C13.1603 14.5477 13.1035 14.4105 13.1035 14.2676V11.0332C13.1035 10.509 12.8953 10.0062 12.5246 9.63556C12.1539 9.26488 11.6512 9.05664 11.127 9.05664C10.6027 9.05664 10.1 9.26488 9.72931 9.63556C9.35863 10.0062 9.15039 10.509 9.15039 11.0332V14.2676C9.15039 14.4105 9.0936 14.5477 8.9925 14.6488C8.89141 14.7498 8.7543 14.8066 8.61133 14.8066C8.46836 14.8066 8.33125 14.7498 8.23015 14.6488C8.12906 14.5477 8.07227 14.4105 8.07227 14.2676V8.51758C8.07227 8.37461 8.12906 8.2375 8.23015 8.1364C8.33125 8.03531 8.46836 7.97852 8.61133 7.97852C8.7543 7.97852 8.89141 8.03531 8.9925 8.1364C9.0936 8.2375 9.15039 8.37461 9.15039 8.51758V8.70715C9.59465 8.33012 10.1375 8.08802 10.7148 8.00941C11.2922 7.93079 11.8799 8.01894 12.4088 8.26346C12.9377 8.50797 13.3856 8.89865 13.6998 9.38941C14.0139 9.88017 14.1811 10.4505 14.1816 11.0332ZM6.63477 6.00195C6.63477 6.17965 6.58207 6.35335 6.48335 6.5011C6.38463 6.64885 6.24431 6.764 6.08015 6.832C5.91598 6.9 5.73533 6.91779 5.56105 6.88313C5.38677 6.84846 5.22669 6.76289 5.10104 6.63724C4.97539 6.5116 4.88982 6.35151 4.85515 6.17723C4.82049 6.00295 4.83828 5.8223 4.90628 5.65814C4.97428 5.49397 5.08944 5.35365 5.23718 5.25493C5.38493 5.15621 5.55863 5.10352 5.73633 5.10352C5.97461 5.10352 6.20313 5.19817 6.37162 5.36666C6.54011 5.53515 6.63477 5.76367 6.63477 6.00195Z" fill="white"/>
                    </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
        <h2 className="ourteam-subheading">
            Love God, Love People, Love What We Do.
        </h2>
      </div>
    </section>
  );
}

export default OurTeam;
