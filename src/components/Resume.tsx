import { Download } from "lucide-react";

// src/components/Resume.tsx
export function Resume() {
  return (
    <section id="resume" className="relative flex flex-col gap-8 px-10 py-20">
      <div className="max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black font-urbanist">
            My <span className="text-orange-400">Resume</span>
          </h2>
          <a
            href="/resume.pdf"
            download="Matheus_Resume.pdf"
            className="bg-orange-400 hover:bg-orange-500 text-white font-urbanist font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
          >
            <Download />
            Download Resume
          </a>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black font-urbanist mb-6 flex items-center gap-2">
            <span className="text-orange-400">🎓</span> Education
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-orange-400 pl-6 py-2">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-black font-urbanist">
                  Bachelor's in Information Systems
                </h4>
                <span className="text-sm text-gray-500 font-urbanist">
                  2023 - Present
                </span>
              </div>
              <p className="text-orange-400 font-urbanist mb-2">
                PUC Minas - Pontifical Catholic University of Minas Gerais
              </p>
              <p className="text-gray-700 font-urbanist">
                Focused on software engineering, web development, and data
                structures
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-black font-urbanist mb-6 flex items-center gap-2">
            <span className="text-orange-400">⚡</span> Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-black font-urbanist mb-3">
                Frontend Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-urbanist">
                  React
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-urbanist">
                  TypeScript
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-urbanist">
                  JavaScript
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-urbanist">
                  HTML/CSS
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-urbanist">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-black font-urbanist mb-3">
                Tools & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-urbanist">
                  Git
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-urbanist">
                  Next.js
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-urbanist">
                  Vite
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-urbanist">
                  REST APIs
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-urbanist">
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
