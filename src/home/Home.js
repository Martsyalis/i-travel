import React, { PureComponent } from 'react';
import Feed from './Feed';
import { connect } from 'react-redux';
import { loadExpByUser } from '../experience/actions';
import { updateProfile } from '../auth/actions';
import { Hero } from '../commonComponents/common';
const defaultImg = require('./latte.jpg');

export class Home extends PureComponent {
  state = { shouldDisplay: false };

  handleUserUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const profile = new FormData(form);
    form.reset();
    this.props.updateProfile(profile);
  };

  render() {
    return (
      <div>
        <Hero title="Home" />
        <div
          className="columns"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div>
            <div>
              <h2 className="title has-text-centered">
                {this.props.user.name}
              </h2>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  style={{
                    borderRadius: '50%',
                    width: '250px',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                  alt="avatar"
                  src={this.props.user.imageURI || defaultImg}
                />
              </div>
              <div className="buttons is-centered">
                <button
                  className="button"
                  onClick={() => {
                    this.state.shouldDisplay
                      ? this.setState({ shouldDisplay: false })
                      : this.setState({ shouldDisplay: true });
                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div>
              {this.state.shouldDisplay && (
                <form onSubmit={this.handleUserUpdate}>
                  <div className="control">
                    <div className="file">
                      <input
                        type="file"
                        name="image"
                        accept=".jpg, .jpeg, .png, .svg"
                      />
                    </div>
                  </div>
                  <div className="control">
                    <input
                      className="input"
                      name="name"
                      defaultValue={this.props.user.name}
                    />
                  </div>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      defaultValue={this.props.user.name}
                    />
                  </div>
                  <div className="buttons is-centered">
                    <button type="submit">Update</button>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div style={{ width: '5%' }} />
          <div>
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExpByUser, updateProfile }
)(Home);
