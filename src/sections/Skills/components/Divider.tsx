import { AntonFont } from "@/Fonts";
import { Languages } from "@/Utils/Languages";

export function SkillsDivider() {
  const stack = [
    ...Languages.primary, 
    ...Languages.secondary
  ].map(item => item.name);

  return (
    <section className="h-40 bg-gradient-to-b from-black-1 to-black-4 overflow-hidden 
      transition-all sm:h-28"
    >
      <div className="rotate-3">
        <div 
          className={`text-white text-opacity-5 text-4xl whitespace-nowrap mt-12 transition-all 
          ${AntonFont.className} w-max sm:text-3xl`}
        >
          {stack.map(item => <span key={item}>{item} • </span>)}
        </div>
      </div>
    </section>
  );
}