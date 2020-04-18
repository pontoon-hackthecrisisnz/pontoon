import React from 'react';
import { connect } from 'react-redux'
import { addLikedJob } from '../actions/savedList'

class Job extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentJob: 1
        }
    }

    handleClick = () => {
        this.setState({
            currentJob: this.state.currentJob + 1
        })
    }

    likeJob = (job) => {
        console.log('dispatching:' + job.title)
        this.props.dispatch(addLikedJob(job))
        this.handleClick()
    }

    render() {
        return(
            <div className="jobCard">

                    {this.props.jobs.map((job, i) => {
                        if (job.id == this.state.currentJob) {
                            
                            return (
                                <React.Fragment key={i}>
                                    <div  className="jobInfo">
                                        <h3> {job.title} </h3>
                                        <p> {job.description} </p>
                                        <p> {job.region} </p>
                                        <p> {job.town} </p>
                                    </div>

                                    <div>
                                        <button onClick={() => this.likeJob(job)}> ✓ </button>
                                        <button onClick={this.handleClick}> X </button>
                                    </div>
                                </React.Fragment>

                            )
                        }
                    })} 


            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs,
        savedList: state.savedList
    }
}


export default connect(mapStateToProps)(Job)

