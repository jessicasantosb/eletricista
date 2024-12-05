import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2 ">
      <Image
        alt="logo"
        src={"/images/logo.svg"}
        width={40}
        height={25}
        className="[&>*]:text-muted-foreground"
      />
      <h4 className="tracking-wider">VALDIR MARQUES</h4>
    </div>
  );
}
