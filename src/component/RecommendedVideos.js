import React from 'react';
import './css/RecommendedVideos.css'
import Video from "./Video";
import {connect} from 'react-redux'
import * as actions from '../actions'


const RecommendedVideos = (props) => {
    return (
        <div className={`recommendedVideos ${props.open && 'recommendedVideos__positioned'}`}>
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                {props.videos?.data?.items?.map(item => (
                    <Video  video={item} getChannel={props.getChannel} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        videos: state.videos
    }
}

export default connect(mapStateToProps, actions) (RecommendedVideos);