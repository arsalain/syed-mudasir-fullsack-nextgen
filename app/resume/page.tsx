"use client";

import Header from "@/Components/Header/Header";

export default function ResumePage() {
  return (
    <div className="bg-[#56ACF2]/20  h-full flex flex-col">
      <Header />

      <div className="flex-grow flex flex-col items-center justify-center px-4 relative 2xl:mt-20 mt-10">
        {/* Section Title */}
        <div className="relative w-fit mb-8">
          <h3 className="text-3xl font-bold text-black text-center">My Resume</h3>
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
  <div className="absolute top-[200px] left-0 w-full  overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>
     <div className="bg-white absolute top-[248px] h-[40vh] w-full">

     </div>
    <div style={{ top: `calc(200px + 40vh)` }} className="absolute  left-0 w-full  overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="rgba(114, 192, 255, 0.25)" />
        </svg>
      </div>             
        {/* Background white card behind the PDF */}
        <div className="absolute z-0 top-1/2 -translate-y-1/2 w-full max-w-4xl h-[40vh] bg-white rounded-3xl shadow-lg" />

        {/* PDF Viewer */}
        <div className="relative z-10 w-full max-w-4xl h-[80vh] rounded-xl shadow-xl overflow-hidden">
          <embed
            src="/resume/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            type="application/pdf"
            className="w-full h-full"
          />
        </div>

        {/* Download Button */}
        <a
          href="/resume/resume.pdf"
          download
          className="my-8 inline-flex items-center px-6 py-3 bg-[#56ACF2] text-white font-medium rounded-full hover:bg-transparent border border-[#56ACF2] hover:text-[#56ACF2] transition z-10"
        >
          Download Resume
        </a>
      </div>

      {/* Optional Decorative Wave */}
    
    </div>
  );
}
