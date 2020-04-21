import React from 'react';
import { connect } from 'react-redux';
import { returnJob } from '../actions/jobs';
import { addUser } from '../actions/user';
import { Link } from 'react-router-dom';
import Job from './Job';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //name: '',
      //region: '',
      town: '',
      lastJob: '',
      //minSalary: ''
      isJobSeen: false,
    };
  }

  showCard = () => {
    this.setState({ isJobSeen: true });
  };

  validate = (e) => {
    if (this.state.town.length < 1) {
      alert('No fields can be empty.');
    } else if (this.state.lastJob.length < 1) {
      alert('No fields can be empty.');
    } else {
      this.handleSubmit(e);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addUser(this.state));
    this.props.dispatch(returnJob(this.state.town, this.state.lastJob));
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-container">
          <form className="job-form">
            <input
              type="text"
              placeholder="Region"
              name="town"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Latest Job"
              name="lastJob"
              onChange={this.handleChange}
            />

            <Link
              style={{ textDecoration: 'none' }}
              to="/searching"
              className="submit-button"
              type="submit"
              onClick={this.validate}
            >
              Submit
            </Link>
          </form>
        </div>
        <Job />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
  };
}

export default connect(mapStateToProps)(Register);
