"use client"
import * as React from 'react';
import { Navitem } from './Navitem';


const navigation_items = [
  {
    href: "https://github.com/ncxlib",
    label: "github",
  },
  {
    href: "https://app.gitbook.com/o/mJkrJAw1A7YIQ62bXkZs/s/CkXQsQ2SU6e3FdDOLRfr/",
    label: "documentation",
  },
  {
    href: "https://pypi.org/project/ncxlib/",
    label: "pypi",
  }
]

export function Navbar () {
  return (
    <nav className='flex flex-row items-center justify-center gap-8 text-2xl mt-4 font-light'>
      {navigation_items.map(item => <Navitem key={item.label} href={item.href} label={item.label} />)}
    </nav>
  );
}
