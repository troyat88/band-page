import React, { Fragment } from 'react'

//take props from the Show.js file, to use in our cards. 
// "show" is our props... which are being passed from show.js
export const ShowCard = (show) => {
    return (
        <Fragment>
            <figure>
                <img className="rounded" src={show.venueImg}></img>
            </figure>
            <div className="ml-25">
                <h2>
                    {show.venue}
                </h2>
                <p>
                    {show.desc}
                </p>
                <button className="btn btn-dark">Get Tickets</button>
            </div>


        </Fragment>
        
    )
}
