import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavLinkWrap extends PureComponent {
  render() {
    return (
      <NavLink
        to={this.props.to}
        activeClassName="active"
        className="navbar-item"
      >
        {this.props.to === '/' ? (
          <img src={require('../resources/logo.png')} alt="Travel_Share Logo" />
        ) : (
          this.props.to.charAt(1).toUpperCase() + this.props.to.slice(2)
        )}
      </NavLink>
    );
  }
}

export default withRouter(NavLinkWrap);
