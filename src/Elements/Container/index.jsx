import React, { Children } from 'react';
import { twMerge } from 'tailwind-merge';
export default function Container({ variant, utilities, children, className }) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <option className={twMerge('', buttonClass, utilities, className)}>
      {children}
    </option>
  );
}
