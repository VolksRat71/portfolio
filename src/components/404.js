import React from 'react';
import neil from "../assets/site_helper/404.gif"

const FourOhFour = ({ location }) => (
    <div className="FourOhFour">
        <h3>404, Sorry.</h3>
        <h4>We can't seem to find</h4>
        <h4>"nathaniel-j-ryan.com{location.pathname}".</h4>
        <h5>Try the naviation bar <span role="img" aria-label="thumbs-up">👍</span></h5>
        <img
            src={neil}
            style={{ borderRadius: 15 }}
            alt="neil"
        />
    </div >
)

export default FourOhFour;