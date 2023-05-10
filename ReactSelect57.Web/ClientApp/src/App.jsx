import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TableRow from './TableRow'
import { produce } from 'immer';
import { v4 as uuidv4 } from 'uuid';
import SelectedNumbers from './SelectedNumbers'


class App extends React.Component {

    state = {

        Numbers: [],
        Selected: [],
        Locked: []
        
        
    }

    onAddClick = () => {
        const nextState = produce(this.state, drafstate => {
            drafstate.Numbers.push({ number: Math.floor(Math.random() * (1000 - 1 + 1)) + 1, id: uuidv4() })
        })
        this.setState(nextState);
    }
    onSelectClick = (n) => {
        const { Selected } = this.state

        if (Selected.some(num => num.id === n.id)) {
            this.setState({ Selected: Selected.filter(num => num.id !== n.id) })
          
        }
        else {
            this.setState({ Selected: [...Selected, { number: n.number, id: n.id }] })
         
        
        }
    }
    onLockClick = (s) => {
        const {Locked}= this.state
       if(Locked.some(num => num.id === s.id)){
        this.setState({Locked : Locked.filter(num => num.id !== s.id)})
        console.log('if');
       }
       else{
         this.setState({Locked: [...Locked, {number: s.number, id: s.id}]}) 
         console.log('else');      
       }               
        console.log(Locked);
        
   
    }

    render() {
        const{Numbers, Selected, Locked}= this.state
        return (
            <div className="container">
                <div className='col-md-6'>
                    <button className='btn btn-success btn-lg w-100' onClick={this.onAddClick}>Add</button>
                    <table className='table table-bordered table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Numbers.map(n => <TableRow Number={n.number} 
                            key={n.id} 
                            onSelectClicked={() => this.onSelectClick(n)} 
                            isSelected={Selected.some(num => num.id === n.id)} 
                            isLocked={Locked.some(num => num.id === n.id)} />)}

                        </tbody>
                    </table>
                </div>

                {!!this.state.Selected.length &&
                    <div className="col-md-6 col-md-offset-3">
                        <h3>Selected Numbers </h3>
                        <ul className="list-group">
                            {this.state.Selected.map(s =>
                                <SelectedNumbers selectedNumber={s.number}
                                    onLockClicked={() => this.onLockClick(s)}
                                    isLocked={Locked.some(selNum =>selNum.id === s.id)}
                                />)}
                        </ul>
                    </div>}
            </div>


        );
    }
};

export default App;