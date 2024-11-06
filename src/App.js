import logo from './logo.svg';
import {useEffect} from 'react';
import styles from './App.module.css';

// {styles.App} kullanma sebebi obje olması ve imporrt yöntemi de değişti

// 3. video eklentisi
import { Title } from './Components';
import Bootstrap from './Bootstrap';
import Tailwind from './tailwind';
import './tailwind.css';

function App() {
  return (
    <div className={styles.App}>

      <Title>{process.env.REACT_APP_API_URL}</Title>
      <Title theme="dark" >{process.env.REACT_APP_API_URL}</Title>
      test13
      <h3>{process.env.NODE_ENV}</h3>
      <Bootstrap />
      <Tailwind />
    </div>
  );
}

export default App;
