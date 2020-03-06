import { RefObject } from 'react';

export const handleScrollTo = (elRef: RefObject<HTMLDivElement>): void => {
  if (elRef.current) {
    //Scroll the element into view
    elRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const getFixedFahrenheit = (temp?: number): string | null => {
  return temp ? `${temp.toFixed()}` : null;
};
