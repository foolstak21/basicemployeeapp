import React from 'react';

class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            turOff: false
        }
    }
    testfunction = function(mesg){
        console.log('testfunction');
    }
    dataClick = (msg) => {
        this.setState({
            turOff: true
        })
    };

    onReset = () => {
        this.setState({
            turOff: false
        })
    };
    
    function (a){
    console.log('test')
      }

    render(){
        let turn = this.state.turOff
        let mesg = {
            name: 'Sagar',
            category: 'student',
            address: {
                city: 'Mumbai',
                state: 'MH',
                zipcode: 400022
            }
        };

        const isValid = false;
        let conditionalDiv;
        if(!turn){
            conditionalDiv = <div>
            <div>Sagar</div><button onClick={() => this.dataClick(mesg)}>Click</button>
            </div>
        }
        return(           
            <div> 
                {conditionalDiv}
                <button onClick={() => this.onReset()}>Reset</button>
            </div>
        )
    }
}

export default Employee;