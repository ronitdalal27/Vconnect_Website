import React from "react";
import "../css/ourteam.css";
import DhirajImage from "../images/DhirajSir.png";
import HemantImage from "../images/HemantSir.png";
import AshishImage from "../images/AshishSir.png";
import MuskanImage from "../images/MuskanMam.png";
import AniketImage from "../images/AnkitSir.png";
import ArpanImage from "../images/Arpan.png";
import MehrishiImage from "../images/MehrishiMam.png";

const teamMembers = [
  { name: "Hemant Ghale", designation: "Founder & Director", image: HemantImage, linkedin: "https://www.linkedin.com/in/hemantghale/" },
  { name: "Dhiraj Umate", designation: "Head of Operations, India", image: DhirajImage, linkedin: "https://www.linkedin.com/in/dhiraj-umate-3819b9ab/" },
  { name: "Ashish Yadav", designation: "Client Engagement Head", image: AshishImage, linkedin: "https://www.linkedin.com/in/ashish-yadav-7b9701103/" },
  { name: "Muskan Nigam", designation: "Team Leader & Project Coordinator", image: MuskanImage, linkedin: "https://www.linkedin.com/in/muskan-nigam-717aaa1b3/" },
  { name: "Ankit Kharatmal", designation: "Business Development Manager", image: AniketImage, linkedin: "https://www.linkedin.com/in/ankit-kharatmal-359815140/" },
  { name: "Arpan Chavan", designation: "UI UX Designer", image: ArpanImage, linkedin: "https://www.linkedin.com/in/arpan-chavan/" },
  { name: "Mehrishi Tiwari", designation: "HR Manager", image: MehrishiImage, linkedin: "https://www.linkedin.com/in/mehrishi-tiwari-a2b191237/" }
];

// rows
const row1 = teamMembers.slice(0, 3);  // first 3 (large style)
const row2 = teamMembers.slice(3, 5);  // next 2 (small style)
const row3 = teamMembers.slice(5, 7);  // last 2 (small style)

// radial gradient (same as before)
const radialGradient = "radial-gradient(84.1% 87.15% at 49.83% 49.95%, #FFF 0%, rgba(186,176,232,0.80) 56.73%)";

