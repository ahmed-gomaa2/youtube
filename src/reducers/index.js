import {combineReducers} from "redux";
import fetchVideosReducers from "./fetchVideosReducers";



export default combineReducers({
    videos: fetchVideosReducers,
})