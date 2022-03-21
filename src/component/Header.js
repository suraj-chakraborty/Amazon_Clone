import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header>
      {/* top navigation */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit={"contain"}
            className="cursor-pointer"
          />
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500 ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-5 mx-6 whitespace-nowrap cursor-pointer">
          <div>
            <p>Hello world</p>
            <p>Account & List</p>
          </div>
          <div>
            <p>Returns & Orders</p>
          </div>
          <div>
            <ShoppingCartIcon />
            <p>Cart</p>
          </div>
        </div>
      </div>
      {/* bottom navigation */}
      <div></div>
    </header>
  );
}

export default Header;
