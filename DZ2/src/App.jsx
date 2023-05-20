import './App.css'
import {Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'
import PostsPage from './pages/PostsPage/PostsPage'
import SinglePost from './pages/SinglePost/SinglePost'
import Layout from './pages/Layout/Layout'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Error404 from './pages/Errors/404'
import DeletePage from "./pages/ActionPage/DeletePage/DeletePage";
import EditPage from "./pages/ActionPage/EditPage/EditPage.jsx";
import CreatePage from "./pages/ActionPage/CreatePage/CreatePage.jsx";



function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='posts' element={<PostsPage />} />
          <Route path='posts/:id' element={<SinglePost />} />
          <Route path='posts/delete/:id' element={<DeletePage />} />
          <Route path='posts/edit/:id' element={<EditPage />} />
          <Route path='posts/create' element={<CreatePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='profile' element={<ProfilePage />}/>
          <Route path='*' element={<Error404 />}/>
        </Route>
      </Routes>

  )
};

export default App
