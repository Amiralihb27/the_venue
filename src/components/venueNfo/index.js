import React from 'react';
import VenueInfoItem from './venueInfoItem';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueNfo = () => {
    return (
        <div className='bck_black'>
            <div className='center_wrapper'>
                <div className='vn_wrapper'>
                    <VenueInfoItem
                        backgroundClass='bck_special'
                        icon={icon_calendar}
                        title='Event Date & Time'
                        description='Dec 20 @1:20:00pm'
                    />
                    <VenueInfoItem
                        backgroundClass='bck_yellow_special'
                        icon={icon_location}
                        title='Event Location'
                        description='375 Deer Oak, Oakland, CA 9835'
                    />
                </div>
            </div>
        </div>
    );
};

export default VenueNfo;
