import React from 'react';

import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from "./SideDrawer";

const Header = () => {
    return (
        <AppBar
            position='fixed'
            style={{
                backgroundColor: '#2f2f2f',
                boxShadow: 'none',
                padding: '10px 0px'
            }}>

            <Toolbar>
                <div className='header_logo'>
                    <div className='font_righ header_logo_venu'>The Venu</div>
                    <div className='header_logo_title'>Musical Events</div>

                </div>
                <IconButton
                    aria-lable="Menu"
                    color='inherit'>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
export default Header;