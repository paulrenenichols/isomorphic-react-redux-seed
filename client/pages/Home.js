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

class Home extends Component {

  render() {
    return (
      <div className={'appContainer'}>
        <div className={'content hero'}>
          Home
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={'socialBar'}>
          <h3>Social Footer</h3>
          <br />
          <div>
            <a href="https://twitter.com/"><img title="Twitter" className={'socialIcon'} src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/twitter-48.png" alt="Twitter" /></a>
            <a href="https://www.facebook.com/"><img title="Facebook" className={'socialIcon'} src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/facebook-48.png" alt="Facebook" /></a>
            <a href="mailto: jason@howdy.design"><img title="Email" className={'socialIcon'} src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/mail-48.png" alt="Email" /></a>
            <a href="www.instagram.com/"><img title="Instagram" className={'socialIcon'} src="https://cdn3.iconfinder.com/data/icons/social-circle/512/social_6-48.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>
    );
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
