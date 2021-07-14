import React, { useState } from 'react';
import './App.css';
import Home from './pageRoute/Home';
import Login from './pageRoute/Login';
import Membership from './pageRoute/Membership';
import FindPassword from './pageRoute/FindPassword';
import Detail from './pageRoute/Detail';
import Payment from './pageRoute/Payment';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';

function App() {

  const[videos,setVideos] = useState([
    {
    id: 1,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 2,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 3,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 4,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 5,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 6,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 7,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 8,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 9,
    img: 'qwwq.mp4',
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  }
  ])

  return (
    <BrowserRouter>
      <Route path='/' exact={true} render={()=> <Home videos={videos}/>} />
      <Route path='/login' render={()=> <Login />} />
      <Route path='/membership' render={()=> <Membership />} />
      <Route path='/findpassword' render={()=> <FindPassword />} />
      <Route path='/detail' render={()=> <Detail videos={videos}/>} />
      <Route path='/payment' render={()=> <Payment />} />
    </BrowserRouter>
  );
}

export default App;
