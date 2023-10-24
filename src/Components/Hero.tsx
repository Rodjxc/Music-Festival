export const Hero = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-fixed flex flex-col items-center justify-center min-h-[400px]"
        style={{
          backgroundImage: 'url("/img/hero.jpg")',
          height: "calc(100vh - 200px)",
        }}
      >
        {/* We're adding our image as a style. We could embed it directly as a className,
        but since we might work with things like react, this makes more sense in this case. bg-fixed will make the
        image static when you scroll down the page */}
        <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md">
          <div className="relative flex flex-col items-center justify-center">
            <img src="./assets/images/logo.png" width="175" alt="" />

            {/* Animation of soundwaves. We created another pink circle to cover the existing one, and
            we'll put the animation on top */}
            <div className="flex items-center justify-center mt-[-70px] mb-5">
              {/* Above, the container including the whole thing*/}
              <div className="bg-pink-500 w-14 h-14 rounded-full flex items-center justify-center gap-1">
                {/* Above, the small pink circle that will cover */}
                <div className="h-2 w-1 bg-pink-300 animate-wavey"></div>
                <div className="w-1 h-3 bg-pink-200 rounded-full animate-wavey animation-delay-200"></div>
                <div className="w-1 h-4 bg-pink-100 rounded-full animate-wavey animation-delay-600"></div>
                <div className="w-1 h-3 bg-pink-200 rounded-full animate-wavey animation-delay-[150]"></div>
                <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-300"></div>
                {/* each of the 5 divs above represent on of the 5 bars that will move */}
              </div>
            </div>
          </div>
          <div className="text-5xl font-bold flex flex-col">
            Oslo <span className="text-sky-900">Music Festival</span>
          </div>
        </div>
        <div className="font-bold mt-3 text-sm">
          Keep me updated with news and promotions
        </div>
        <form className="mt-3 flex gap-2">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="rounded-sm border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 "
          />

          <button
            type="submit"
            className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
