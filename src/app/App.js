import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';
import Routes from './Routes';
import Header from './Header';
import Loading from './Loading';
import Error from './Error';

export class App extends Component {
  componentDidMount() {
    this.props.checkForToken();
  }

  render() {
    const { checkedToken, loading, error } = this.props;
    return (
      <Router>
        <div>
          { checkedToken &&
            <div className="App">
              <Header/>
              <main>
                <Routes/>
              </main>
            </div>
          }
          {loading && <Loading/>}
          {error && <Error/>}
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    checkedToken: state.auth.checkedToken,
    loading: state.loading,
    error: state.error
  }),
  { checkForToken }
)(App);