import React, { useState } from 'react';
import './App.css';
import Home from './pageRoute/Home';
import Login from './pageRoute/Login';
import Membership from './pageRoute/Membership';
import FindPassword from './pageRoute/FindPassword';
import Detail from './pageRoute/Detail';
import Payment from './pageRoute/Payment';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';
import listImgTwo from './imgVideoSource/Metro subway tunnels.jpg'
import listImgOne from './imgVideoSource/listImg.jpg'


function App() {

  const[videos,setVideos] = useState([
    {
    id: 1,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 2,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 3,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 4,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 5,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 6,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 7,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 8,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 9,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  }
  ])

  const[addVideos,setAddVideos] = useState([
    {
    id: 10,
    img: listImgTwo,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 11,
    img: listImgTwo,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 12,
    img: listImgTwo,
    title:'흙수저가 살아남는 생존방식',
    text:'코드라이언 코스 100% 활용하기',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 13,
    img: listImgTwo,
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
      <Route path='/' exact={true} render={()=> <Home videos={videos} setVideos={setVideos} addVideos={addVideos}/>} />
      <Route path='/login' render={()=> <Login />} />
      <Route path='/membership' render={()=> <Membership />} />
      <Route path='/findpassword' render={()=> <FindPassword />} />
      <Route path='/detail' render={()=> <Detail videos={videos}/>} />
      <Route path='/payment' render={()=> <Payment />} />
    </BrowserRouter>
  );
}

export default App;
