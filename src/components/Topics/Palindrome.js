import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
       
    }

    solve(){
        let i = 0;
       let j = (this.state.userInput.length - 1)
        while(j>=i){
            if(this.state.userInput[i] !== this.state.userInput[j]){
                this.setState({
                    palindrome: 'false'
                })
                console.log("exiting");
                return;
            }
            i++;
            j--;
        }
        this.setState({
            palindrome: 'true'
        })
    }

    changeInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine"
                 onChange={(e)=>{this.changeInput(e)}}
                ></input>
                <button className="confirmationButton"
                onClick={()=>this.solve()}
                >See if it's a Palindrome!</button>
                <span className="resultsBox">
                    {this.state.palindrome}
                </span>
            </div>
        )
    }
}

export default Palindrome;