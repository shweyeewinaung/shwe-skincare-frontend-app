import { playfair } from "@/fonts/font";

const MainLeftNav = () => {
  return (
    <div className="flex flex items-center justify-between">
      <div className="p-2 relative before:absolute before:bg-softprimary before:rotate-12 before:rounded-xl before:w-20 before:h-14 before:-top-0.5 before:-left-0.5">
        <h1 className={`${playfair.className} text-3xl rotate-0	`}>Shwe</h1>
      </div>

      <ul className="pl-10 flex">
        <li>
          <a
            href="#"
            className="hover:text-primary px-3 md:py-2 py-4 text-sm font-medium transition-all duration-300 ease-in-out uppercase font-medium"
          >
            Category
          </a>
        </li>
        <li>
          <a
            href="/brands"
            className="hover:text-primary px-3 md:py-2 py-4 text-sm font-medium transition-all duration-300 ease-in-out uppercase font-medium"
          >
            Brand
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-primary px-3 md:py-2 py-4 text-sm font-medium transition-all duration-300 ease-in-out uppercase font-medium"
          >
            New In
          </a>
        </li>
        <li>
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
