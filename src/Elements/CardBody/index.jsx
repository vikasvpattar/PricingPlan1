import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function CardBody({ variant, utilities, children, className }) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <div
      className={twMerge(
        'text-gray-700 text-base px-6 py-4 mb-2',
        buttonClass,
        variant,
        className
      )}>
      {children}
    </div>
  );
}
