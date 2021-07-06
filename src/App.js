import React, { useState } from 'react';
import './App.css';
import Home from './route/Home';
import Login from './route/Login';
import Membership from './route/Membership';
import FindPassword from './route/FindPassword';
import Detail from './route/Detail';
import Payment from './route/Payment';
import {HashRouter, Route} from 'react-router-dom';

function App() {

  const[videos,setvideos] = useState([
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
  },
  ])


  return (
    <HashRouter>
      <Route path='/' exact={true} render={()=> <Home videos={videos} />} />
      <Route path='/login' render={()=> <Login />} />
      <Route path='/membership' render={()=> <Membership />} />
      <Route path='/findpassword' render={()=> <FindPassword />} />
      <Route path='/detail' render={()=> <Detail videos={videos}/>} />
      <Route path='/payment' render={()=> <Payment />} />
    </HashRouter>
  );
}

export default App;
