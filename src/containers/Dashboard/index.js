/*
 *
 * Dashboard
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { onLoadDashboard } from './actions';

export class Dashboard extends React.Component {
  componentDidMount() {}

  render() {
    const { onLoadDashboard, dashboard } = this.props;

    return (
      <div className='dshboard' onClick={onLoadDashboard}>
        <h1>Dashboard Page</h1>
        <p>
          {dashboard.isDashboardLoaded
            ? 'Dashboard is clicked '
            : 'Dashboard is not clicked'}
        </p>
      </div>
    );
  }
}

const mapDispachToProps = dispatch => {
  return {
    onLoadDashboard: () => dispatch(onLoadDashboard())
  };
};

const mapStateToProps = state => ({
  app: state.getIn(['app']),
  dashboard: state.getIn(['dashboard'])
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Dashboard);
