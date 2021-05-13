import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
// <<<<<<<<<<<<<<<<hero typing>>>>>>>>>>

export default function Typing() {
  return (
    <>
      <ReactTypingEffect
        text={[
          'Strength.',
          'Power.',
          'Control.',
          'Results.',
          'Peace.',
          'Motivation.',
          'Dedication.',
          'Your Goals.',
          'Everything.',
          'With Us.',
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
  // const typedTextSpan = document.querySelector('.typed-text');
  // const cursorSpan = document.querySelector('.cursor');

  // const textArray = [
  //   'Strength.',
  //   'Power.',
  //   'Control.',
  //   'Results.',
  //   'Peace.',
  //   'Motivation.',
  //   'Dedication.',
  //   'Your Goals.',
  //   'Everything.',
  //   'With Us.',
  // ];
  // const typingDelay = 200;
  // const erasingDelay = 100;
  // const newTextDelay = 2000; // Delay between current and next text
  // let textArrayIndex = 0;
  // let charIndex = 0;

  // function type() {
  //   if (charIndex < textArray[textArrayIndex].length) {
  //     if (!cursorSpan.classList.contains('typing'))
  //       cursorSpan.classList.add('typing');
  //     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
  //     charIndex++;
  //     setTimeout(type, typingDelay);
  //   } else {
  //     cursorSpan.classList.remove('typing');
  //     setTimeout(erase, newTextDelay);
  //   }
  // }

  // function erase() {
  //   if (charIndex > 0) {
  //     if (!cursorSpan.classList.contains('typing'))
  //       cursorSpan.classList.add('typing');
  //     typedTextSpan.textContent = textArray[textArrayIndex].substring(
  //       0,
  //       charIndex - 1
  //     );
  //     charIndex--;
  //     setTimeout(erase, erasingDelay);
  //   } else {
  //     cursorSpan.classList.remove('typing');
  //     textArrayIndex++;
  //     if (textArrayIndex >= textArray.length) textArrayIndex = 0;
  //     setTimeout(type, typingDelay + 1100);
  //   }
  // }

  // window.addEventListener('load', function () {
  //   // On DOM Load initiate the effect
  //   if (textArray.length) setTimeout(type, newTextDelay + 250);
  // });
  // return textArray;
}
