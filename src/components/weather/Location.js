import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchLocationsData from '../../actions/getLocation';

import Weather from './Weather';

class Location extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchLocationsData();
  }

  render() {
    const { props } = this.props;
    return (
      <div>
        <Weather locations={props.locations} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    locations: state.locations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLocationsData: bindActionCreators(fetchLocationsData, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
