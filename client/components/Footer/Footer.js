import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className={'socialBar'}>
        <h3>Social Footer</h3>
        <div>
          <a href="https://twitter.com/"><img title="Twitter" className={'socialIcon'} src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/twitter-48.png" alt="Twitter" /></a>
          <a href="https://www.facebook.com/"><img title="Facebook" className={'socialIcon'} src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/facebook-48.png" alt="Facebook" /></a>
          <a href="mailto: jason@howdy.design"><img title="Email" className={'socialIcon'} src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/mail-48.png" alt="Email" /></a>
          <a href="https://www.instagram.com/"><img title="Instagram" className={'socialIcon'} src="https://cdn3.iconfinder.com/data/icons/social-circle/512/social_6-48.png" alt="Instagram" /></a>
        </div>
      </div>
    );
  }
}

export default Footer;
