import React, {useEffect} from 'react';
import './css/Video.css'
import {Avatar} from "@material-ui/core";
import axios from 'axios'
import {youtubeApiKey} from "../config/apiKeys";

const Video = (props) => {
    const [channel, setChannel] = React.useState(null)

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/channels', {
            params : {
                part: 'snippet',
                key: youtubeApiKey,
                id: props?.video?.snippet?.channelId
            }
        }).then(channel => {
            setChannel(channel?.data?.items[0])
        })

    }, [props?.video?.snippet?.channelId])

    console.log(channel)
    return (
        <div className={'video'}>
            <img className={'video__thumbnail'} src={props.video?.snippet?.thumbnails?.high.url} alt=""/>
            <div className="video__info">
                <Avatar src={channel?.snippet?.thumbnails?.high?.url} className={'video__avatar'} />
                <div className="video__text">
                    <h4>{props.video?.snippet?.title}</h4>
                    <p>{channel?.snippet?.title}</p>
                    <p>{props.video?.snippet?.publishedAt}</p>
                </div>
            </div>
        </div>
    );
};

export default Video;