import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function Card({ variant, utilities, children, className }) {
  const variants = {
    'card-content-style':
      ' bg-Lightgreen  text-base-100  flex  flex-col  gap-y-[5px]  items-start  p-[18px]  w-[100%]',
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <div className={twMerge(buttonClass, utilities, className)}>{children}</div>
  );
}
