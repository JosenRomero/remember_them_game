import { useEffect } from 'react';

export const useOutsideClick = (ref, onClickOut) => {

  useEffect(() => {

    if(ref) {
      
      const onClick = (e) => !ref.contains(e.target) && onClickOut()
  
      document.addEventListener("click", onClick);
  
      return () => document.removeEventListener("click", onClick);
      
    }

  }, [ref])

}
