import React from 'react';
import { connect } from 'react-redux'


class SavedJob extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            lookingAtJobs: false
        }
    }

    render() {

        {console.log('this should be reaching a saved list: ' + this.props.savedList)}

        return(
            <React.Fragment>
                <div className="SavedJobs">
                    {this.props.savedList.map( savedJob => {
                        
                        return (<li> You liked: {savedJob.ad_title} </li>)
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