function OurTeam() {
  const renderLargeCard = (member) => (
    <div className="team-card" key={member.name}>
      <div
        className="team-card-image large"
        style={{
          /* IMAGE on top, gradient underneath */
          backgroundImage: `url(${member.image}), ${radialGradient}`,
          /* specify sizes for each layer: image should cover, gradient can cover too */
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat"
          /* if you want subtle blending: add backgroundBlendMode: "multiply" */
        }}
        aria-hidden="true"
      />
      <div className="team-card-footer">
        <div className="team-card-text">
          <span className="team-card-name">{member.name}</span>
          <span className="team-card-designation">{member.designation}</span>
        </div>
        <div className="team-card-icon">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
              <path d="M17.7363 0.930908H1.92383C1.59024 0.930908 1.27031 1.06343 1.03442 1.29931C0.798535 1.5352 0.666016 1.85513 0.666016 2.18872V18.0012C0.666016 18.3348 0.798535 18.6547 1.03442 18.8906C1.27031 19.1265 1.59024 19.259 1.92383 19.259H17.7363C18.0699 19.259 18.3899 19.1265 18.6257 18.8906C18.8616 18.6547 18.9941 18.3348 18.9941 18.0012V2.18872C18.9941 1.85513 18.8616 1.5352 18.6257 1.29931C18.3899 1.06343 18.0699 0.930908 17.7363 0.930908ZM17.916 18.0012C17.916 18.0489 17.8971 18.0946 17.8634 18.1283C17.8297 18.162 17.784 18.1809 17.7363 18.1809H1.92383C1.87617 18.1809 1.83047 18.162 1.79677 18.1283C1.76307 18.0946 1.74414 18.0489 1.74414 18.0012V2.18872C1.74414 2.14106 1.76307 2.09536 1.79677 2.06166C1.83047 2.02796 1.87617 2.00903 1.92383 2.00903H17.7363C17.784 2.00903 17.8297 2.02796 17.8634 2.06166C17.8971 2.09536 17.916 2.14106 17.916 2.18872V18.0012ZM6.77539 8.65747V14.4075C6.77539 14.5504 6.7186 14.6876 6.6175 14.7886C6.51641 14.8897 6.3793 14.9465 6.23633 14.9465C6.09336 14.9465 5.95625 14.8897 5.85515 14.7886C5.75406 14.6876 5.69727 14.5504 5.69727 14.4075V8.65747C5.69727 8.5145 5.75406 8.37739 5.85515 8.2763C5.95625 8.1752 6.09336 8.11841 6.23633 8.11841C6.3793 8.11841 6.51641 8.1752 6.6175 8.2763C6.7186 8.37739 6.77539 8.5145 6.77539 8.65747ZM14.6816 11.1731V14.4075C14.6816 14.5504 14.6248 14.6876 14.5238 14.7886C14.4227 14.8897 14.2855 14.9465 14.1426 14.9465C13.9996 14.9465 13.8625 14.8897 13.7614 14.7886C13.6603 14.6876 13.6035 14.5504 13.6035 14.4075V11.1731C13.6035 10.6489 13.3953 10.1461 13.0246 9.77545C12.6539 9.40478 12.1512 9.19653 11.627 9.19653C11.1027 9.19653 10.6 9.40478 10.2293 9.77545C9.85863 10.1461 9.65039 10.6489 9.65039 11.1731V14.4075C9.65039 14.5504 9.5936 14.6876 9.4925 14.7886C9.39141 14.8897 9.2543 14.9465 9.11133 14.9465C8.96836 14.9465 8.83125 14.8897 8.73015 14.7886C8.62906 14.6876 8.57227 14.5504 8.57227 14.4075V8.65747C8.57227 8.5145 8.62906 8.37739 8.73015 8.2763C8.83125 8.1752 8.96836 8.11841 9.11133 8.11841C9.2543 8.11841 9.39141 8.1752 9.4925 8.2763C9.5936 8.37739 9.65039 8.5145 9.65039 8.65747V8.84704C10.0946 8.47002 10.6375 8.22791 11.2148 8.1493C11.7922 8.07068 12.3799 8.15883 12.9088 8.40335C13.4377 8.64787 13.8856 9.03855 14.1998 9.52931C14.5139 10.0201 14.6811 10.5904 14.6816 11.1731ZM7.13477 6.14185C7.13477 6.31954 7.08207 6.49324 6.98335 6.64099C6.88463 6.78874 6.74431 6.90389 6.58015 6.97189C6.41598 7.03989 6.23533 7.05769 6.06105 7.02302C5.88677 6.98835 5.72669 6.90279 5.60104 6.77714C5.47539 6.65149 5.38982 6.4914 5.35515 6.31712C5.32049 6.14284 5.33828 5.9622 5.40628 5.79803C5.47428 5.63386 5.58944 5.49354 5.73718 5.39482C5.88493 5.2961 6.05863 5.24341 6.23633 5.24341C6.47461 5.24341 6.70313 5.33806 6.87162 5.50655C7.04011 5.67504 7.13477 5.90357 7.13477 6.14185Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  const renderSmallCard = (member) => (
    <div className="team-card" key={member.name}>
      <div
        className="team-card-image small"
        style={{
          backgroundImage: `url(${member.image}), ${radialGradient}`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat"
        }}
        aria-hidden="true"
      />
      <div className="team-card-footer">
        <div className="team-card-text">
          <span className="team-card-name">{member.name}</span>
          <span className="team-card-designation">{member.designation}</span>
        </div>
        <div className="team-card-icon">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
              <path d="M17.7363 0.930908H1.92383C1.59024 0.930908 1.27031 1.06343 1.03442 1.29931C0.798535 1.5352 0.666016 1.85513 0.666016 2.18872V18.0012C0.666016 18.3348 0.798535 18.6547 1.03442 18.8906C1.27031 19.1265 1.59024 19.259 1.92383 19.259H17.7363C18.0699 19.259 18.3899 19.1265 18.6257 18.8906C18.8616 18.6547 18.9941 18.3348 18.9941 18.0012V2.18872C18.9941 1.85513 18.8616 1.5352 18.6257 1.29931C18.3899 1.06343 18.0699 0.930908 17.7363 0.930908ZM17.916 18.0012C17.916 18.0489 17.8971 18.0946 17.8634 18.1283C17.8297 18.162 17.784 18.1809 17.7363 18.1809H1.92383C1.87617 18.1809 1.83047 18.162 1.79677 18.1283C1.76307 18.0946 1.74414 18.0489 1.74414 18.0012V2.18872C1.74414 2.14106 1.76307 2.09536 1.79677 2.06166C1.83047 2.02796 1.87617 2.00903 1.92383 2.00903H17.7363C17.784 2.00903 17.8297 2.02796 17.8634 2.06166C17.8971 2.09536 17.916 2.14106 17.916 2.18872V18.0012ZM6.77539 8.65747V14.4075C6.77539 14.5504 6.7186 14.6876 6.6175 14.7886C6.51641 14.8897 6.3793 14.9465 6.23633 14.9465C6.09336 14.9465 5.95625 14.8897 5.85515 14.7886C5.75406 14.6876 5.69727 14.5504 5.69727 14.4075V8.65747C5.69727 8.5145 5.75406 8.37739 5.85515 8.2763C5.95625 8.1752 6.09336 8.11841 6.23633 8.11841C6.3793 8.11841 6.51641 8.1752 6.6175 8.2763C6.7186 8.37739 6.77539 8.5145 6.77539 8.65747ZM14.6816 11.1731V14.4075C14.6816 14.5504 14.6248 14.6876 14.5238 14.7886C14.4227 14.8897 14.2855 14.9465 14.1426 14.9465C13.9996 14.9465 13.8625 14.8897 13.7614 14.7886C13.6603 14.6876 13.6035 14.5504 13.6035 14.4075V11.1731C13.6035 10.6489 13.3953 10.1461 13.0246 9.77545C12.6539 9.40478 12.1512 9.19653 11.627 9.19653C11.1027 9.19653 10.6 9.40478 10.2293 9.77545C9.85863 10.1461 9.65039 10.6489 9.65039 11.1731V14.4075C9.65039 14.5504 9.5936 14.6876 9.4925 14.7886C9.39141 14.8897 9.2543 14.9465 9.11133 14.9465C8.96836 14.9465 8.83125 14.8897 8.73015 14.7886C8.62906 14.6876 8.57227 14.5504 8.57227 14.4075V8.65747C8.57227 8.5145 8.62906 8.37739 8.73015 8.2763C8.83125 8.1752 8.96836 8.11841 9.11133 8.11841C9.2543 8.11841 9.39141 8.1752 9.4925 8.2763C9.5936 8.37739 9.65039 8.5145 9.65039 8.65747V8.84704C10.0946 8.47002 10.6375 8.22791 11.2148 8.1493C11.7922 8.07068 12.3799 8.15883 12.9088 8.40335C13.4377 8.64787 13.8856 9.03855 14.1998 9.52931C14.5139 10.0201 14.6811 10.5904 14.6816 11.1731ZM7.13477 6.14185C7.13477 6.31954 7.08207 6.49324 6.98335 6.64099C6.88463 6.78874 6.74431 6.90389 6.58015 6.97189C6.41598 7.03989 6.23533 7.05769 6.06105 7.02302C5.88677 6.98835 5.72669 6.90279 5.60104 6.77714C5.47539 6.65149 5.38982 6.4914 5.35515 6.31712C5.32049 6.14284 5.33828 5.9622 5.40628 5.79803C5.47428 5.63386 5.58944 5.49354 5.73718 5.39482C5.88493 5.2961 6.05863 5.24341 6.23633 5.24341C6.47461 5.24341 6.70313 5.33806 6.87162 5.50655C7.04011 5.67504 7.13477 5.90357 7.13477 6.14185Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="ourteam-section">
      <div className="ourteam-tag">Our Team</div>

      <h2 className="ourteam-heading">
        Meet the Powerhouses at<br /> vConnect iDees
      </h2>

      <p className="ourteam-description">
        We bring together technology and strategy to create smarter sales solutions.
      </p>

      <div className="ourteam-cards-grid">
        <div className="ourteam-row">{row1.map(renderLargeCard)}</div>
        <div className="ourteam-row">{row2.map(renderSmallCard)}</div>
        <div className="ourteam-row">{row3.map(renderSmallCard)}</div>
      </div>

      <h2 className="ourteam-subheading">Love God, Love People, Love What We Do.</h2>
    </section>
  );
}

export default OurTeam;
