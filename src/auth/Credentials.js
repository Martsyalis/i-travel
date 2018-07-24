import React from 'react';

export default class Credentials extends React.PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    const { elements } = e.target;
    const data = {};
    if (this.props.allowName) data.name = elements.name.value;
    data.email = elements.email.value;
    data.password = elements.password.value;
    this.props.submit(data);
  };

  render() {
    return (
      <form
        style={{ margin: 'auto', width: '30%' }}
        onSubmit={this.handleSubmit}
      >
        {this.props.allowName && (
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input name="name" className="input" type="text" />
            </div>
          </div>
        )}
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input name="email" className="input" type="text" />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input type="password" name="password" className="input" />
          </div>
        </div>
        <button>{this.props.action}</button>
      </form>
    );
  }
}
