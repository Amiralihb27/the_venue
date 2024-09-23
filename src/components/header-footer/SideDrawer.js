import React from 'react';
import { Drawer, List, ListItem } from '@mui/material'
import { Draw } from '@mui/icons-material';


const SideDrawer = (props) => {

const listItems=[
    {where:'featured' , value:'to The top'},
    {where:'venuInfo' , value :'Venue Info'},
    {where:'highlights' , value:'Highlights'},
    {where:'location' , value:'Location'}
]

function renderItems(item){
    return <ListItem button onClick={() => alert(item.where)}>{item.value} </ListItem>
}
    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={()=> props.close(false)}>
            <List component="nav">
              {  listItems.map((item)=>renderItems(item))}
            </List>

        </Drawer>
    )
}

export default SideDrawer