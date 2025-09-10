"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function MainHeader() {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const webPages = [
    {
      title: "About",
      link: "/about"
    },
    {
      title: "Projects",
      link: "/projects"
    },
    {
      title: "Contact",
      link: "/contact"
    }
  ];

  return (
    <>
      {showMenu && 
        <div className='w-screen bg-primary'>
          <nav>
            {webPages.map((webPage, index) => {
              return <Link className='block' href={webPage.link} key={index}>{webPage.title}</Link>
            })}
          </nav>
        </div>
      }

      <header id="main-header">
        <button
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          MENU
        </button>
      </header>
    </>
  );
}