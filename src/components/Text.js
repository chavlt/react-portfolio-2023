import '../styles/Text.scss'
import React from 'react';


function Text({children}){
    // Children should always be an array

    const childrenArray = React.Children.toArray(children);

    
    return (
        <div>
            {childrenArray.map((text, id) => (
                <p className="text" key={id}>{text}</p>
            ))}
        </div>
    )
}

export default Text