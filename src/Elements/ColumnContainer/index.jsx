import React, { Children } from 'react';
import { twMerge } from 'tailwind-merge';
export default function ColumnContainer({
  variant,
  utilities,
  children,
  className,
  gap
}) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];
  console.log(gap);
  return (
    <div
      className={twMerge('flex flex-col',`gap-${gap}`, buttonClass, utilities, className)}>
      {children}
    </div>
  );
}
