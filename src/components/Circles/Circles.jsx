import React from 'react';
import './Circles.css';

export default function Circles(props) {
    return (
        <div className="Circles">
          <div className={props.state.circle1 ? "selected" : ""}> 1 </div>

          <div className={props.state.circle2 ? "selected" : ""}> 2 </div>

          <div className={props.state.circle3 ? "selected" : ""}> 3 </div>

          <div className={props.state.circle4 ? "selected" : ""}> 4 </div>
        </div>
    );
}
