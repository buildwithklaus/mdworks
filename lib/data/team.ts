export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Dennis Bello",
    role: "Founder & CEO",
    photo: "/images/team/michael-doyle.jpg",
    bio: "With over 20 years in construction and civil engineering, Michael founded MD Works to bring uncompromising quality and integrity to every build.",
  },
  {
    name: "Erick",
    role: "Chief Operations Officer",
    photo: "/images/team/diana-wanjiru.jpg",
    bio: "Diana oversees day-to-day operations, ensuring every project runs on schedule, on budget, and to the highest safety standards.",
  },
  {
    name: "Simon",
    role: "Head of Civil Engineering",
    photo: "/images/team/samuel-kiptoo.jpg",
    bio: "A licensed civil engineer with a decade of infrastructure experience, Samuel leads structural design and technical compliance.",
  },
  {
    name: "Edwin Wafula",
    role: "Head of Project Management",
    photo: "/images/team/grace-achieng.jpg",
    bio: "Grace coordinates cross-functional teams and client communication, keeping every project transparent from groundbreaking to handover.",
  },
];