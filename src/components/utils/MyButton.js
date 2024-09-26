import React from 'react';
import Button from '@mui/material/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';
import '../../resources/styles.css'; // Import the CSS file for styling

const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size={props.size ? props.size : 'large'}
            className="custom-button" // Add a custom class
            style={{
                ...props.style,
            }}
        >
            {props.iconTicket ? (
                <img
                    src={TicketIcon}
                    className="iconImage"
                    alt="icon_Button"
                />
            ) : null}

            {props.text}
        </Button>
    );
};

export default MyButton;
