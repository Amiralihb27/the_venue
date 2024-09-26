import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from '../utils/MyButton';
const Discount = () => {
    const end = 30;
    const [start, setStart] = useState(0)


    const percentage = () => {
        if (start < end) {
            setStart(prevValue => start + 1)
        }
    }

    useEffect(() => {
        if (start > 0 && start < end) {
            setTimeout(() => {
                setStart(prevCount => prevCount + 1)
            }, 30)
        }
    }, [start])
    return (
        <div className='center_wrapper'>
            <div className='discount_wrapper'>
                <Fade onVisibilityChange={(inview) => {
                    if (inview) {
                        percentage()
                    }
                }}>
                    <div className='discount_percentage'>
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className='discount_description'>
                        <h3>
                            Purchase ticket before 20th June
                        </h3>
                        <p>Cras quis justo non mi rutrum congue et sit amet leo. Aliquam nec mattis urna, ut bibendum nisl. Mauris bibendum semper sapien, non pretium dolor semper varius. Nunc nec quam non magna faucibus convallis a vel turpis. Nam luctus augue in dolor pharetra</p>
                        <MyButton
                            text="Ticket Price"
                            link="https://google.com"
                            size='small'
                            style={
                                {
                                    background: '#ffa800',
                                    color: '#fff'
                                }
                            }
                            iconTicket={true}
                        />
                    </div>
                </Slide>

            </div>
        </div>
    )
}

export default Discount

