import React from 'react'
import Square from './Square'
import Line from './Line'

class Board extends React.Component {
    render(){
        return(
            <div>
                <Line />
                <Line />
                <Line />
            </div>
        )
    }
}

export default Board;