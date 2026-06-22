import React from "react";
import "./AboutPage.css";

const teamMembers = [
  {
    name: "Nithin Kamath",
    role: "Founder & CEO",
    image: "/media/image/nithin.jpg",
  },
  {
    name: "Nikhil Kamath",
    role: "Co-Founder",
    image: "/media/image/nikhil.jpg",
  },
  {
    name: "Kailash Nadh",
    role: "CTO",
    image: "/media/image/kailash.jpg",
  },
];

const Team = () => {
  return (
    <section className="team">
      <h2>People</h2>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.name}>
            <img
              src={member.image}
              alt={member.name}
            />

            <h3>{member.name}</h3>

            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;