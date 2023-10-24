export const Navbar = () => {
  return (
    <div>
      <nav className="z-10 sticky flex top-0 bg-gradient-to-r from-rose-700 to-pink-500">
        <div className="flex items-center p-2 gap-2">
          <img src="/img/logo-inverted.png" width="45" alt="logo" />
          <div className="text-2xl font-bold">
            Oslo<span className="text-sky-900"> Music Festival</span>
          </div>
        </div>
        {/*The above div will take the logo and the logo text*/}
        {/* ######### HAMBURGUER MENU ICON #######*/}
        <div className="block md:hidden ml-auto pr-4 my-auto cursor-pointer">
          <div id="mobile-menu-button" className="group peer">
            {/*to make an animation with the 3 lines to an X, we add the className GROUP (to group all 3 lines
            and an ID of mobile-menu-button with a JS listener that will trigger
            a className when you click. The top line will rotate 45d, the middle one will disspaear
            and the bottom one will rotate the oposite direction 45d*/}
            <div className="relative top-0 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:top-2 group-open:rotate-45"></div>
            {/* for the effect of the X we'll need a listener that will trigger it. Also, we're
            grouping the inside of the hamburguer menu into a group, and that group will have a
            VARIANT (the -open status) that we'll define with a plugin*/}

            <div className="bg-zinc-200 rounded-full w-8 h-1 mt-1 group-open:opacity-0 opacity-100 transition-all"></div>
            <div className="top-0 bg-zinc-200 rounded-full w-8 h-1 mt-1 group-open:-rotate-45 transition-all group-open:-top-2 relative"></div>
          </div>

          {/* ######### INSIDE THE HAMBURGER MENU #######*/}

          <div className="absolute bg-gradient-to-r from-rose-700 to-pink-500 w-full left-0 top-[58px] peer-open:block hidden">
            <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10">
              <span>Home</span>
            </div>
            <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10">
              <span>Lineup</span>
            </div>

            <div
              id="tickets-menu-item"
              className="group relative h-full cursor-pointer text-pink-200 hover:text-zinc-200 hover:bg-white/10"
            >
              <div className="p-4 text-center font-bold">Tickets</div>

              <div className="hidden group-open:block">
                <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                  <span>Single Day Tickets</span>
                </div>
                <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                  <span>2 Day tickets</span>
                </div>
                <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                  <span>Full Pass</span>
                </div>
              </div>
            </div>
            <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10">
              <span>Support</span>
            </div>
          </div>
        </div>
        {/* Above is the mobile navigation. It will do the opposite as the above md sreens, it'll be block (so visible)
        but on screens
        medium and above, it'll hide by default with the 'hidden' className .The hamburguer menu is basically 3 empty
        divs
        with a white
        background with a bit of margin top on two of them*/}

        {/* ##### WIDE SCREEN NAVBAR #####*/}

        <div className="hidden flex-1 md:flex items-center justify-end">
          {/* For the hamburguer menu, we put it in hidden by default. md:flex means that
          on medium and above screens (so tablets and above) it will do a flex, so it will
          appear. If the scree is less than md, it'll hide*/}
          <div className="menu-item">
            <span>Home</span>
          </div>
          <div className="menu-item">
            <span>Lineup</span>
          </div>
          <div className="menu-item group">
            <span>Tickets</span>
            <div className="absolute top-full right-0 hidden whitespace-nowrap rounded-b-md bg-pink-500 text-right group-hover:block">
              <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
                <span>Single day ticket</span>
              </div>
              <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
                <span>2 day ticket</span>
              </div>
              <div className="cursor-pointer p-4 font-bold text-pink-200 transition-colors ease-in-out hover:bg-white/5 hover:text-zinc-200">
                <span>Full Pass</span>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <span>Support</span>
          </div>
        </div>
      </nav>
      {/* The above div will take the rest of the navbar. For it to take the
      whole space between the end and the logo, we select flex-1. The className menu-item
      is a component className created by us*/}
    </div>
  );
};
