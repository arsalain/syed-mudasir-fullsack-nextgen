import Header from '@/Components/Header/Header'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#56ACF2]/20 relative h-full'>
        <Header />
   
     {/* <div className="absolute top-[80vh] left-0 w-full  overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>
     <div className="bg-white absolute top-[83vh] h-[50vh] w-full">

     </div>
    <div style={{ top: `calc(207px + 90vh)` }} className="absolute  left-0 w-full  overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="rgba(114, 192, 255, 0.25)" />
        </svg>
      </div>    */}
      {/* Centered Background Design - Behind Resume */}
<div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full z-0">
  {/* Top White Curve */}
  <div className="overflow-hidden leading-none rotate-180">
    <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
      <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#ffffff" />
    </svg>
  </div>

  {/* White Background Block */}
  <div className="bg-white h-[400px] w-full"></div>

  {/* Bottom Blue Curve */}
  <div className="overflow-hidden leading-none rotate-180 -mt-12">
    <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
      <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="rgba(114, 192, 255, 0.25)" />
    </svg>
  </div>
</div>

<div className=" text-gray-50 px-4 py-12 md:py-16">

  <div className="max-w-6xl mx-auto space-y-14 relative z-20" >

    {/* About Me */}
        {/* <Image
      src="https://res.cloudinary.com/dtat61c7h/image/upload/v1750318431/rental.png"
      alt="Vehicle Rental Banner"
      width={800}
      height={500}
    /> */}
    <div className="text-center flex flex-col justify-center items-center">
           <div className="relative w-fit mb-8">
          <h3 className="text-3xl font-bold text-black text-center">About Me</h3>
          <svg
            className="absolute -bottom-5 left-1/2 -translate-x-1/2"
            width="100"
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
      <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
        I'm a <span className="font-semibold ">Full-Stack Developer</span> with <span className="font-semibold ">3 years of experience</span> building fast, scalable, and SEO-optimized applications using <span className="font-semibold ">Next.js, Node.js, and the MERN stack</span>. I prioritize clean architecture, intuitive UX, and modern performance-first development.
      </p>
    </div>

    {/* Summary */}
    <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
      <h3 className="text-2xl font-bold text-[#56ACF2] text-center mb-4">Summary</h3>
      <ul className="list-disc list-inside space-y-3 text-base">
        <li>Experienced in building high-performance, SEO-optimized web apps with SSR.</li>
        <li>Proficient in RESTful APIs, MongoDB, MySQL, Docker, and CMS development.</li>
        <li>Created large-scale dashboards with role-based access control.</li>
        <li>Comfortable with DevOps basics, and full project lifecycles.</li>
      </ul>
    </div>

    {/* Experience Timeline */}
    <div className="relative">
      <h3 className="text-2xl font-bold text-center text-black mb-10">Experience</h3>
      <div className="border-l-4 border-[#f9fafb] absolute left-1/2 transform -translate-x-1/2  hidden md:block z-20"  style={{ height: "calc(100% - 1rem)" }}></div>

      <div className="space-y-16 relative z-10">
        {/* Backpackers United */}
        <div className="md:flex max-w-5xl mx-auto justify-between">
          <div className="md:w-1/2 md:pr-8">
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-[#56ACF2]">Software Engineer – Backpackers United</h4>
              <p className="text-sm text-gray-500 italic">Jul 2023 – Present | Bangalore</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Built SEO-optimized travel platform (1500+ pages) using Next.js & Tailwind CSS.</li>
                <li>Implemented structured sitemaps, fast routing, and scalable architecture.</li>
                <li>Developed role-based dashboards (Sales, Operations, Admin).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* OptM Media */}
        <div className="md:flex flex-row-reverse max-w-5xl mx-auto justify-between">
          <div className="md:w-1/2 md:pl-8">
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-[#56ACF2]">Software Engineer – OptM Media Solutions</h4>
              <p className="text-sm text-gray-500 italic">Nov 2022 – Jan 2023 | Bangalore</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Developed EV dashboard using MERN Stack with microservice architecture.</li>
                <li>Containerized services with Docker for deployment and scalability.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Proton Expert */}
        <div className="md:flex max-w-5xl mx-auto justify-between">
          <div className="md:w-1/2 md:pr-8">
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-[#56ACF2]">Software Engineer – Proton Expert Systems and Solutions </h4>
              <p className="text-sm text-gray-500 italic">Jan 2022 – Sep 2022 | Bangalore</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Built ERP modules using Oracle Apex based on real client workflows.</li>
                <li>Implemented internal tools using Node.js and MySQL for employee data management.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Education */}
    <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 md:p-10 text-center">
      <h3 className="text-2xl font-bold text-[#56ACF2] mb-4">Education</h3>
      <h4 className="text-lg font-semibold">Bachelor of Engineering (ECE)</h4>
      <p className="text-sm text-gray-600">AMC Engineering College, Bangalore</p>
      <p className="text-sm text-gray-500">2016 – 2020</p>
    </div>
  </div>
</div>
 </div>

  )
}

export default page