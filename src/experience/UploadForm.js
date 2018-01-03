import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addExperience } from './actions';
import { Redirect } from 'react-router-dom';

export class UploadForm extends PureComponent {
  state = {
    redirect: false
  };

  handleExpPost = event => {
    event.preventDefault();
    const { elements } = event.target;
    const exp = {
      title: elements.title.value,
      description: elements.description.value,
      location: elements.location.value,
      user: this.props.user._id,
      tags: elements.tags.value.split(' ')
    };
    this.props.addExperience(exp);
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                New Experience
              </h1>
              <h2 className="subtitle">
                Enter Details
              </h2>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="tile">
            <form onSubmit={this.handleExpPost}>
              <div className="field">
                <div className="control">
                  <input
                    name="title"
                    className="input"
                    type="text"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    name="description"
                    className="input"
                    type="text"
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    name="location"
                    className="input"
                    type="text"
                    placeholder="Location"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    name="tags"
                    className="input"
                    type="text"
                    placeholder="Tags"
                  />
                </div>
              </div>
              <button type="submit">Add</button>
            </form>
            {this.state.redirect && <Redirect to="/myExperiences" />}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ user: state.auth.user }), { addExperience })(
  UploadForm
);
