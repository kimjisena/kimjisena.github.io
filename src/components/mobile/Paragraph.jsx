import React from 'react';

export default function Paragraph({children, theme}) {
  return (
    <>
        <p className={`${theme} text-md font-my-sans ml-2 font-medium mb-3 leading-7`}>
            {children}
        </p>
    </>
  );
}