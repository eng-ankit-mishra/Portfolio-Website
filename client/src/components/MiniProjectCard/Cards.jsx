import gameDeckImg from "../../assets/gameDeck.webp";
import movieWatchListImg from "../../assets/movieWatchList.webp";
import assemblyGameImg from "../../assets/assemblyGame.webp";
import gameTenzieImg from "../../assets/gameTenzie.webp";
import {
  assemblyGame,
  tenzieGame,
  deckGame,
  movieWatchlist,
} from "./CardsTechStack";
import { Code2, ExternalLink } from "lucide-react";

const cardItems = [
  {
    id: 1,
    src: assemblyGameImg,
    label: "Assembly EndGame",
    desc: "A Wordle-style game where you guess tech terms to stop Assembly. Built with React and CSS, featuring real-time feedback, keyboard input, and a fun coding twist.",
    quote: "Save your favorite languages before Assembly takes over!",
    sub_title: "Inspired by Wordle, customized for devs.",
    tech: assemblyGame,
    live: "https://end-assembly-game.netlify.app/",
    code: "https://github.com/dev-ankit-mishra/Assembly-EndGame",
  },
  {
    id: 2,
    src: gameTenzieImg,
    label: "Tenzie Game",
    desc: "A fast-paced dice game built with React and Vite. Match all ten dice to the same number by freezing and rolling smartly — a quick challenge of luck and logic.",
    quote: " Master the dice, beat the odds.",
    sub_title: "Inspired by the classic Tenzi game, reimagined for the web.",
    tech: tenzieGame,
    live: "https://gametenzie.netlify.app/",
    code: "https://github.com/dev-ankit-mishra/TenziesGame",
  },
  {
    id: 3,
    src: gameDeckImg,
    label: "Deck Game",
    desc: "A dynamic JavaScript card game where every draw counts—challenge the computer, test your strategy, and keep track of your score in this fast-paced battle of luck and logic.",
    quote: "In the game of chance, every draw is a fresh start.",
    sub_title:
      "Inspired by the timeless thrill of card flips — reimagined for the browser.",
    tech: deckGame,
    live: "https://game-deck.netlify.app/",
    code: "https://github.com/dev-ankit-mishra/DeckGame",
  },
  {
    id: 4,
    src: movieWatchListImg,
    label: "Movie WatchList",
    desc: "Search and save your favorite movies using real-time data from the OMDb API. Browse details, build a personal watchlist, and explore a wide range of films .",
    quote: "Discover stories. Build your list.",
    sub_title: "Search. Save. Watch — your personal movie companion.",
    tech: movieWatchlist,
    live: "https://watchlists-movies.netlify.app/",
    code: "https://github.com/dev-ankit-mishra/Movie-Watchlist",
  },
];

export const cards = cardItems.map((item) => {
  return (
    <div
      key={item.id}
      className={`
    group relative w-[19rem] h-[28rem] lg:w-[23.5rem] lg:h-[29rem]
    rounded-2xl p-5 shadow-md transition-all duration-300
    hover:scale-[1.03] hover:shadow-xl hover:ring-2 hover:ring-indigo-400

    bg-gradient-to-br 
    from-[#fef9f7]  to-[#dbeafe] 
    dark:from-slate-900 dark:to-gray-800 dark:border dark:border-white/10

    text-gray-800 dark:text-white hover:bg-gradient-to-tr hover:from-[#fdf6ff] hover:to-[#dbeafe]

  `}
    >
      {/* Image */}
      <img
        loading="lazy"
        width="1024"
        height="1024"
        src={item.src}
        alt={item.label}
        className="w-full h-28 lg:h-40 object-cover rounded-t-2xl mb-4"
      />

      {/* Title */}
      <h2 className="text-lg lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.label}
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-700 dark:text-gray-300 text-xs lg:text-sm leading-relaxed">
        {item.desc}
      </p>

      {/* Quote / Subtitle */}
      {/* <p className="mt-3 border-l-4 border-blue-400 pl-4 italic text-blue-800 dark:text-blue-300 text-xs lg:text-sm">
        {item.quote}
        <br />
        <span className="not-italic">{item.sub_title}</span>
      </p> */}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {item.tech.map((obj) => (
          <span
            key={obj.id}
            className={`${obj.bgClass} px-3 py-1 rounded-full text-xs lg:text-sm font-medium `}
          >
            {obj.label}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition flex gap-2 items-center"
        >
          <ExternalLink size={16} /> Live
        </a>
        <a
          href={item.code}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-lg border border-indigo-500 text-indigo-600 hover:bg-indigo-100 dark:border-gray-500 dark:text-gray-300 dark:hover:border-white dark:hover:text-white transition flex gap-2 items-center"
        >
          <Code2 size={16} /> Code
        </a>
      </div>
    </div>
  );
});
