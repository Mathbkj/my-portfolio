import { getMeSource } from "@/lib/utils";

// src/components/ui/Hero.tsx
export function Hero() {
  return (
    <section className="relative flex flex-col gap-10 items-center px-10 py-20">
      <div>
        <h1 className="text-9xl absolute left-0 -translate-x-3 font-bold text-black/30 font-urbanist">
          Hi
          <span className="text-orange-400/30 absolute left-40">There</span>
        </h1>
        <h2 className="text-8xl z-20 absolute left-0 -translate-x-30 bottom-10 font-bold whitespace-nowrap right-10 text-black font-urbanist mt-4">
          I'm{" "}
          <span className="bg-linear-90 from-orange-500 via-orange-400 to-orange-300/50 bg-clip-text text-transparent">
            Matheus
          </span>
        </h2>
      </div>
      <div className="z-1">
        <img
          src={getMeSource()}
          width={120}
          height={75}
          className="w-50 h-75 rounded-full object-cover object-center"
        />
      </div>
    </section>
  );
}
