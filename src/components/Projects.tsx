import { getGithubRepos, getProjectsPic, type Repository } from "@/lib/utils";
import { useEffect, useState } from "react";

interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

// src/components/Projects.tsx
export function Projects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  // List of repository names you want to showcase
  const repoNames = ["github-blog", "flip-the-coin", "image-upload"];

  useEffect(() => {
    async function populateProjects() {
      try {
        const repoPromises = repoNames.map((repoName) =>
          getGithubRepos(repoName)
        );
        const repos = await Promise.all(repoPromises);

        const mappedProjects: IProject[] = repos.map((repo, key) => ({
          id: repo.id,
          title: repo.name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          description: repo.description || "No description available",
          image:
            key === 0
              ? getProjectsPic()[0]
              : key === 1
              ? getProjectsPic()[1]
              : key === 2
              ? getProjectsPic()[2]
              : "",
          technologies: repo.topics || [],
          githubUrl: repo.html_url,
          liveUrl:
            key === 0
              ? "https://cerulean-trifle-8cc8a1.netlify.app/"
              : key === 1
              ? "https://mathbkj.github.io/flip-the-coin/"
              : key === 2
              ? "https://image-upload-front.onrender.com/"
              : repo.html_url,
        }));

        setProjects(mappedProjects);
      } catch (error) {
        console.error("Failed to fetch GitHub repositories:", error);
      } finally {
        setLoading(false);
      }
    }
    populateProjects();
  }, []);

  if (loading) {
    return (
      <section
        id="projects"
        className="relative flex flex-col gap-8 px-10 py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-black font-urbanist mb-6">
            My <span className="text-orange-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-700 font-urbanist mb-8">
            Loading projects...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative flex flex-col gap-8 px-10 py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-black font-urbanist mb-6">
          My <span className="text-orange-400">Projects</span>
        </h2>
        <p className="text-lg text-gray-700 font-urbanist mb-8">
          Here are some of my recent projects that showcase my skills and
          experience in web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black font-urbanist mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 font-urbanist mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-urbanist"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-orange-400 transition-colors font-urbanist text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-orange-400 transition-colors font-urbanist text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
