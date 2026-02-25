import { FiPlay, FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Header({ dark, setDark, loading, onReview }) {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-xl font-semibold tracking-tight">
        AI Code Reviewer
      </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {dark ? <FiSun /> : <FiMoon />}
        </button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onReview}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:opacity-90 transition"
        >
          <FiPlay size={14} />
          {loading ? "Analyzing..." : "Review"}
        </motion.button>
      </div>
    </header>
  );
}