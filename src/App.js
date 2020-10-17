/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
// // import routes from './config/routes';

// const isUserAuthenticated = false;

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         if (isUserAuthenticated) {
//           return <Component />;
//         }
//         return <Redirect to="/login" />;
//       }}
//     />
//   );
// };

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
