import {BrowserRouter, Routes, Route} from "react-router-dom"
import Feed from "../Pages/Feed/feed"
import Comments from "../Pages/Comments/comments"
import InitialPage from "../Pages/InitialPage/initialPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<InitialPage/>}/>
                <Route path='/feed' element={<Feed/>}/>
                <Route path='/feed/:postId' element={<Comments/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router