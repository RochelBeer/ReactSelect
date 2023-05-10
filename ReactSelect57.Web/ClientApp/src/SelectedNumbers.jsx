import React from 'react'

class SelectedNumbers extends React.Component {

    render() {
        const { selectedNumber, onLockClicked, isLocked } = this.props
        return (
            < li className="list-group-item" >
                {selectedNumber}

                <button className={`ms-5 btn ${isLocked ? 'btn-danger' : 'btn-primary'}`} onClick={onLockClicked}>{isLocked ? 'Unlock' : 'Lock'}</button>
            <h1>{isLocked}</h1>
            </li >
            
            
            )
    }

}
export default SelectedNumbers;