import React from 'react';

class TableRow extends React.Component {
   
    render() {
        const { Number, onSelectClicked, isSelected, isLocked } = this.props;
        return (<tr>
            <td>{Number}</td>
            <td>
                <button disabled={isLocked} className={`btn ${isSelected ? 'btn-danger' : 'btn-primary'}`}  onClick={onSelectClicked}>{isSelected ? 'Remove From Select' : 'Add to Selected' }</button>
            </td>
        </tr>)
    }
}

export default TableRow;