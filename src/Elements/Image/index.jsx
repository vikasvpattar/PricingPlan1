import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function Image({
  variant,
  utilities,
  src,
  children,
  className,
}) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <img
      src={src}
      className={twMerge(
        'h-auto max-w-full',
        buttonClass,
        utilities,
        className
      )}
      alt="..."
    />
  );
}
