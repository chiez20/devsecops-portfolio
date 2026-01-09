import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Ronaldo Choez. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/chiez20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chiez20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/chiez20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}