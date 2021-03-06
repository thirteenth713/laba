import React from 'react';
import { Link } from 'react-router-dom';


class MyHeader extends React.Component {
     render() {
         return(
            <div className="header__wrapper">
                <div className="background_header">

                </div>
                <Link to="/" >
                  <div className="header__log">

                  </div>
                </Link>
                <div className="header__text">
                    <span className='first_headers'>New Free Training from Ari:</span>
                    <span className='second_headers'>The Secret to Easily Crafting
                            a Mouth-Watering Offer
                            That Your Tribe <b>Cannot Resist</b></span>
                </div>
                <div className="header__button_box">
                    <div className="header__wrap_button_box">
                        <span className="button_box_text">
                        Tuesday, September 13th, 12:30pm EST
                        </span>
                      <Link to="/form" className="button_header register">
                        {/*<button className="button_header register">*/}
                                <span> Register NOW</span>
                        {/*</button>*/}
                      </Link>

                    </div>
                </div>
                
                <div className="header__scroll_down">
                    <span className="header_scroll_text">SCROLL DOWN</span>
                    <div className="header_scroll_triangle">

                    </div>
                </div>
            </div>
         )

     }

}
export default MyHeader;