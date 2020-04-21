import React from 'react';
import { connect } from 'react-redux';
import { addLikedJob } from '../actions/savedList';

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJob: 1,
      listOpen: false,
    };
  }

  handleClick = () => {
    this.setState({
      currentJob: this.state.currentJob + 1,
    });
  };

  likeJob = (job) => {
    console.log('dispatching:' + job.ad_title);
    this.props.dispatch(addLikedJob(job));
    this.handleClick();
  };

  toggleSavedList = () => {
    console.log('toggle');
    if (this.state.listOpen == false) {
      this.setState({ listOpen: true });
    } else if (this.state.listOpen == true) {
      this.setState({ listOpen: false });
    } else {
      console.log(
        'You found the hidden dev message. Message Sebastian Kloogh on slack for $300!'
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="">
          {this.props.jobs.map((job, i) => {
            if (i == this.state.currentJob) {
              return (
                <React.Fragment key={i}>
                  <div className="">
                    <div className="">
                      <h3> {job.title} </h3>
                      <p className=""> {job.company} </p>
                      <p className=""> {job.contract_type} </p>
                      <p> {job.description} </p>
                      <p> {job.region} </p>
                      <p> {job.town} </p>
                    </div>

                    <div className="">
                      <div
                        className=""
                        onClick={() => this.likeJob(job)}
                      >
                        {' '}
                        ✓{' '}
                      </div>
                      <div
                        className=""
                        onClick={this.handleClick}
                      >
                        {' '}
                        ✘{' '}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="">
          <button className="" onClick={this.toggleSavedList}>
            {' '}
            ☰{' '}
          </button>
          {this.state.listOpen ? (
            <div>
              <h1> hiii </h1>
              <div className="">
                <p className="" onClick={this.toggleSavedList}>
                  {' '}
                  ✘{' '}
                </p>
                {this.props.savedList.map((savedJob) => {
                  return (
                    <li>
                      {' '}
                      <a href={savedJob.link}>
                        {' '}
                        {savedJob.title} from{' '}
                        {savedJob.company
                          ? savedJob.company
                          : 'an unlisted company.'}{' '}
                      </a>{' '}
                    </li>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    savedList: state.savedList,
  };
}

export default connect(mapStateToProps)(Job);

/*



*/
