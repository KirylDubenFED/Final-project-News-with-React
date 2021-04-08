import { useEffect } from 'react';

export const useOrientation = () => {
  useEffect(() => {
    window.addEventListener('resize', () => {
    //   screen.orientation
    // eslint-disable-next-line no-restricted-globals
      console.log('resize', screen?.orientation?.type)
    })
    return ( 
      () => {
        console.log('componentWillUnmount')
      }
    )
  })
}