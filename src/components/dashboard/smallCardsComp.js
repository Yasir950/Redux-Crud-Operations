import React from 'react'

function SmallCardsComp(props) {
  return (
         <div className=" col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3">
          <div
            className='card'
          >
            <div className="row p-2">
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <i
              
                  className="fa fa-solid fa-car-side fa-2x p-2 text-white rounded"
                  style={{
                    background: "linear-gradient(60deg, #f5700c, #ff9800)",
                    marginTop: "-20px",
                  }}
                ></i>
              </div>
              <div className="col-8 col-sm-8 col-md-8 col-lg-8 text-end text-large">
                {props.figure}
              </div>
            </div>
            <hr style={{ margin: "4px 10px 0px 10px" }} />
            <div className="px-2 text-uppercase pb-1">
              <small>{props.title}</small>
            </div>
          </div>
        </div>
  )
}

export default SmallCardsComp