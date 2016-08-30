import React, { Component }       from 'react';
import { Provider }               from 'react-redux';

import { Router,
         Route,
         browserHistory }               from 'react-router';

import { syncHistoryWithStore }         from 'react-router-redux';

import Pages                            from '../pages/index';

export default class Root extends Component {

  constructor(props) {
    super(props);

    this.history = syncHistoryWithStore(browserHistory, this.props.store, {
      selectLocationState: state => state.get('routing')
    });
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={this.history}>
          <Route path="/" component={Pages.Home}/>
          <Route path="/about" component={Pages.About}/>
          <Route path="*" component={Pages.NoMatch}/>
        </Router>
      </Provider>
    );
  }
}
