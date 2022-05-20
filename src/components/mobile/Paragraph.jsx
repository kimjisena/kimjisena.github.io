import React from 'react';

export default function Paragraph({children, theme}) {
  return (
    <>
        <p className={`${theme} text-lg font-my-sans ml-2`}>
            {children}
        </p>
    </>
  );
}