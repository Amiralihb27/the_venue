import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const VenueInfoItem = (props) => {
    return (
        <Zoom className='vn_item'>
            <div>
                <div className='vn_outer'>
                    <div className='vn_inner'>
                        <div className={`vn_icon_square ${props.backgroundClass}`}></div>
                        <div
                            className='vn_icon'
                            style={{ background: `url(${props.icon})` }}
                        ></div>
                        <div className='vn_title'>
                            {props.title}
                        </div>
                        <div className='vn_desc'>
                            {props.description}
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default VenueInfoItem;
