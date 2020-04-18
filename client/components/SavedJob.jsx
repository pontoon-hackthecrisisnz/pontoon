import React from 'react';
import { connect } from 'react-redux'


class SavedJob extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }

    render() {

        {console.log('ho' + this.props.savedList)}

        return(
            <React.Fragment>
                <p> Under me is where the thing will go. </p>
                <div className="SavedJobs">
                    {this.props.savedList.map( savedJobs => {
                        
                        return(<li> You liked: {savedJobs.title} </li>)
                    })}
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs,
        savedList: state.savedList
    }
}

export default connect(mapStateToProps)(SavedJob)

