import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Filters from './Filters';
import Flights from './Flights';
import TableContainer from './TableContainer';

export class AppContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="container">
        <Filters/>
        <Flights/>
        <TableContainer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(AppContainer);
