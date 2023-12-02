import DashboardFeature from "./components/dashboard/dashboardFeature";
import SliderBanner from "./components/dashboard/sliderBanner";

const Mainpage = () => {
  return (
    <main className="">
      <SliderBanner />
      <div className="container">
        <DashboardFeature type="new" />
        <DashboardFeature type="luxury" />
      </div>
    </main>
  );
};
export default Mainpage;
