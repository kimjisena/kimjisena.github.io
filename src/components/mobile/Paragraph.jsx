import React from 'react';

export default function Paragraph({children, theme}) {
  return (
    <>
        <p className={`${theme} text-xl font-my-serif ml-2 font-medium`}>
            {children}
        </p>
    </>
  );
}