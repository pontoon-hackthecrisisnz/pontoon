import React from 'react';
import { connect } from 'react-redux'
import { addLikedJob } from '../actions/savedList'

class Job extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentJob: 1,
            listOpen: false
        }
    }

    handleClick = () => {
        this.setState({
            currentJob: this.state.currentJob + 1
        })
    }

    likeJob = (job) => {
        console.log('dispatching:' + job.ad_title)
        this.props.dispatch(addLikedJob(job))
        this.handleClick()
    }

    toggleSavedList = () => {
        console.log('toggle')
        if (this.state.listOpen == false) {
            this.setState({listOpen: true})
        } else if (this.state.listOpen == true) {
            this.setState({listOpen: false})
        } else {
            console.log("You found the hidden dev message. Message Sebastian Kloogh on slack for $300!")
        }
    }

    render() {
        return(
            <div className="jobCard">
                     
                {this.props.jobs.map((job, i) => {
                        if (i == this.state.currentJob) {
                            
                            return (
                                <React.Fragment key={i}>
                                    <div  className="jobInfo">
                                        <h3> {job.ad_title} </h3>
                                        <h4> {job.company} </h4>
                                        <h4> {job.contract_type} </h4>
                                        <p> {job.ad_description} </p>
                                        <p> {job.ad_region} </p>
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

                    { this.state.listOpen ? 
                        <div>
                            <button onClick={this.toggleSavedList}> Close Prospects </button>
                            <div className="SavedJobs">
                                {this.props.savedList.map( savedJob => {
                                    return (<li> You liked: {savedJob.ad_title} </li>)
                                })}
                            </div> 
                    </div> : <button onClick={this.toggleSavedList}> View Prospects </button>} 
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

/*



*/