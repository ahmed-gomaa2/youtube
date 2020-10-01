import React, {useEffect} from 'react';
import './css/App.css'
import Header from './Header'
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import {connect} from 'react-redux'
import * as actions from '../actions'

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
            <Header openMenu={openMenu} open={open} />
            <div className="app__page">
                <Sidebar open={open} />
                <RecommendedVideos open={open} />
            </div>
        </div>
    );
};


export default connect(null, actions) (App);