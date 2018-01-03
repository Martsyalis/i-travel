import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class NavLinkWrap extends PureComponent{
  render() {
    return (
      <NavLink to ={this.props.to}
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
        className="navbar-item"
      >
        {this.props.to === '/home'
          ? <img src={require('../resources/logo.png')} alt='Travel_Share Logo'/>
          : this.props.to.charAt(1).toUpperCase() + this.props.to.slice(2)
        }
      </NavLink>
    );
  }
}

export default withRouter(NavLinkWrap);