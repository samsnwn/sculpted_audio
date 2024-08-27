import Image from "next/image";
import Icon from "../../public/icons/1-RGB/Light/SculptedAudio-Icon-Light-RGB.png";

const Footer = () => {
  return (
    <footer className="flex justify-center w-full p-10">
      <Image src={Icon} alt="icon" width={100} height={100}/>
    </footer>
  )
}

export default Footer