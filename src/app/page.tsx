import Image from "next/image";
import ImageSections from "./image-function";
import Logo from "./biology-challenge"
import BiologyChallengelogo from "./biology-challenge";
import Header  from "./header"
export default function Home() {
  return (

<div className="relative h-screen">
<Header/>
      <div className="pt-12">
        <ImageSections />

      </div>
</div>

  );
}
