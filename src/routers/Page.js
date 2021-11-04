import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../layout/Main';

const Page = ({ component: Component, ...rest }) => (
   <Route
      {...rest}
      render={(props) => (
         <Layout>
            <Component {...props} />
         </Layout>
      )}
   />
);

export default Page;
