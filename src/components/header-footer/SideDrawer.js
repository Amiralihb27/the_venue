import React from 'react';
import { Drawer, duration, List, ListItem } from '@mui/material'
import { Draw } from '@mui/icons-material';
import { scroller } from 'react-scroll';


const SideDrawer = (props) => {

    const listItems = [
        { where: 'featured', value: 'to The top' },
        { where: 'venuInfo', value: 'Venue Info' },
        { where: 'highlights', value: 'Highlights' },
        { where: 'pricing', value: 'Pricing' },
        { where: 'location', value: 'Location' }
    ]

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            dalay: 500,
            smooth: true,
            offset: -150
        });
        props.close(false);

    }

    function renderItems(item) {
        return <ListItem className='user_selection listItems' button onClick={() => scrollToElement(item.where)} key={item.where}>{item.value} </ListItem>
    }
    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={() => props.close(false)}
            sx={{
                '& .MuiDrawer-paper': {
                    backgroundColor: '#252525', 
                    color:'#fff',
                     overflowX: 'hidden'
                }
            }}
            //change the colors later
        >
            <List component="nav">
                {listItems.map((item) => renderItems(item))}
            </List>
        </Drawer>
    )
}

export default SideDrawer