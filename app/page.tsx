"use client";
import Header from "@/Components/Header/Header";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
  "MERN & Next.js Expertise",
  "Tailwind CSS & Responsive Design",
  "Dashboard Development",
  "SEO-Focused Web Architecture",
];

const projects = [
  {
    name: "Easy Tours and Travel",
    description:
      "A scalable vehicle rental platform with real-time booking, dynamic pricing, and a clean UI.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    name: "Backpackers United",
    description:
      "Community-based travel forum with discussion boards, photo stories, and location tagging.",
    tech: ["Nextjs", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    name: "PDF Builder",
    description:
      "Drag-and-drop PDF document generator with export and template functionality.",
    tech: ["Node.js", "React", "HTML2PDF"],
    github: "#",
    live: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#56ACF2]/20 text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 ">
        <div className="container max-w-7xl px-6 mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-20">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Hi, I'm a Full Stack Developer
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              I build modern and responsive web applications using Next.js, React, Node.js, and Tailwind CSS.
            </p>
            <a href="#projects">
              <button className="inline-flex items-center px-6 py-3 bg-[#56ACF2] text-white font-medium rounded-full hover:bg-transparent border border-[#56ACF2] hover:text-[#56ACF2] transition">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </a>
          </div>

          <div className="w-60 h-60 md:w-80 md:h-80 relative mx-auto">
            <img
              src="/home/hero.png"
              alt="Developer at work"
              className="w-full h-full object-cover rounded-full border-4 border-[#56ACF2] shadow-lg"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>




<section id="projects" className="relative py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

<div className="relative w-fit mx-auto  text-center mb-16">
  {/* Custom decorative SVG line */}
    <h3 className="relative text-3xl font-bold tracking-tight text-gray-900 z-10">
    Featured Projects
  </h3>
  <svg
    className="absolute -bottom-6 left-1/2 -translate-x-1/2"
    width="160"
    height="24"
    viewBox="0 0 160 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 12 C40 0, 120 24, 160 12"
      stroke="#56ACF2"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>


</div>










    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, idx) => (
      <div
  key={idx}
  className=" bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
>

          <h4 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#56ACF2] transition">{project.name}</h4>
          <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-[#56ACF2]/10 text-[#56ACF2] text-xs px-3 py-1 rounded-full font-medium"
              >
                {t}
              </span>
            ))}
          </div>

      <div className="flex gap-4 mt-4 ml-2 items-center">
<div className="relative group mt-1">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition"
  >
    <svg
      className="w-4 h-4 mr-1"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12A11.5 11.5 0 0 0 8 23.44c.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.6-4.04-1.6a3.2 3.2 0 0 0-1.34-1.75c-1.1-.76.08-.74.08-.74a2.54 2.54 0 0 1 1.86 1.25c1.08 1.85 2.84 1.32 3.53 1 .1-.78.42-1.32.77-1.62-2.67-.3-5.47-1.34-5.47-5.93a4.63 4.63 0 0 1 1.22-3.22 4.3 4.3 0 0 1 .12-3.17s1-.32 3.3 1.23a11.47 11.47 0 0 1 6 0C17 4.93 18 5.25 18 5.25a4.3 4.3 0 0 1 .12 3.17 4.63 4.63 0 0 1 1.22 3.22c0 4.6-2.8 5.63-5.47 5.93.43.37.82 1.1.82 2.22v3.29c0 .3.22.67.83.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
    GitHub
  </a>

  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-20 hidden group-hover:block bg-[#56ACF2]/50 text-gray-900 text-xs px-4 py-2 rounded-md shadow-md whitespace-nowrap">
    Repos are private.Need than<br /> Mail at: <span >arsalain12@gmail.com</span>
  </div>
</div>

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-sm text-gray-600 hover:text-[#16a34a] transition"
  >
    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h7v2H6.41l9.3 9.29-1.42 1.42L5 6.41V11H3V4a1 1 0 0 1 1-1Z" />
    </svg>
    Live Site
  </a>
</div>

        </div>
      ))}
    </div>
  </div>

  {/* Bottom SVG wave */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12 rotate-180">
      <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="rgba(144, 205, 254, 0.25)" />
    </svg>
  </div>
</section>



     
      <section id="projects" className="relative py-24  ">
   <div className="max-w-6xl mx-auto px-6 ">
    <div className="relative">
      <h3 className="text-3xl font-bold text-center mb-16 text-[#56ACF2] tracking-tight z-10">Skills & Tools</h3>
        <svg
    className="absolute -bottom-5 left-1/2 -translate-x-1/2"
    width="120"
    height="24"
    viewBox="0 0 160 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 12 C40 0, 120 24, 160 12"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
    </div>
      
    <div className="grid md:grid-cols-3 gap-x-10 gap-y-16  pt-4">
  
  <div>
    <h4 className="text-lg font-semibold text-gray-900 mb-4">Frontend Development</h4>
    <ul className="space-y-3 text-gray-700 text-sm">
          {["Next.js", "React.js", "Tailwind CSS", "JavaScript", "TypeScript"].map((skill, idx) => (
        <li key={idx} className="flex items-center space-x-2 border-b pb-2">
          <CheckCircle className="w-4 h-4 text-[#56ACF2]" />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Backend */}
  <div>
    <h4 className="text-lg font-semibold text-gray-900 mb-4">Backend Development</h4>
    <ul className="space-y-3 text-gray-700 text-sm">
   {["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"].map((skill, idx) => (
        <li key={idx} className="flex items-center space-x-2 border-b pb-2">
          <CheckCircle className="w-4 h-4 text-[#56ACF2]" />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Tools & DevOps */}
  <div>
    <h4 className="text-lg font-semibold text-gray-900 mb-4">Tools </h4>
    <ul className="space-y-3 text-gray-700 text-sm">
       {["Git & GitHub", "Figma", "SEO Optimization", "VSCode", "Postman"].map((skill, idx) => (
        <li key={idx} className="flex items-center space-x-2 border-b pb-2">
          <CheckCircle className="w-4 h-4 text-[#56ACF2]" />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
</div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
               <div className="relative w-fit">
            <h3 className="text-3xl font-bold text-black  mb-6">About Me</h3>
              <svg
    className="absolute -bottom-4 left-1/2 -translate-x-1/2"
    width="80"
    height="24"
    viewBox="0 0 160 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 12 C40 0, 120 24, 160 12"
      stroke="#56ACF2"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              I'm a full-stack developer with 3+ years of experience building scalable web apps using the MERN stack and Next.js.
              I’m passionate about performance, clean UI, and solving complex problems with simple solutions.
            </p>
          </div>
          <div className="bg-gray-50 border rounded-xl p-6 shadow-sm">
            <ul className="space-y-4 text-gray-700 text-base">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#56ACF2]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-[#56ACF2]">Let's Connect</h3>
          <p className="text-gray-600 mb-6">
            I'm currently open to freelance or full-time opportunities. Let's chat!
          </p>
          <a href="mailto:arsalain12@gmail.com">
            <button className="inline-flex items-center px-6 py-3 bg-[#56ACF2] text-white font-medium rounded-full hover:bg-blue-700 transition">
              Email Me
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t text-center text-sm text-gray-500 bg-white">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </main>
  );
}
