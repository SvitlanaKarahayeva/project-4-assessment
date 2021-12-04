import React from 'react'
import './CircleSelector.css'

export default function CircleSelector(props) {
    return (
        <div className="CircleSelector">
        {/* BUTTON #1 */}
          <button 
            className={props.state.circle1 ? "selected" : ""}
            onClick={props.circle1}
          >
              Select Circle 1
          </button>

        {/* BUTTON #2 */}
          <button
            className={props.state.circle2 ? "selected" : ""}
            onClick={props.circle2}
          >
              Select Circle 2
          </button>

        {/* BUTTON #3 */}
          <button
            className={props.state.circle3 ? "selected" : ""}
            onClick={props.circle3}
          >
              Select Circle 3
          </button>

        {/* BUTTON #4 */}
          <button
            className={props.state.circle4 ? "selected" : ""}
            onClick={props.circle4}
          >
              Select Circle 4
            </button>
         
        </div>
      );
}
  