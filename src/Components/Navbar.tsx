import { useState } from "react";

export const Navbar = () => {
  // Define state to handle the mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="z-10 sticky flex top-0 bg-gradient-to-r from-rose-700 to-pink-500">
      <div className="flex items-center p-2 gap-2">
        <img src="/img/logo-inverted.png" width="45" alt="logo" />
        <div className="text-2xl font-bold">
          Oslo<span className="text-sky-900"> Music Festival</span>
        </div>
      </div>

      <div className="block md:hidden ml-auto pr-4 my-auto cursor-pointer">
        {/* HAMBURGER MENU ICON */}

        <div
          className={`group peer ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div
            className={`relative top-0 h-1 w-8 rounded-full bg-zinc-200 transition-all ${
              isMobileMenuOpen ? "group-open:top-2 group-open:rotate-45" : ""
            }`}
          ></div>
          <div
            className={`bg-zinc-200 rounded-full w-8 h-1 mt-1 ${
              isMobileMenuOpen ? "group-open:opacity-0" : "opacity-100"
            } transition-all`}
          ></div>
          <div
            className={`top-0 bg-zinc-200 rounded-full w-8 h-1 mt-1 ${
              isMobileMenuOpen
                ? "group-open:-rotate-45 group-open:-top-2"
                : "relative"
            } transition-all`}
          ></div>
        </div>

        {/* INSIDE THE HAMBURGER MENU */}
        <div
          className={`absolute bg-gradient-to-r from-rose-700 to-pink-500 w-full left-0 top-[58px] peer-open:block ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10">
            <span>Home</span>
          </div>
          <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 hover-bg-white/10">
            <span>Lineup</span>
          </div>
          <div
            className={`group relative h-full cursor-pointer text-pink-200 hover:text-zinc-200 hover:bg-white/10 ${
              isMobileMenuOpen ? "group-open:block" : ""
            }`}
          >
            <div className="p-4 text-center font-bold">Tickets</div>
            <div
              className={`hidden ${isMobileMenuOpen ? "group-open:block" : ""}`}
            >
              <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover-bg-white/5 transition-colors ease-in-out">
                <span>Single Day Tickets</span>
              </div>
              <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover-bg-white/5 transition-colors ease-in-out">
                <span>2 Day tickets</span>
              </div>
              <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover-bg-white/5 transition-colors ease-in-out">
                <span>Full Pass</span>
              </div>
            </div>
          </div>
          <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 hover-bg-white/10">
            <span>Support</span>
          </div>
        </div>
      </div>

      {/* WIDE SCREEN NAVBAR */}

      <div className="hidden flex-1 md:flex items-center justify-end gap-10 font-bold cursor-pointer">
        <div className="menu-item">
          <span>Home</span>
        </div>
        <div className="menu-item">
          <span>Lineup</span>
        </div>
        <div className="menu-item group">
          <span>Tickets</span>
          <div className="absolute top-full right-0 hidden whitespace-nowrap rounded-b-md bg-pink-500 text-right group-hover:block">
            <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover-bg-white/5 hover:text-zinc-200">
              <span>Single day ticket</span>
            </div>
            <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover-bg-white/5 hover:text-zinc-200">
              <span>2 day ticket</span>
            </div>
            <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover-bg-white/5 hover:text-zinc-200">
              <span>Full Pass</span>
            </div>
          </div>
        </div>
        <div className="menu-item pr-5">
          <span>Support</span>
        </div>
      </div>
    </nav>
  );
};
