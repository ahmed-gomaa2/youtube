import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './css/VideoPlayer.css'
import {connect} from 'react-redux'
import axios from "axios";
import {youtubeApiKeyForVideo} from "../config/apiKeys";
import Video from "./Video";
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const VideoPlayer = (props) => {
    const {videoId} = useParams()
    const [video, setVideo] = React.useState('')

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet',
                key: youtubeApiKeyForVideo,
                id:videoId,
            }
        }).then(video => {
            console.log(video)
            setVideo(video?.data?.items[0])
        })
    }, [videoId])

    console.log(videoId, video)

    return (
        <div className={`videoPlayer ${props.open && 'videoPlayer__positioned'}`}>
            <div className="videoPlayer__iframe">
                {video?.id ? <iframe className={'videoPlayer__iframePlayer'} src={`https://www.youtube.com/embed/${video?.id}`} frameBorder="0"></iframe> : ''}
                <div className="videoPlayer__info">
                    <div className="videoPlayer__infoLeft">
                        <p>33,333 views</p>
                    </div>
                    <div className="videoPlayer__infoRight">
                        <div className="videoPlayer__infoRightItem">
                            <ThumbUpIcon />
                            <p>12K</p>
                        </div>
                        <div className="videoPlayer__infoRightItem">
                            <ThumbDownIcon />
                            <p>200</p>
                        </div>
                        <div className="videoPlayer__infoRightItem">
                            <ScreenShareIcon />
                            <p>Share</p>
                        </div>
                        <div className="videoPlayer__infoRightItem">
                            <PlaylistAddIcon />
                            <p>save</p>
                        </div>
                        <div className="videoPlayer__infoRightItem">
                            <MoreHorizIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="videoPlayer__similar">
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

export default connect(mapStateToProps, null) (VideoPlayer);