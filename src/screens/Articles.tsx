import React, { Component } from 'react'
import Intro from './articles/Intro'
import { connect } from 'react-redux'
import { updateArticlesStage } from "../redux/actions"
import StallScreen from './articles/StallScreen'
import Stall from "../_models/StallModel";

interface ArticlesProps {
    stageNumber: number;
    updateArticlesStage: Function;
    stalls: Array<Stall>;
}

class Articles extends Component<ArticlesProps> {

    state = { stageNumber: this.props.stageNumber }

    nextStage = () =>{
        console.log("ok");
        console.log(this.props.stageNumber)
        var stageN = this.props.stageNumber + 1
        this.props.updateArticlesStage(stageN)
    }
    previousStage() {
        var stageN = this.props.stageNumber - 1
        this.props.updateArticlesStage(stageN)
    }

    render() {
        return (
            <div className="App">
                {
                    this.props.stageNumber === 0
                        ?
                        <Intro nextStage={this.nextStage}/>
                        :
                        <StallScreen />

                }
            </div>
        )
    }
}


const mapStateToProps = (state: any) => {
    return {
        stageNumber: state.stallsdata.stageNumber,
        stalls: state.stallsdata.stalls
    }
}

export default connect(mapStateToProps, { updateArticlesStage })(Articles);