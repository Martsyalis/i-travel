import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import  NavLinkWrap from './NavLinkWrap';
import { NavLink, withRouter } from 'react-router-dom';
import { signout } from '../auth/actions';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <nav className="breadcrumb">
            <NavLinkWrap to="/home"/>
            <NavLinkWrap to="/search"/>            
            <NavLinkWrap to="/upload"/>
            <NavLinkWrap to="/shared"/>
            {this.props.user 
              ? <NavLink to="/" onClick={this.props.signout}> Sign Out </NavLink>
              : <NavLink to="/auth/signin"> Sign In </NavLink>
            }
        </nav>
      </div>
    );
  }
}

export default withRouter(connect(state => ({ user: state.auth.user }), { signout }) (Header));