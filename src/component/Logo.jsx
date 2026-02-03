import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          className=""
          alt="care haven"
          src={"/assets/logo.png"}
          width={50}
          height={80}
        />
        <h2 className="font-bold text-xl linear-text">
          Care Haven
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
