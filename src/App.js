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
import listImgThree from './imgVideoSource/엘르 코리아 (ELLE KOREA) _ No_1 Fashion Media.jpg'
import josoo from './imgVideoSource/josoo.jpg'
import yo from './imgVideoSource/yo.jpg'


function App() {

  const[videos,setVideos] = useState([
    {
    id: 1,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 2,
    img: listImgTwo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 3,
    img: listImgThree,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 4,
    img: listImgThree,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 5,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 6,
    img: listImgTwo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 7,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 8,
    img: listImgThree,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 9,
    img: listImgTwo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  }
  ])

  const[addVideos,setAddVideos] = useState([
    {
    id: 10,
    img: listImgThree,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 11,
    img: listImgTwo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 12,
    img: listImgOne,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 13,
    img: listImgTwo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  }
  ])

  const[videoListTwo,setVideoListTwo] = useState([
    {
    id: 1,
    img: josoo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 2,
    img: josoo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 3,
    img: josoo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 4,
    img: josoo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 5,
    img: josoo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 6,
    img: josoo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 7,
    img: josoo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 8,
    img: josoo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  }
  ])

  const[videoListOne,setVideoListOne] = useState([
    {
    id: 1,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 2,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 3,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 4,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 5,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 6,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 7,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 8,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 9,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 10,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
    time:'2주',
    level:'쉬움',
    year: 2021,
    similar:'95%일치'
  },
  {
    id: 11,
    img: yo,
    title:'흙수저가 살아남는 생존방식',
    text:'이거 고작 몇 줄이라고 4시간 23분을 소비했다...',
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
      <Route path='/detail' render={()=> <Detail videos={videos} videoListTwo={videoListTwo} videoListOne={videoListOne} />} />
      <Route path='/payment' render={()=> <Payment />} />
    </BrowserRouter>
  );
}

export default App;
