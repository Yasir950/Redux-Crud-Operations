import React from 'react'

function ButtonComp(props) {

  return (
    <div>
         <button
              className={`btn btn-sm btn-${props.color} mt-2`}
              // disabled={!this.state.email && !this.state.password}
              onClick={props.onClick}
            >
              {props.title}
            </button>
    </div>
  )
}

export default ButtonComp