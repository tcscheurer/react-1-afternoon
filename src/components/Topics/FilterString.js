import React, {Component} from 'react';

class FilterString extends Component {

    constructor(props){
        super(props)

        this.state = {
            unFilteredArray: ["Trevor","Dog","Fun","What","Is","Sleep"],
            userInput: '',
            filteredArray: []
        }

        //Used explicit binding in this example for learning purposes
        this.handleUI = this.handleUI.bind(this)
        this.solve = this.solve.bind(this)
    }

    handleUI(event){
        this.setState({
            userInput: event.target.value
        })
    }

    solve(){
        let a = [];
        for(let i=0;i<this.state.unFilteredArray.length;i++){
            if((this.state.unFilteredArray[i].includes(this.state.userInput)) === false){
                a.push(this.state.unFilteredArray[i]);
            }
        }
        this.setState({
            filteredArray: a
        })
    }


    render() {

        return(
           <div className="puzzleBox filterStringPB">
               <h4>FilterString</h4>
               <span className="puzzleText">
                   {this.state.unFilteredArray}
               </span>
               <input className="inputLine"
                onChange={this.handleUI}
               ></input>
               <button className="confirmationButton"
                onClick={this.solve}
               >Pull out a word in the string!</button>
               <span className="resultsBox filterStringRB">
                   {this.state.filteredArray}
               </span>
           </div>

        )
    }
}

export default FilterString;