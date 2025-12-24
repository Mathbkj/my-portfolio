import { Card } from "./Card";
import { StyledTextReveal } from "@/components/ui/animated/StyledTextReveal";
import { TextReveal } from "./ui/animated/TextReveal";

// src/components/About.tsx
export function About() {
  return (
    <section id="about" className="relative flex flex-col gap-8 px-10 py-20">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold item text-black font-urbanist mb-6">
          <StyledTextReveal
            segments={[
              { text: "About", className: "text-black" },
              { text: " Me", className: "text-orange-400" },
            ]}
            as="h2"
            className="text-3xl font-bold item text-black font-urbanist mb-6"
          />
        </h2>
        <div className="space-y-4 item text-gray-700 font-urbanist">
          {/* <p className="text-lg leading-relaxed">
            I'm a passionate frontend developer with a keen eye for creating
            beautiful, intuitive, and user-friendly web experiences. My journey
            in web development has been driven by a love for turning ideas into
            reality through code.
          </p> */}
          <TextReveal
            text="I'm a passionate frontend developer with a keen eye for creating beautiful, intuitive, and user-friendly web experiences. My journey in web development has been driven by a love for turning ideas into reality through code."
            as="p"
            className="text-lg leading-relaxed"
          />

          {/* <p className="text-lg leading-relaxed">
            I specialize in modern web technologies and frameworks, always
            staying up-to-date with the latest trends and best practices in the
            industry. I believe in writing clean, maintainable code and creating
            interfaces that users love to interact with.
          </p> */}
          <TextReveal
            text="I specialize in modern web technologies and frameworks, always staying up-to-date with the latest trends and best practices in theindustry. I believe in writing clean, maintainable code and creating interfaces that users love to interact with."
            as="p"
            className="text-lg leading-relaxed"
          />
          <p className="text-lg leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge with
            the developer community.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Experience"
            subtitle="Building modern web applications with cutting-edge technologies"
          />
          <Card
            title="Passion"
            subtitle="Creating seamless user experiences that make a difference"
          />
          <Card
            title="Growth"
            subtitle="Continuously learning and evolving with the tech landscape"
          />
        </div>
      </div>
    </section>
  );
}
