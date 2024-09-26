import React from 'react';


const Location = () => {
    return (
        <div className='location_wrapper'>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8126.101223616579!2d8.681768706801492!3d50.10998640283054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt!5e0!3m2!1sen!2sde!4v1727375257556!5m2!1sen!2sde"
                width="100%"
                height="500px"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className='location_tag'>
                <div>
                    location
                </div>
            </div>
        </div>
    )
}

export default Location;