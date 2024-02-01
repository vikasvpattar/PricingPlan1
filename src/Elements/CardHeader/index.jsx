import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function CardHeader({
  variant,
  utilities,
  children,
  className,
}) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <div className={twMerge('', buttonClass, utilities, className)}>
      {children}
    </div>
  );
}
