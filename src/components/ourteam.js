import React, { useState, useEffect } from "react";
import "../css/ourteam.css";
import DhirajImage from "../images/DhirajSir.png";
import HemantImage from "../images/HemantSir.png";
import AshishImage from "../images/AshishSir1.png";
import MuskanImage from "../images/MuskanMam.png";
import AniketImage from "../images/AnkitSir.png";
import ArpanImage from "../images/Arpan.png";
import MehrishiImage from "../images/MehrishiMam.png";

// Existing array for cards (unchanged)
const teamMembers = [
  { name: "Hemant Ghale", designation: "Founder & Director", image: HemantImage, linkedin: "https://www.linkedin.com/in/hemantghale/" },
  { name: "Dhiraj Umate", designation: "Head of Operations, India", image: DhirajImage, linkedin: "https://www.linkedin.com/in/dhiraj-umate-3819b9ab/" },
  { name: "Ashish Yadav", designation: "Heading Team & Client Engagement Head", image: AshishImage, linkedin: "https://www.linkedin.com/in/ashish-yadav-7b9701103/" },
  { name: "Muskan Nigam", designation: "Team Leader & Project Coordinator", image: MuskanImage, linkedin: "https://www.linkedin.com/in/muskan-nigam-717aaa1b3/" },
  { name: "Ankit Kharatmal", designation: "Business Development Manager", image: AniketImage, linkedin: "https://www.linkedin.com/in/ankit-kharatmal-359815140/" },
  { name: "Mehrishi Tiwari", designation: "HR Manager", image: MehrishiImage, linkedin: "https://www.linkedin.com/in/mehrishi-tiwari-a2b191237/"},
  { name: "Arpan Chavan", designation: "UI UX Designer", image: ArpanImage, linkedin: "https://www.linkedin.com/in/arpan-chavan/" },
];

