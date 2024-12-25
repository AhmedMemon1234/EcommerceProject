import VipSection3 from "./ColumnCards/page";
import HeroSection from "./HeroSection/page";
import VipSection from "./TopProductDown/page";
import VipSection2 from "./TopProductDown2/page";
import TopProducts from "./TopProducts/page";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <TopProducts/>
    <VipSection2/>
    <VipSection/>
    <VipSection3/>
    </div>
  );
}
