import { Card } from "./Card";

// src/components/Services.tsx
export function Services() {
  return (
    <section
      id="services"
      className="relative flex flex-col gap-8 px-10 py-20 bg-gray-50"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl text-right font-bold text-black font-urbanist mb-6">
          My <span className="text-orange-400">Services</span>
        </h2>
        <p className="text-lg text-gray-700 font-urbanist mb-8">
          I offer a range of frontend development services to help bring your
          ideas to life. From concept to deployment, I ensure quality and
          attention to detail in every project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
      </div>
    </section>
  );
}
