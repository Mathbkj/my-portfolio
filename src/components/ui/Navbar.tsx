import Logo from "@/assets/logo.svg?react";

interface Link {
    name: string;
    href: string;
}

export function Navbar() {
    const links: Array<Link> = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Service", href: "#service" },
        { name: "Resume", href: "#resume" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const midPoint = Math.ceil(links.length / 2);
    const firstHalf = links.slice(0, midPoint);
    const secondHalf = links.slice(midPoint);

    return (
        <nav className="w-full px-10 py-5">
            <div className="backdrop-blur-[7.5px] bg-[#171717] border border-solid border-white flex items-center justify-between px-2.5 py-0 rounded-[50px] h-[86px]">
                {/* First half of links */}
                {firstHalf.map((link, index) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`flex items-center justify-center px-10 py-5 rounded-[60px] cursor-pointer transition-colors ${index === 0
                            ? 'bg-orange-400'
                            : 'hover:bg-white/10'
                            }`}
                    >
                        <p className={`text-md font-urbanist text-white tracking-[-0.3px] ${index === 0 ? 'font-bold' : 'font-normal'
                            }`}>
                            {link.name}
                        </p>
                    </a>
                ))}

                {/* Logo in center */}

                <Logo />


                {/* Second half of links */}
                {secondHalf.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="flex items-center justify-center px-10 py-5 rounded-[60px] cursor-pointer hover:bg-white/10 transition-colors"
                    >
                        <p className="text-md font-urbanist text-white tracking-[-0.3px] font-normal">
                            {link.name}
                        </p>
                    </a>
                ))}
            </div>
        </nav>
    );
}