import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(props){
        super(props)
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
        this.solveAndUpdate = this.solveAndUpdate.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    solveAndUpdate(){
        let e = []
        let o = []
        let arr = this.state.userInput.split(',')
        for(let i=0;i<arr.length;i++){
            if(arr[i]%2 === 0){
                e.push(arr[i])
            }else{
                o.push(arr[i])
            }
        }
        this.setState({
            evenArray: e,
            oddArray: o
        })
    }

    handleChangeInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine"
                  onChange={this.handleChangeInput}  
                 />
                <button className="confirmationButton"
                    onClick={this.solveAndUpdate}
                 >
                    Split the numbers!
                 </button>
                <span className="resultsBox">
                    Evens: {this.state.evenArray}
                </span>
                <span className="resultsBox">
                    Odds: {this.state.oddArray}
                </span>
            </div>
        )
    }
}

export default EvenAndOdd;