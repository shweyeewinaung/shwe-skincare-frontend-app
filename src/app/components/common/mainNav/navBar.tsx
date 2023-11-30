import { playfair } from "@/app/font";
import MainLeftNav from "./leftNav";
import MainRightNav from "./rightNav";

const MainNavBarComponent = () => {
  return (
    <nav className="w-full d-inline-block border-b border-softgray py-3">
      <div className="container flex items-center justify-between">
        <MainLeftNav />
        <MainRightNav />
      </div>
    </nav>
  );
};
export default MainNavBarComponent;
