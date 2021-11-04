import React from 'react';

import Header from './Header';

const Layout = ({ component: children }) => (
   <div className="layout">
      <Header />
      <main className="main">{children}</main>
   </div>
);

export default Layout;
