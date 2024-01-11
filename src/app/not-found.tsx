import Image from "next/image";
import Link from "next/link";

export default function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] gap-4">
      <Image  
        src={"/not-found.png"}
        alt="Imaagem not found" 
        width={0}
        height={0}
        sizes="100vw"
        className="w-60"
        priority
      />

      <h1 className="text-white text-4xl font-bold mb-2">Essa página não existe</h1>
      
      <Link href={"/"} className="rounded-md">
        <button className="text-white rounded-md py-2 px-4 border-2 border-[rgb(255,255,255,0.5)]
        hover:bg-[rgb(255,255,255,0.1)] transition-all">
          Voltar ao Ínicio
        </button>
      </Link>
    </div>
  );
}