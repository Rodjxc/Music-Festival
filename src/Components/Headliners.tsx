import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

export const Headliners = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-20 bg-zinc-200 dark:bg-zinc-900 text-zinc-200 text-center">
      <h2 className="mt-2 mb-10 text-3xl font-bold tracking-tight text-zinc-200 sm:text-4xl">
        Headliners
      </h2>
      <p className="mx-6 mb-6">
        Experience the sonic delight from these made-up artists across 7 days
        that music fans are calling "one of the many gigs that will happen in
        Oslo this year.
      </p>

      <div className="flex">
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          emulateTouch={true} // Enable touch emulation
          infiniteLoop={true} // Enable infinite loop for the carousel
          centerMode={true} // Enable center mode
          centerSlidePercentage={73} // Adjust the percentage for center mode
          autoPlay={2500}
        >
          <div className="carousel-item mx-4">
            <div className="min-w-[80%] md:min-w-[40%]">
              <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('img/band1.jpg')]"></div>
              <h5 className="mt-2">Kristian Kristiansen</h5>
              <h6>1st of July, 9pm - Main Stage</h6>
            </div>
          </div>

          <div className="carousel-item mx-4">
            <div className="min-w-[80%] md:min-w-[40%]">
              <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('img/band2.jpg')]"></div>
              <h5 className="mt-2">Trumpet Dude</h5>
              <h6>1st of July, 9pm - NOCCO Stage</h6>
            </div>
          </div>

          <div className="carousel-item mx-4">
            <div className="min-w-[80%] md:min-w-[40%]">
              <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 min-w-[80%] md:min-w-[40%] bg-[url('/img/band3.jpg')]"></div>
              <h5 className="mt-2">The Goldyboys</h5>
              <h6>1st of July, 11pm - Main Stage</h6>
            </div>
          </div>

          <div className="carousel-item mx-4">
            <div className="min-w-[80%] md:min-w-[40%]">
              <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('/img/band4.jpg')]"></div>
              <h5 className="mt-2">Ankle Axion</h5>
              <h6>2st of July, 11pm - NOCCO Stage</h6>
            </div>
          </div>

          <div className="carousel-item mx-4">
            <div className="min-w-[80%] md:min-w-[40%]">
              <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('/img/band5.jpg')]"></div>
              <h5 className="mt-2">Karnivault</h5>
              <h6>3st of July, 10pm - NOCCO Stage</h6>
            </div>
          </div>

          <div className="carousel-item mx-4">
            <div className="min-w-[80%] md:min-w-[40%]">
              <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('/img/band6.jpg')]"></div>
              <h5 className="mt-2">Sammy Soul</h5>
              <h6>2st of July, 10pm - Main Stage</h6>
            </div>
          </div>

          <div className="carousel-item mx-4">
            <div className="min-w-[80%] md:min-w-[40%]">
              <div className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 bg-[url('/img/band7.jpg')]"></div>
              <h5 className="mt-2">Tina Timmersen</h5>
              <h6>3st of July, 11pm - Main Stage</h6>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
