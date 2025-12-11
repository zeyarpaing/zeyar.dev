import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navItems } from 'data/app-data';
import { useRouter } from 'next/router';
import Logo from '@/svgs/Logo';

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const router = useRouter();

  return (
    <nav
      className={`${
        isExpanded ? 'bg-darkblue/50 backdrop-blur-md' : ''
      } m-layout fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 rounded-b-xl rounded-t-none !px-0 py-3 pt-6 text-white md:relative md:left-0 md:translate-x-0 md:rounded-t-xl md:bg-transparent md:pt-10 md:backdrop-blur-0`}
    >
      <div className="m-layout relative flex flex-wrap items-center justify-center">
        <Link
          aria-label="Go to home page"
          aria-current={router.pathname === '/' ? 'page' : undefined}
          href="/"
          className="flex items-center"
        >
          <Logo />
        </Link>
        {/* <button
          className="ml-3 inline-flex items-center p-2 text-sm text-gray-500 md:hidden"
          onClick={() => {
            document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
            setExpanded(!isExpanded);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            width="27"
            height="16"
            viewBox="0 0 27 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`fill-primary-light transition-transform duration-75 ease-linear ${
                isExpanded ? '-translate-y-3 translate-x-[14px] rotate-45' : 'rotate-0'
              }`}
              d="M0.560976 14H23L22.439 16H0L0.560976 14Z"
            />
            <path
              className={`${
                isExpanded ? 'opacity-0' : 'opacity-100'
              } fill-primary-light transition-opacity duration-75`}
              d="M7.43902 7H25L24.561 9H7L7.43902 7Z"
            />
            <path
              className={`fill-primary-light transition-transform duration-75 ease-linear ${
                isExpanded ? 'translate-y-[18px] -rotate-45' : 'rotate-0'
              } `}
              d="M5.53659 0H27L26.4634 2H5L5.53659 0Z"
            />
          </svg>
        </button>
        <section
          className={`${
            isExpanded ? 'visible h-screen opacity-100' : 'invisible h-0 opacity-0'
          } grid w-full place-items-center transition-opacity duration-300 md:visible md:block md:h-auto md:w-auto md:translate-x-0 md:opacity-100`}
        >
          <ul className="mt-4 flex w-full flex-col gap-y-5 text-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  className="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent"
                  aria-current={router.pathname === item.url ? 'page' : undefined}
                  href={item.url}
                >
                  {item.name} {item.beta && <code className="bg-blue-500">beta</code>}
                </Link>
              </li>
            ))}
          </ul>
        </section> */}
      </div>

      {/*<div className="absolute inset-x-0 top-full h-px transition bg-white "></div>*/}
    </nav>
  );
};

export default Navbar;
