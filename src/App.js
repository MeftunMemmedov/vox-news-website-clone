import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import AppRouter from './router/AppRouter';
import Header from './layout/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from './redux/newsSlice.js';

function App() {
  const dispatch=useDispatch()
  const {news}=useSelector(store=>store.news)


  useEffect(()=>{    
    dispatch(getNews())
  },[])

  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
