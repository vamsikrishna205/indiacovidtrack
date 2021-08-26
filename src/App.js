import React from 'react';
import Covid from './components/covid/covid';
import styles from './App.css'
import Statewise from './components/statewisedata/statewise';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <h3 id="header_1">COVID19INDIA</h3>
      <Covid />
      <Statewise />
    </div>
  )
}

export default App;