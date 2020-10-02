import React, {useEffect} from 'react';
import './css/Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import CloseIcon from '@material-ui/icons/Close';
import {Avatar} from "@material-ui/core";
import {connect} from 'react-redux'
import * as actions from '../actions'


const Header = (props) => {

    const [search, setSearch ] = React.useState(false)

    const [term, setTerm] = React.useState('')

    const handleInputChange = (e) => {
        setTerm(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.fetchVideos(term)
    }

    return (
        <div className={'header'}>
            <div className="header__left">
                {props.open ? <CloseIcon className={'header__leftIcon'} onClick={props.openMenu} />  : <MenuIcon className={'header__leftIcon'} onClick={props.openMenu} />}

                <img className={'header__logo'} src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
            </div>
            <form onSubmit={handleFormSubmit} className="header__middle">
                <input className={`${search && 'searching'}`} value={term} onChange={handleInputChange} placeholder={'Search'} type="text"/>
                <SearchIcon onClick={() => setSearch(!search)} className={'header__middleButton'} />
            </form>
            <div className="header__right">
                <VideoCallIcon className={'header__icon'} />
                <AppsIcon className={'header__icon'} />
                <NotificationsIcon className={'header__icon'} />
                <Avatar className={'header__icon'} />
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    console.log(state)
    return {
        videos: state.videos
    }
}

export default connect(mapStateToProps, actions) (Header);