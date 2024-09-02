import Image from "next/image";
import Icon from "../../public/icons/1-RGB/Light/SculptedAudio-Icon-Light-RGB.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-5 justify-center w-full p-10">
      <Image src={Icon} alt="icon" width={75} height={75}/>
      <p className="text-white"> Sculpted Audio© {currentYear}. All rights reserved.</p>
    </footer>
  )
}

export default Footer