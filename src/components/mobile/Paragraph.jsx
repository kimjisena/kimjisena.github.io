import React from 'react';

export default function Paragraph({text, theme}) {
  return (
    <>
        <p className={`${theme} text-lg font-my-sans`}>
            {text}
        </p>
    </>
  );
}