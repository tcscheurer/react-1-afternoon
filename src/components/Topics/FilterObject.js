import React, {Component} from 'react';

class FilterObject extends Component {

    constructor(){
        super()

        this.state = {
            unFilteredArray:[
                {name: 'Trevor', food: 'Pizza'},
                {name: 'Johnathan', food: 'Burger'}, 
                {name: 'Chance', food: 'Pasta'}
            ],
            userInput: '',
            filteredArray: []
        }
        
        this.solve = this.solve.bind(this)
    }

    solve(){
        let a = [];
        for(let i=0;i<this.state.unFilteredArray.length;i++){
            for(let k in this.state.unFilteredArray[i]){
                if(k === this.state.userInput){
                    a.push(this.state.unFilteredArray[i])
                }
            }
        }
        this.setState({
            filteredArray: a
        })
    }

    handleInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    render() {
        return(
           <div className="puzzleBox filterObjectPB">
               <h4>Filter Object</h4>
               <span className="puzzleText">
                   {JSON.stringify(this.state.unFilteredArray, null, 10)}
               </span>
               <input className="inputLine"
                onChange={(e)=>this.handleInput(e)}
                ></input>
               <button className="confirmationButton"
               onClick={this.solve}
               >Look for the KEY!</button>
               <span className="resultsBox filterObjectRB">
                   { JSON.stringify(this.state.filteredArray, null, 10) }
               </span>
           </div>
        )
    }
}

export default FilterObject;