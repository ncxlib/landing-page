import * as React from 'react';

export interface INavitemProps {
    label: string;
    href: string,
}

export function Navitem (props: INavitemProps) {
  return (
    <a target="_blank" href={props.href} className='hover:opacity-50 transition-all hover:text-black cursor-pointer'>
        {props.label}
    </a>
  );
}
