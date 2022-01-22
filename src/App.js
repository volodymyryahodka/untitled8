import {AboutPage, HomePage, LoginPage, NotFoundPage, PostsPage, SinglePostPage, UsersPage} from "./pages";
import css from './App.module.css';
import Layout from "./components/Layout/Layout";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";
import {Routes, Route, Link, Navigate} from "react-router-dom";
export {PostsPage} from "./pages/PostsPage/PostsPage";


function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'users'} element={
              <RequireAuth>
                <UsersPage/>
              </RequireAuth>
            }/>
            <Route path={'posts'} element={<PostsPage/>}>
              <Route path={':id'} element={<SinglePostPage/>}/>
            </Route>
            <Route path={'about'} element={<AboutPage/>}/>
            <Route path={'about-us'} element={<Navigate to={'/about'}/>}/>
            <Route path={'login'} element={<LoginPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </AuthProvider>
  );
}

export default App;