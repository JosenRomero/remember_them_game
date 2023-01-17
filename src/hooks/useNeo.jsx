import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

export const useNeo = (callback) => {

  const { level } = useContext(UserContext);
  const { pathname } = useLocation();

  useEffect(() => {

    if(pathname === '/' && level === 1) {
      callback();
    } 

  }, [level])

}
