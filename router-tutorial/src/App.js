import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Articles from './Articles';
import Article from './Article';
import Layout from './Layout'
import NotFound from './NotFound';
import Login from './Login';
import MyPage from './MyPage';

const App = () => {
  return (
    <div>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={ <Home /> }/>
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;