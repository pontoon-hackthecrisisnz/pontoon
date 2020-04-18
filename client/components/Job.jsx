import React from 'react';
import { connect } from 'react-redux'


class Job extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentJob: 1
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            currentJob: this.state.currentJob + 1
        })
    }

    render() {
        return(
            <div className="jobCard">

                    {this.props.jobs.map((job, i) => {
                        if (job.id == this.state.currentJob) {
                            
                            return (
                                <div className="jobInfo">
                                    <h3> {job.title} </h3>
                                    <p> {job.description} </p>
                                    <p> {job.region} </p>
                                    <p> {job.town} </p>
                                </div>
                            )
                        }
                    })} 

                <div>
                    <button onClick={this.handleClick}> Click me slag </button>
                    <button onClick={this.handleClick}> Don't click me! </button>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs
    }
}


export default connect(mapStateToProps)(Job)

