import React        from 'react';
import ReactDOM     from 'react-dom';

import Pages        from '../pages/index';
import Root         from '../containers/Root';

export const routes = {
  path: '/',
  async action({ next }) {
    const component = await next();
    if (component !== undefined) return {component};
  },
  children: [
    { path: '/', action: () => <Root><Pages.Home /></Root> },
    { path: '/about', action: () => <Root><Pages.About /></Root> }
  ]
};

export function createRouterRender(container) {
  return function routerRender(component) {
    return new Promise(resolve => {
      ReactDOM.render(component, container, resolve.bind(undefined, true));
    });
  };
}
