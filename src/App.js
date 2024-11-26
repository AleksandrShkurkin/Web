import './App.css';
import { useState } from 'react';
import { ConfigProvider } from 'antd';
import CardShow from './Components/CardShow';
import guitar from './img/guitar.jpg';
import flute from './img/flute.jpg';
import piano from './img/piano.jpg';
import violin from './img/violin.jpg';
import Finalize from './Components/Finalize';
import HeaderFooter from './Components/HeaderFooter';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

function App() {
  const pastelWhite = {
    colorPrimary: '#008080',
    colorBgLayout: '#FFFFFF',
    colorText: '#000000',
    borderColor: "#676765"
  };

  const pastelBlack = {
    colorPrimary: '#3A3E43',
    colorBgLayout: '#1F1F1F',
    colorText: '#FFFFFF',
    borderColor: "#FFF"
  };

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [count, setCount] = useState(0);
  const [itemBought, setItemBought] = useState([]);

  const handleThemeChange = (checked) => {
    setIsDarkMode(checked);
  };

  const tokenTheme = isDarkMode ? pastelWhite : pastelBlack;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeaderFooter isDarkMode={isDarkMode} onThemeChange={handleThemeChange} count={count} />}>
        <Route index element={<CardShow items={[
          {
            name: "Guitar",
            src: guitar,
            link: "qrcode"
          },
          {
            name: "Flute",
            src: flute,
            link: "qrcode"
          },
          {
            name: "Piano",
            src: piano,
            link: "qrcode"
          },
          {
            name: "Violin",
            src: violin,
            link: "qrcode"
          },
        ]} onCheckboxChange={setCount} onCheckedItemsChange={setItemBought}/>} />
        <Route path='checkout' element={<Finalize itemsSelected={itemBought} onDelete={setCount} onCheckedItemsChange={setItemBought}/>}/>
      </Route>
    )
  )

  return (
    <ConfigProvider theme={{
      token: tokenTheme,
    }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
