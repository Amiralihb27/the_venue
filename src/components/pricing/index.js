import React from 'react';
import MyButton from '../utils/MyButton';
import { Zoom } from 'react-awesome-reveal'

const Pricing = () => {
    const priceState = {
        prices: [100, 150, 250],
        position: ['Balcony', 'Medium', 'Star'],
        desc: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis metus in libero  justo non mi rutrum congue et sit amet leo. Aliquam nec mattis urna, ut bibendum ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis metus in libero rutrum, non mi rutrum congue et sit amet leo. Aliquam nec mattis urna, ut bibendum ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis metus in libero rutrum, non mi rutrum congue et sit amet leo. Aliquam nec mattis urna, ut bibendum "
        ],
        linkto: ['https://sales.b', 'https://sales.m', 'https://sales.s'],
        delay: [500, 0, 500]
    }
    const showBoxes = () => {
        return (
            priceState.prices.map((price, index) => (
                <Zoom key={index} className='pricing_item' delay={priceState.delay[index]}>
                    <div className='pricing_inner_wrapper'>
                        <div className='pricing_title'>
                            <span>${price}</span>
                            <span>{priceState.position[index]}</span>
                        </div>
                        <div className='pricing_description '>{priceState.desc[index]}</div>

                        <div className='pricing_buttons'>
                            <MyButton
                                text="purchase"
                                style={
                                    {
                                        background: 'gray',
                                        color: '#ffffff'
                                    }
                                }
                                iconTicket={true}
                                link={priceState.linkto[index]}
                            />
                        </div>
                    </div>


                </Zoom>
            ))
        )
    }

    return (
        <div className='bck_black'>
            <div className='center_wrapper pricing_section'>
                <h2>Pricing</h2>
                <div className='pricing_wrapper'>
                    {showBoxes()}
                </div>
            </div>
            
        </div>
    )
}

export default Pricing;