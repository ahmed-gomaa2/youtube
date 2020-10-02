import axios from 'axios'
import {youtubeApiKey} from '../config/apiKeys'

export const fetchVideos = term => async dispatch => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search/',{
        params : {
            part: 'snippet',
            maxResults: 10,
            key: youtubeApiKey,
            q:term
        }
    })

    dispatch({
        type: 'FETCH_VIDEOS',
        payload: response
    })
}

