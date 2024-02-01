import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function Select({
  variant,
  utilities,
  children,
  className,
  ...rest
}) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <select
      className={twMerge(
        'block w-sm text-sm font-medium transition duration-75 border border-gray-800 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none',
        buttonClass,
        utilities,
        className
      )}>
      {children.map((child, index) => (
        <option key={index}>{child}</option>
      ))}
    </select>
  );
}