// NEW: Detailed bio content for overlay
const memberDetails = {
  "Hemant Ghale": {
    designation: "Chief Visionary & Founder, vConnect iDees & ZigTex", // overlay-specific designation
    bio: `ALWAYS SHARES INSIGHTS AND ANECDOTES FROM A LIFELONG LEARNING JOURNEY.

          Hemant Ghale began his career at Zensar Technologies by making cold calls and pitching VoIP services in the Canadian market. After that, he started working as an Inside Sales Executive for an IT consulting business, where he marketed software services and products across the US. With the goal of becoming a Leader in the Lead Generation industry, Hemant founded vConnect iDees in 2019. Hemant oversees the company’s Sales, Marketing, and Strategy departments and works with both new and current clients to comprehend their needs and map out how those needs may be met.
          As the Chief Visionary of vConnect iDees, he leads with a deep commitment to creating a future where sales and marketing serves as a catalyst for positive change. His vision extends beyond business success to fostering a community where every individual’s potential is realized. Guided by his faith and dedication to nurturing talent, he inspires his team to innovate, grow, and deliver exceptional value to clients while contributing to a greater mission.`
  },
  "Dhiraj Umate": {
    designation: "Head of Operations, India",
    bio: `Dhiraj started his journey in 2019 as a 1st employee and one of the Founding Team Members of vConnect iDees. By education, he has completed his bachelor’s in Electronics & Telecommunication from Pune University.

          When it comes to Dhiraj he will never let it go. He is passionate about his work and building a team that is passionate about their work. He is skilled in identifying sales opportunities through extensive market research Globally from industries like e-commerce, Education, Finance, Real Estate, Healthcare, Travel, Manufacturing, etc.

          He is known for his strong communication skills which bind the clients to vConnect iDees. From the point of ﬁrst contact to closure, he is the man who handles everything.

          When it comes to creativity and fun he is an all-rounder. He likes to do creative and decorative things like painting and interior design. In sports, he is a master player in cricket and chess.`
  },
  "Ashish Yadav": {
    designation: "Client Engagement Head",
    bio: `With over 15 years of experience in sales and business development, Ashish Yadav is the Founding Member & Client Engagement Head at vConnect IDEES. His expertise in heading the sales team and ensuring delivery success has made vConnect IDEES a trusted B2B partner.

          At vConnect IDEES, Ashish oversees client engagement and sales strategies, driving significant sales closures and delivering pre-qualified leads. His leadership has been instrumental in the company’s growth and operational success.

          Previously, Ashish held key roles in various industries, where he excelled in business development and client relations, gaining a broad skill set that enables him to tackle complex market challenges.

          Outside of work, Ashish enjoys exploring new technologies, community service, and spending time with his family. He is the proud father of a cute baby girl, who brings immense joy to his life.`
  },
  "Muskan Nigam": {
    designation: "Global Campaign Powerhouse & Team Leader",
    bio: `Muskan is a powerhouse who never lets an opportunity slip through her hands. With a Masters in Leadership, she’s a master of effective campaign delivery and strategic planning. Her expertise covers everything from campaign strategies and client engagement to pinpointing potential customers with her keen market research skills.

          What sets Muskan apart is her expertise in the Overseas Market, where she crafts and executes dynamic campaigns that resonate across diverse cultures and regions. Her approach is proactive, and her insights are razor-sharp, consistently driving exceptional results.

          Whether she’s mapping out the next big campaign or engaging with clients, she brings a unique blend of brilliance and levity to the table. Her ability to think several steps ahead ensures that she’s always ready to seize the next big opportunity with a smile. She’s the kind of person who can brainstorm groundbreaking ideas while keeping everyone smiling.`
  },
  "Ankit Kharatmal": {
    designation: "Sales Alchemist & Team Leader",
    bio: `Ankit, he is one of the best artists & our sales pro who knows how to turn every challenge into a victory, with extensive expertise in sales, handling overseas campaigns, and client engagement. Ankit brings a wealth of experience and a dash of humor to our team. He’s the mastermind behind our strategic sales initiatives, the navigator of our international campaigns, and the glue that holds our client relationships together.

          Whether he’s strategizing the next big campaign, cracking the perfect joke in a meeting, taking an initiative in the office events or managing the teams meeting, he brings a unique blend of brilliance and humor to everything he does. Ankit is the brains behind our strategic sales initiatives, the captain steering our international campaigns. He leverages a deep understanding of client needs and market dynamics to develop tailored solutions that deliver tangible results. Ankit is someone who can turn a tough sale into a walk in the park and do it all with a smile and when it comes to team-building exercises, Ankit is known for turning even the most dull activities into memorable events~just don’t ask him to lead the office dance-off.`
  },
  "Mehrishi Tiwari": {
    designation: "HR Executive",
    bio: `Hi, I’m Mehrishi — an HR professional who believes work should feel good, not just get done.

          For me, HR is about more than policies and processes — it’s about people. I’m passionate about building strong, connected teams, finding and hiring great talent, and shaping a culture where individuals feel supported, motivated, and genuinely valued. Over the years, I’ve worked across the entire HR spectrum — from fast-paced recruitment and seamless onboarding to meaningful employee engagement and the kind of everyday problem-solving that keeps a workplace running smoothly.

          I believe the best workplaces are built on trust, empathy, and open communication. That’s why I focus on creating thoughtful employee experiences, fostering real conversations, and ensuring people feel seen, heard, and respected. To me, HR isn’t just a department in an organization — it’s the heart that keeps everything beating.`
  },
  "Arpan Chavan": {
    designation: "UI UX Designer",
    bio: `Arpan Chavan is a creative UIUX Designer passionate about turning ideas into intuitive, engaging, and visually striking digital experiences. With expertise spanning user research, wireframing, prototyping, and high-fidelity design, he ensures every interface is not only beautiful but also effortless to use. His approach blends a deep understanding of user behavior with a commitment to creating designs that feel natural, functional, and memorable — whether for web or mobile platforms.

          Beyond design, Arpan finds inspiration in reading, exploring poetry, and embarking on long bike rides that spark fresh ideas and perspectives. He believes creativity thrives when fueled by curiosity, storytelling, and moments spent outside the screen — all of which shape his unique perspective as a designer.`
  }
};

