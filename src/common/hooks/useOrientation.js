import { useEffect, useMemo, useState } from 'react';

console.log.apply(useMemo)
export const useOrientation = () => {
  const [orientation, setOrientation] = useState(null)

  useEffect(() => {
    window.addEventListener('resize', () => {
      // eslint-disable-next-line no-restricted-globals
      const orientation = screen?.orientation?.type?.includes('portrait')
        ? 'portrait'
        : 'landscape';

      setOrientation(orientation);
    });

    return (
        () => {
            console.log('componentWillUnmount');
        }
    )
  });

  return orientation;
}

// Отписаться от ивента
// Почитать про редах экшены, все все все 
