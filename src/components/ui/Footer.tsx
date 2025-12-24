import { Github, Linkedin } from "lucide-react";

// src/components/ui/Footer.tsx
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white py-10 px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl text-black font-bold font-urbanist mb-4">
              Matheus <span className="text-orange-400">Here</span>
            </h3>
            <p className="text-gray-400 font-urbanist text-sm">
              A passionate frontend developer creating beautiful and functional
              web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-black font-bold font-urbanist mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-orange-400 font-urbanist text-sm transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="text-gray-400 hover:text-orange-400 font-urbanist text-sm transition-colors"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-orange-400 font-urbanist text-sm transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl text-black font-bold font-urbanist mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Mathbkj"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 bg-black hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 bg-black hover:bg-orange-400 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-urbanist text-sm">
              © {currentYear} Matheus. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
