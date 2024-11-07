// 3. video eklentisi
import { Title } from './Components';
import Bootstrap from './Bootstrap';
import Tailwind from './tailwind';
import logo from './logo.svg';

import styles from './App.module.css';
import './style.scss';
// {styles.App} kullanma sebebi obje olması ve imporrt yöntemi de değişti

//import './tailwind.css';

//3. ders eklentileri



function Styles(){
    return(
        <div className={styles.App}>
      <p className='env'>
      {process.env.REACT_APP_API_URL}
      <span>Test</span>
      </p>
      <Title>{process.env.REACT_APP_API_URL}</Title>
      <Title theme="dark" >{process.env.REACT_APP_API_URL}</Title>
      test13
      <h3>{process.env.NODE_ENV}</h3>
      <Bootstrap />
      <Tailwind />
    </div>
    )




};
export default Styles;
