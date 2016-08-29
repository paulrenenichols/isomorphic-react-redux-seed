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
        <div className={'content hero'}>
        </div>
        <section className={'tiles'}>
          <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-1.jpg" alt /></div>
          <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-2.jpg" alt /></div>
          <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-3.jpg" alt /></div>
          <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-4.jpg" alt /></div>
          <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-5.jpg" alt /></div>
          <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-1.jpg" alt /></div>
          <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-2.jpg" alt /></div>
          <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-3.jpg" alt /></div>
          <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-4.jpg" alt /></div>
        </section>
        <div className={'socialBar'}>
          <h3>Social Footer</h3>
          <br />
          <div>
            <a href="https://twitter.com/"><img title="Twitter" className={'socialIcon'} src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/twitter-48.png" alt="Twitter" /></a>
            <a href="https://www.facebook.com/"><img title="Facebook" className={'socialIcon'} src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/facebook-48.png" alt="Facebook" /></a>
            <a href="mailto: jason@howdy.design"><img title="Email" className={'socialIcon'} src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/mail-48.png" alt="Email" /></a>
            <a href="https://www.instagram.com/"><img title="Instagram" className={'socialIcon'} src="https://cdn3.iconfinder.com/data/icons/social-circle/512/social_6-48.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>
    );
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
