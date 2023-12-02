import MainLeftNav from "./leftNav";
import MainRightNav from "./rightNav";
import SubNav from "./subNav";

const MainNavBarComponent = () => {
  return (
    <nav className="inline-block border-b border-zinc-100 py-3 fixed top-0 left-0 right-0 bg-white shadow-md z-10	">
      <div className="container flex items-center justify-between">
        <MainLeftNav />
        <MainRightNav />
      </div>
      <SubNav />
    </nav>
  );
};
export default MainNavBarComponent;
