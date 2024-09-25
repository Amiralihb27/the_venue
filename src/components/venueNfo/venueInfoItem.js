import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const VenueInfoItem = ({ backgroundClass, icon, title, description }) => {
    return (
        <Zoom className='vn_item'>
            <div>
                <div className='vn_outer'>
                    <div className='vn_inner'>
                        <div className={`vn_icon_square ${backgroundClass}`}></div>
                        <div
                            className='vn_icon'
                            style={{ background: `url(${icon})` }}
                        ></div>
                        <div className='vn_title'>
                            {title}
                        </div>
                        <div className='vn_desc'>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default VenueInfoItem;
