import React, {Component} from 'react';

export default class LoadMoreBlock extends Component{
    state = {
        block : [ "","","","",""]
    }

    addedBloks =()=> {

        for(let i=0; i<5; i++){
            this.state.block.push(" ");
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div>
                <div className="container-box">
                    {this.state.block.map(function(item){
                        return <div className="block">{item}</div>}
                    )}
                </div>
                <button onClick={this.addedBloks}> Load More</button>

            </div>
        );
    }

}