export const Headliners = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-20 text-zinc-900 dark:text-zinc-200">
      <h2>Headliners</h2>
      <p>
        Experience the sonic delight from these made-up artists across 7 days
        that music fans are calling "one of the many gigs that will happen in
        Oslo this year"
      </p>
      {/* The div below includes the carousel, the direction arrows and the
      description of the artists and times. The main div will have 3 divs: left arrow,
      carousel itself and right arrow */}
      <div className="flex">
        <div
          className="text-5xl flex justify-center items-center cursor-pointer relative -top-8 p-2"
          data-explanation="left arrow"
          id="previous"
        >
          <i className="fas fa-angle-left"></i>
        </div>
        <div
          data-explanation="carousel"
          id="carousel"
          className="scroll-smooth flex-1 mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto"
        >
          <div className="min-w-[80%] md:min-w-[40%]">
            <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('img/band1.jpg')]"></div>
            <h5 className="mt-2">Kristian Kristiansen</h5>
            <h6>1st of July, 9pm - Main Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('img/band2.jpg')]"></div>
            <h5 className="mt-2">Trumpet Dude</h5>
            <h6>1st of July, 9pm - NOCCO Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 min-w-[80%] md:min-w-[40%] bg-[url('/img/band3.jpg')]"></div>
            <h5 className="mt-2">The Goldyboys</h5>
            <h6>1st of July, 11pm - Main Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('/img/band4.jpg')]"></div>
            <h5 className="mt-2">Ankle Axion</h5>
            <h6>2st of July, 11pm - NOCCO Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('/img/band5.jpg')]"></div>
            <h5 className="mt-2">Karnivault</h5>
            <h6>3st of July, 10pm - NOCCO Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('/img/band6.jpg')]"></div>
            <h5 className="mt-2">Sammy Soul</h5>
            <h6>2st of July, 10pm - Main Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('/img/band7.jpg')]"></div>
            <h5 className="mt-2">Tina Timmersen</h5>
            <h6>3st of July, 11pm - Main Stage</h6>
          </div>
        </div>

        <div
          className="text-5xl flex justify-center items-center cursor-pointer relative -top-8 p-2"
          id="next"
          data-explanation="right arrow"
        >
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};
