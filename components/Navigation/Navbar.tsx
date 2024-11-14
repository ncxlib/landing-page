"use client"
import * as React from 'react';
import { Navitem } from './Navitem';


const navigation_items = [
  {
    href: "https://github.com/ncxlib",
    label: "github",
  },
  {
    href: "https://ncxlib.gitbook.io/ncxlib",
    label: "docs",
  },
  {
    href: "/bugsmash",
    label: "bugsmash",
    target:  ""
  },
  {
    href: "https://pypi.org/project/ncxlib/",
    label: "pypi",
  },
  
]

export function Navbar () {
  return (
    <nav className='flex flex-row items-center justify-center gap-8 sm:text-xl lg:text-2xl mt-4 font-light'>
      {navigation_items.map(item => <Navitem key={item.label} target={item.target} href={item.href} label={item.label} />)}
    </nav>
  );
}
