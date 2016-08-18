// core modules
import React, { Component }                         from 'react';
import { connect }                                  from 'react-redux';

import selectors                                    from '../selectors/index';

import events                                       from '../events/index';

import Actions                                      from '../actions/index';


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class App extends Component {

  render() {
    return (
      <div className={'appContainer'}>
        Text
      </div>
    );
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
