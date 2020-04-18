import React from 'react';
import { connect } from 'react-redux'
import { returnJob } from '../actions/jobs'
import { addUser } from '../actions/user'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //name: '',
            //region: '',
            town: '',
            lastJob: '',
            //minSalary: ''
        }
    }

    validate = (e) => {
        if (this.state.town.length < 1) {
            alert('No fields can be empty.')
        } else if (this.state.lastJob.length < 1) {
            alert('No fields can be empty.')
        } else {
            this.handleSubmit(e)
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addUser(this.state))
        this.props.dispatch(returnJob(this.state.town, this.state.lastJob))
    }

    render() {
        return(
            <div className="register">

                <form>
                    {/* <input type='text' placeholder='name' name='name' onChange={this.handleChange} /> */}
                    {/* <input type='text' placeholder='region' name='region' onChange={this.handleChange} /> */}
                    <input type='text' placeholder='town' name='town' onChange={this.handleChange} />
                    <input type='text' placeholder='Latest Job' name='lastJob' onChange={this.handleChange} />
                    {/* <input type='text' placeholder='minimum salary' name='minSalary' onChange={this.handleChange} /> */}
                    <input  type="submit" onClick={this.validate} />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jobs
    }
}

export default connect(mapStateToProps)(Register)


