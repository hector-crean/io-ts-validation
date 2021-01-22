import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BarChartIcon from '@material-ui/icons/BarChart';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import SendIcon from '@material-ui/icons/Send';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CropSquareIcon from '@material-ui/icons/CropSquare';

interface MaterialHeaderProps {}

const MaterialHeader = (props: MaterialHeaderProps): JSX.Element => {
    const {} = props

    return (
        <div className="bx--grid--full-width">

        <div className="bx--row">
        <div className = "material-header">


        <div className="material-header__left">
        <IconButton>
                    <MenuIcon/>
                </IconButton>

                {/** Wikihouse Logo  */}
                {/* <img src = 'https://freight.cargo.site/t/original/i/50cc73196a8e80a6774a8f03cee687f5164e726f614681ff2a4ff307bf9ff082/WikiHouse-Banner---Black.png' alt ='' /> */}
        </div>


        <div className="material-header__middle">
            {/** --- R3F: Builder ---- */}
            <IconButton> <CropSquareIcon/> </IconButton>
            {/** --- Analytics ---- */}
            <IconButton> <BarChartIcon/> </IconButton> 
        
            {/** --- Scheduler ---- */}
            <IconButton> <ViewQuiltIcon/> </IconButton>
            {/** --- Messenger ---- */}
            <IconButton> <SendIcon/> </IconButton>
        </div>

        <div className="material-header__right">
            <IconButton>
                <Avatar/>
            </IconButton>
        </div>

            

            

            {/** ------- Search bar  ------- */}
            {/* <div className="header__middle">
                <SearchIcon/>
                <input placeholder='search pattern libaray' type='text'/>
                <ArrowDropDownIcon className = 'header__inputCaret'/>
            </div> */}

         

        </div>

        </div>

        </div>

        
    )
}

export default MaterialHeader
