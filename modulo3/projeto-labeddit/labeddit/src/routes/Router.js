import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";


export default function Router() {
    
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<FeedPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/cadastro" element={<SignUpPage/>} />
                <Route path="/post-page/:id" element={<PostPage/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}