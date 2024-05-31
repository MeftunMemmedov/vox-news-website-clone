import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import AppRouter from './router/AppRouter';
import Header from './layout/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from './redux/newsSlice.js';
import { getAuthors, getCurrentAuthor } from './redux/authSlice.js';

function App() {
  const dispatch=useDispatch()
  const {news}=useSelector(store=>store.news)
  const {isLoggedIn}=useSelector(store=>store.auth)
  const authorIdinLocal=localStorage.getItem('authorId') || ''
  // refresh edende problem var idi

  useEffect(()=>{    
    dispatch(getNews())
    dispatch(getAuthors())
  },[])


  useEffect(()=>{   
    isLoggedIn?dispatch(getCurrentAuthor(authorIdinLocal)):dispatch(getCurrentAuthor())
  },[isLoggedIn])

  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
