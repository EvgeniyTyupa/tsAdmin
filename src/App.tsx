import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTimeByTimeZone } from './Utils/timezone';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const App = () => {

  getTimeByTimeZone('2021-06-08T18:21:36.129444+00:00')

  return(
    <div>
      <FontAwesomeIcon icon={faCoffee}/>
    </div>
  )
}

export default App;
