import Image from "next/image";

export function HomeImage() {
  return (
    <div className="hidden md:block relative w-64 h-64 lg:w-96 lg:h-96">
      <Image
        alt="ferramentas"
        src={"/images/ferramentas.png"}
        fill
        className="absolute object-cover rounded-full"
      />
    </div>
  );
}
