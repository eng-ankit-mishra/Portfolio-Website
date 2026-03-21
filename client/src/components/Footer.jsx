import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="w-full h-10 px-4 gap-6 tracking-wide flex items-center justify-between
      bg-white/90 dark:bg-neutral-950/90 
      text-gray-600 dark:text-neutral-400 
      border-t border-gray-200 dark:border-white/10 z-50"
    >
      <p className="text-xs md:text-sm">© 2025 Ankit Mishra Development.</p>

      <a
        href="mailto:developer.ankitmishra@gmail.com"
        className="text-sm hidden md:block hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      >
        contact@ankitmishra.pro
      </a>

      <div className="flex justify-center items-center gap-4">
        <a
          href="https://github.com/dev-ankit-mishra"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub
            size={24}
            className="hover:text-gray-800 dark:hover:text-gray-600 cursor-pointer transition-colors"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/ankit-mishra-44a179225/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin
            size={24}
            className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition-colors"
          />
        </a>
      </div>
    </footer>
  );
}
