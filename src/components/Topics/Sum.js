import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }

        
    }

    handle1(val){
        this.setState({
            number1: parseInt(val,10)
        })
    }
    handle2(val){
        this.setState({
            number2: parseInt(val,10)
        })
    }

    findSum(){
        let s = this.state.number1 + this.state.number2
        this.setState({
            sum: s
        })
    }


    render() {
        return(
           <div className="puzzleBox sumPB">
               <h4>Sum</h4>
               <input className="inputLine"
               onChange={(e)=>this.handle1(e.target.value)}
               ></input>
               <input className="inputLine"
               onChange={(e)=>this.handle2(e.target.value)}
               ></input>
               <button className="confirmationButton"
               onClick={()=>this.findSum()}
               >ADD!</button>
               <span className="resultsBox">
                   Sum: {this.state.sum}
               </span>
            </div>
        )
    }
}

export default Sum;