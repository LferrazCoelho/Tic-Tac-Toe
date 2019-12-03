import React from 'react'
import Square from './Square'

class Line extends React.Component{
    render(){
        return(
            <div className="line">
                <Square />
                <Square />
                <Square />
            </div>
        )
    }
}

export default Line