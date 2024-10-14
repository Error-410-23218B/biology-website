import Image from "next/image";
import ImageSections from "./image-function";
import Logo from "./biology-challenge"
import BiologyChallengelogo from "./biology-challenge";
export default function Home() {
  return (

<div className="relative h-screen">
      <div className="fixed top-0 right-0 z-10">
        <BiologyChallengelogo />
      </div>
      <div className="pt-12">
        <ImageSections />
      </div>
    </div>

  );
}
