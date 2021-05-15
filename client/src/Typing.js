import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
// <<<<<<<<<<<<<<<<hero typing>>>>>>>>>>

export default function Typing() {
  return (
    <>
      <ReactTypingEffect
        text={[
          'FullStack Engineer.',
          'Python Teacher.',
          'Back-End Specialist.',
          'Front-End Developer.',
          'Product Designer.',
          'UI/UX Specialist.',
          'Content Manager.',
          'Developer Advocate.',
          'Developer Intern.',
          'Content Writer.',
        ]}
        cursorRenderer={(cursor) => <h1 className='cursor'>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{ color: 'orange', fontSize: '4.5rem' }}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
}