const radialGradient = "radial-gradient(84.1% 87.15% at 49.83% 49.95%, #FFF 0%, rgba(186,176,232,0.80) 56.73%)";

function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleCardClick = (member) => {
    if (selectedMember && selectedMember.name === member.name) {
      setSelectedMember(null); // close overlay if same member clicked again
    } else {
      setSelectedMember(member); // open overlay for new member
    }
  };


  const closeOverlay = (e) => {
    if (e.target.classList.contains("overlay-backdrop")) {
      setSelectedMember(null);
    }
  };

  const renderCard = (member, size) => (
    <div
      className="team-card"
      key={member.name}
      onClick={() => handleCardClick(member)}
      style={{ cursor: "pointer" }}
    >
      <div
        className={`team-card-image ${size}`}
        style={{
          backgroundImage: `url(${member.image}), ${radialGradient}`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat"
        }}
      />
      <div className="team-card-footer">
        <div className="team-card-text">
          <span className="team-card-name">{member.name}</span>
          <span className="team-card-designation">{member.designation}</span>
        </div>
        <div className="team-card-icon">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.9062 0.930908H2.09375C1.76016 0.930908 1.44023 1.06343 1.20434 1.29931C0.968457 1.5352 0.835938 1.85513 0.835938 2.18872V18.0012C0.835938 18.3348 0.968457 18.6547 1.20434 18.8906C1.44023 19.1265 1.76016 19.259 2.09375 19.259H17.9062C18.2398 19.259 18.5598 19.1265 18.7957 18.8906C19.0315 18.6547 19.1641 18.3348 19.1641 18.0012V2.18872C19.1641 1.85513 19.0315 1.5352 18.7957 1.29931C18.5598 1.06343 18.2398 0.930908 17.9062 0.930908ZM18.0859 18.0012C18.0859 18.0489 18.067 18.0946 18.0333 18.1283C17.9996 18.162 17.9539 18.1809 17.9062 18.1809H2.09375C2.04609 18.1809 2.00039 18.162 1.96669 18.1283C1.93299 18.0946 1.91406 18.0489 1.91406 18.0012V2.18872C1.91406 2.14106 1.93299 2.09536 1.96669 2.06166C2.00039 2.02796 2.04609 2.00903 2.09375 2.00903H17.9062C17.9539 2.00903 17.9996 2.02796 18.0333 2.06166C18.067 2.09536 18.0859 2.14106 18.0859 2.18872V18.0012ZM6.94531 8.65747V14.4075C6.94531 14.5504 6.88852 14.6876 6.78742 14.7886C6.68633 14.8897 6.54922 14.9465 6.40625 14.9465C6.26328 14.9465 6.12617 14.8897 6.02508 14.7886C5.92398 14.6876 5.86719 14.5504 5.86719 14.4075V8.65747C5.86719 8.5145 5.92398 8.37739 6.02508 8.2763C6.12617 8.1752 6.26328 8.11841 6.40625 8.11841C6.54922 8.11841 6.68633 8.1752 6.78742 8.2763C6.88852 8.37739 6.94531 8.5145 6.94531 8.65747ZM14.8516 11.1731V14.4075C14.8516 14.5504 14.7948 14.6876 14.6937 14.7886C14.5926 14.8897 14.4555 14.9465 14.3125 14.9465C14.1695 14.9465 14.0324 14.8897 13.9313 14.7886C13.8302 14.6876 13.7734 14.5504 13.7734 14.4075V11.1731C13.7734 10.6489 13.5652 10.1461 13.1945 9.77545C12.8238 9.40478 12.3211 9.19653 11.7969 9.19653C11.2727 9.19653 10.7699 9.40478 10.3992 9.77545C10.0286 10.1461 9.82031 10.6489 9.82031 11.1731V14.4075C9.82031 14.5504 9.76352 14.6876 9.66242 14.7886C9.56133 14.8897 9.42422 14.9465 9.28125 14.9465C9.13828 14.9465 9.00117 14.8897 8.90008 14.7886C8.79898 14.6876 8.74219 14.5504 8.74219 14.4075V8.65747C8.74219 8.5145 8.79898 8.37739 8.90008 8.2763C9.00117 8.1752 9.13828 8.11841 9.28125 8.11841C9.42422 8.11841 9.56133 8.1752 9.66242 8.2763C9.76352 8.37739 9.82031 8.5145 9.82031 8.65747V8.84704C10.2646 8.47002 10.8074 8.22791 11.3847 8.1493C11.9621 8.07068 12.5499 8.15883 13.0788 8.40335C13.6076 8.64787 14.0556 9.03855 14.3697 9.52931C14.6838 10.0201 14.851 10.5904 14.8516 11.1731ZM7.30469 6.14185C7.30469 6.31954 7.252 6.49324 7.15327 6.64099C7.05455 6.78874 6.91424 6.90389 6.75007 6.97189C6.5859 7.03989 6.40525 7.05769 6.23097 7.02302C6.05669 6.98835 5.89661 6.90279 5.77096 6.77714C5.64531 6.65149 5.55974 6.4914 5.52508 6.31712C5.49041 6.14284 5.5082 5.9622 5.5762 5.79803C5.6442 5.63386 5.75936 5.49354 5.9071 5.39482C6.05485 5.2961 6.22856 5.24341 6.40625 5.24341C6.64453 5.24341 6.87305 5.33806 7.04154 5.50655C7.21003 5.67504 7.30469 5.90357 7.30469 6.14185Z" fill="white"/>
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
        <div className="ourteam-row">{teamMembers.slice(0, 3).map(m => renderCard(m, "large"))}</div>
        <div className="ourteam-row">{teamMembers.slice(3, 6).map(m => renderCard(m, "small"))}</div>
        <div className="ourteam-row single-center">{teamMembers.slice(6).map(m => renderCard(m, "small"))}</div>
      </div>

      <h2 className="ourteam-subheading">Love God, Love People, Love What We Do.</h2>

      {selectedMember && (
  <div className="overlay-backdrop" onClick={closeOverlay}>
    <div
      className="overlay-card"
      onClick={(e) => e.stopPropagation()} // Prevent backdrop clicks closing overlay accidentally
    >
      {/* Close button */}
      <button 
        className="overlay-close-btn" 
        onClick={() => setSelectedMember(null)} 
        aria-label="Close overlay"
        type="button"
      >
        {/* You can use a simple SVG cross or × symbol */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="overlay-inner">
        {/* Left Column */}
        <div className="overlay-left">
          <h1 className="overlay-name">{selectedMember.name}</h1>
          <h3 className="overlay-designation">
            {memberDetails[selectedMember.name]?.designation}
          </h3>
          <h2 className="overlay-designation">
            {memberDetails[selectedMember.name]?.title}
          </h2>
          <p className="overlay-bio">
            {memberDetails[selectedMember.name]?.bio}
          </p>
        </div>

        {/* Right Column */}
        <div className="overlay-right">
          <div
            className="overlay-image"
            style={{
              backgroundImage: `url(${selectedMember.image}), ${radialGradient}`,
              backgroundSize: "cover, cover",
              backgroundPosition: "center, center",
              backgroundRepeat: "no-repeat, no-repeat"
            }}
          />
        </div>
      </div>
    </div>
  </div>
)}



    </section>
  );
}

export default OurTeam;
