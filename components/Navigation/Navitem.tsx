import * as React from 'react';

export interface INavitemProps {
    label: string;
    href: string,
    target: string | undefined,
}

export function Navitem (props: INavitemProps) {
  return (
    <a target={props.target ?? "_blank"} href={props.href} className='hover:opacity-50 transition-all hover:text-black cursor-pointer'>
        {props.label}
    </a>
  );
}
