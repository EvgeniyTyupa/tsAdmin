import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTimeByTimeZone } from './Utils/timezone';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const App = () => {

  getTimeByTimeZone('2021/06/16 11:58:08+0300')

  return(
    <div>
      <FontAwesomeIcon icon={faCoffee}/>
    </div>
  )
}

export default App;
