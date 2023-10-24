export const Timeplan = () => {
  return (
    <div>
      <h2 className="mt-20" data-explanation="Lineup timeline">
        Lineup
      </h2>
      <p>
        Follow the timetable and stage to ensure you don't miss your favourite
        artists
      </p>
      <div
        data-explanation="wrapper div for the section"
        className="rounded-lg relative mt-5 bg-zinc-800 py-4 px-2 text-zinc-200"
      >
        <div
          data-explanation="timeline line"
          className="absolute top-0 left-1/2 w-4 ml-[-8px] h-full rounded-full bg-gradient-to-b from-teal-700 via-cian-900 to-pink-900"
        >
          <div
            data-explanation="red dot in the line"
            className="sticky top-1/2"
          >
            <div data-explanation="actual red dot" className="relative h-4 w-4">
              <div
                data-explanation="pulsing effect"
                className="absolute animate-ping h-4 w-4 rounded-full bg-pink-400 opacity-75"
              ></div>
              <div
                data-explanation="actual pin"
                className="bg-rose-500 rounded-full relative h-4 w-4"
              ></div>
            </div>
          </div>
        </div>
        <div
          data-explanation="Items inside the timeline"
          className="grid grid-cols-2 gap-8"
        >
          <div>
            <h4 className="p-2 bg-zinc-900 rounded-lg my-4">1st of July</h4>
          </div>
          <div data-explanation="Empty"></div>
          <div className="text-right">
            <div className="font-bold">Rapperuntzel</div>
            <div className="text-zinc-400">6pm - NOCCO Stage</div>
          </div>
          <div data-explanation="Empty"></div>
          <div data-explanation="Empty"></div>
          <div className="text-left">
            <div className="font-bold">Fanty Fantastic</div>
            <div className="text-zinc-400">7pm - Main Stage</div>
          </div>
          <div className="text-right">
            <div className="font-bold">Kristian Kristiansen</div>
            <div className="text-zinc-400">9pm - Main Stage</div>
          </div>
          <div className="text-left">
            <div className="font-bold">Trumpet Dude</div>
            <div className="text-zinc-400">9pm - NOCCO Stage</div>
          </div>
          <div className="text-right">
            <div className="font-bold">The Goldyboys</div>
            <div className="text-zinc-400">11pm - Main Stage</div>
          </div>
          <div data-explanation="Empty"></div>
          <div data-explanation="Empty"></div>

          <div>
            <h4 className="p-2 bg-zinc-900 rounded-lg my-4">2nd July</h4>
          </div>
          <div data-explanation="Empty"></div>

          <div className="text-left">
            <div className="font-bold">Sammy Soul</div>
            <div className="text-zinc-400">10pm - Main Stage</div>
          </div>
          <div data-explanation="Empty"></div>
          <div data-explanation="Empty"></div>
          <div className="text-right">
            <div className="font-bold">Ankle Axion</div>
            <div className="text-zinc-400">11pm - NOCCO Stage</div>
          </div>
          <div data-explanation="Empty"></div>
          <div>
            <h4 className="p-2 bg-zinc-900 rounded-lg my-4">3rd of July</h4>
          </div>
          <div data-explanation="Empty"></div>
          <div data-explanation="Empty"></div>
          <div>
            <div className="font-bold">Karnivault</div>
            <div className="text-zinc-400">10pm - NOCCO Stage</div>
          </div>
          <div className="text-right">
            <div className="font-bold">Tina Timmerson</div>
            <div className="text-zinc-400">11pm - Main Stage</div>
          </div>
          <div data-explanation="Empty"></div>
        </div>
      </div>
    </div>
  );
};
