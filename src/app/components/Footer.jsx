import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t-[#33353F] border-t border-transparent text-white">
      <div className="flex items-center justify-center gap-1 h-fit">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
        </svg>
        <p className="text-muted-foreground">get in touch</p>
        <div className="relative flex items-center justify-center w-5 h-5 mx-1">
          <div className="absolute w-1/2 bg-white rounded-full h-1/2 animate-ping" />
          <div className="absolute w-1/2 bg-white rounded-full h-1/2" />
        </div>
        <Link
          target="_blank"
          className="font-bold text-white underline-offset-2 hover:underline"
          href="mailto:reynalldymarchell03@gmail.com"
        >
          reynalldymarchell03@gmail.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
