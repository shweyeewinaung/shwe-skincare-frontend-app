import { playfair } from "@/app/font";

const MainLeftNav = () => {
  return (
    <div className="flex flex items-center justify-between">
      <h1 className={`${playfair.className} text-4xl`}>ShWe</h1>

      <ul className="pl-9">
        <li>
          <a
            href="#"
            className="hover:text-primary px-3 md:py-2 py-4 text-sm font-medium transition-all duration-300 ease-in-out uppercase font-medium"
          >
            Category
          </a>
          <a
            href="#"
            className="hover:text-primary px-3 md:py-2 py-4 text-sm font-medium transition-all duration-300 ease-in-out uppercase font-medium"
          >
            Brand
          </a>
          <a
            href="#"
            className="hover:text-primary px-3 md:py-2 py-4 text-sm font-medium transition-all duration-300 ease-in-out uppercase font-medium"
          >
            New Product
          </a>
          <a
            href="#"
            className="hover:text-primary px-3 md:py-2 py-4 text-sm font-medium transition-all duration-300 ease-in-out uppercase font-medium"
          >
            Best Seller
          </a>
        </li>
      </ul>
    </div>
  );
};
export default MainLeftNav;
