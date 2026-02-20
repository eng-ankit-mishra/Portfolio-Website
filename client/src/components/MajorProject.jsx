import Cards from "./MajorProjectCard/Cards";

export default function Project() {
  return (
    <section
      id="Projects"
      className="w-full py-6 
                 bg-white dark:bg-gradient-to-br 
                 dark:from-[#1e1b4b] dark:via-[#312e81] dark:to-[#1e1b4b]"
    >
      <header>
        <h1
          className="text-2xl md:text-3xl text-center font-bold pt-4 pb-2 
                       text-gray-900 dark:text-neutral-100"
        >
          Major Project
        </h1>
        <div
          className="w-10 h-1 bg-blue-600 hover:w-24 transition-all duration-200 
                        rounded-2xl mx-auto mt-2 mb-4"
        />
      </header>

      <main
        className="w-full h-full flex flex-col gap-10 
                      [@media(min-width:1400px)]:flex-row 
                      justify-evenly px-4 pb-10 items-center py-4"
      >
        <Cards />
      </main>
    </section>
  );
}
