import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class List extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  
    render() {
      
        
      return (
          <div className="list_wrapper">
              <div className="IN_THIS_NEW">
					<span>IN THIS NEW TRAINING WELL COVER:</span>
				</div>
              <ul>
                <li>Why the right OFFER generates more result than any
							      other part of your message</li>
                <li>The 6 steps to easily craft an irresistible OFFER, everytime</li>
                <li>The 3 pillars of every irresistible offer (miss one and the offer is borning) </li>
                <li>The simple formula:HV + LI = Irresistible Offer</li>
                <li>PROOF:5 briliant  IRRESISTIBLE OFFERS(that generated millions!)</li>
                <li>MORE PROOF: 3 wildly fun winning SPLIT-TESTS of irresistible OFFERS</li>
              
                    <li className="plus"> PLUS! An on-camera live Q&xi;A at the end to ask Ari anything! </li>
                    </ul>
                      <Link to="/form">
                        <button  className="button_center register" onClick={this.showForm}>
                            <span> Register NOW</span>
                        </button>
                      </Link>
                      
                       
          </div>
      );
    }
  }