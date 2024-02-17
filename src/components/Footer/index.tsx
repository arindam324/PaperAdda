import { Rubik_Dirt } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";

export const Scribble = Rubik_Dirt({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  const items = [
    {
      title: "About Us",
      items: ["About PaperAdda", "Our Team", "Careers", "Blog"],
    },
    {
      title: "Support",
      items: [
        "Help & Support",
        "Partner with Us",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "Connect",
      items: ["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"],
    },
  ];

  return (
    <footer className={cn("w-full mt-6  h-[250px] bg-black")}>
      <div
        className={
          "flex mb-5 border-b border-gray-800 w-[80%] mx-auto items-center px-16 py-4"
        }
      >
        <h2
          className={cn(
            "text-white text-3xl font-semibold",
            Scribble.className
          )}
        >
          PaperAdda
        </h2>
      </div>

      <div className={"grid grid-cols-3 gap-6 mx-auto w-[70%] "}>
        {items.map((item, index) => (
          <FooterItems key={index} title={item.title} items={item.items} />
        ))}
      </div>
    </footer>
  );
};

type FooterItemProps = {
  title: string;
  items: string[];
};

const FooterItems: React.FC<FooterItemProps> = ({ title, items }) => {
  return (
    <div className="">
      <h3 className={"text-white mb-2 text-xl font-semibold"}>{title}</h3>
      <div>
        {items.map((item, index) => (
          <p key={index} className={"text-white mb-2 text-xs"}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
