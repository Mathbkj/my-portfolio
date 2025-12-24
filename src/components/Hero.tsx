import { getMeSource } from "@/lib/utils";

// src/components/ui/Hero.tsx
export function Hero() {
    return (
        <section className="relative flex gap-10 items-center px-10 py-20">
            <div className="relative">
                <h1 className="text-4xl font-bold text-black font-urbanist">
                    Matheus <span className="text-orange-400">Here</span>
                </h1>
                <h2 className="text-2xl text-gray-700 font-urbanist mt-4">
                    A passionate frontend developer.
                </h2>
            </div>
            <div className="relative">
                <img src={getMeSource()} width={200} height={200} className="rounded-full object-cover object-center aspect-square" />
            </div>
        </section>
    );
}
