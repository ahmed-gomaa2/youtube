import React, {useEffect} from 'react';
import './css/App.css'
import Header from './Header'
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import {connect} from 'react-redux'
import * as actions from '../actions'
import {BrowserRouter, Route} from 'react-router-dom'
import VideoPlayer from "./VideoPlayer";

const App = (props) => {

    const [open, setOpen] = React.useState(false)

    const openMenu = () => {
        setOpen(!open)
    }

    useEffect(() => {
        props.fetchVideos('web development')
    }, [])

    return (
        <div className={'app'}>
            <BrowserRouter>
                <Route exact component={() => <Header openMenu={openMenu} open={open} />}/>
                <div className="app__page">
                    <Route exact component={() => <Sidebar open={open} />} />
                    <Route exact path={'/'} component={() => <RecommendedVideos />} />
                    <Route exact path={'/videos/:videoId'} component={() => <VideoPlayer />} />
                </div>
            </BrowserRouter>
        </div>
    );
};


export default connect(null, actions) (App);