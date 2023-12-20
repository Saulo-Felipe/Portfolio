import { AntonFont } from "@/Fonts";

export function Divider() {
  const stack = [
    "JavaScript", "TypeScript", "NodeJs", "PrismaJs", 
    "NextJs", "NestJs", "PostgreSQL", "ReactJs", "Docker", 
    "Git", "Tailwind", "Sass", "HTML", "CSS"
  ];

  return (
    <section className="h-40 bg-gradient-to-b from-black-1 to-black-4 overflow-hidden">
      <div className="text-white text-opacity-20 rotate-3 whitespace-nowrap mt-12">
        <span className="absolute w-[10%] h-full bg-gradient-to-r from-black-1 to-transparent" />
        <span className="absolute w-[10%] h-full bg-gradient-to-r from-transparent to-black-4 right-0" />

        {stack.map(item => 
          <span key={item} className={"text-4xl " + AntonFont.className}>{item} • </span>
        )}
      </div>
    </section>
  );
}