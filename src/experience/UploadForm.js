import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addExperience } from './actions';


// const FieldControl = ({ children }) => {
//   return (
//     <div className="field">
//       <div className="control">
//         {children}
//       </div>
//     </div>
//   );
// };

const InputField = ({ fieldName }) => (
  <div className="field">
    <div className="control">
      <input
        name= {fieldName}
        className="input"
        type="text"
        placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
      />
    </div>
  </div>
);

export class UploadForm extends PureComponent {

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
    this.props.addExperience(exp).then(({ _id }) => {
      this.props.history.push(`/experiences/${_id}`);
    });
  };

  render() {
    return (
      <div>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">New Experience</h1>
            </div>
          </div>
        </section>
        <div className="level">
          <form className="level-item" onSubmit={this.handleExpPost}>
            <InputField fieldName="title"/>
            <InputField fieldName="description"/>
            <InputField fieldName="location"/>
            <InputField fieldName="tags"/>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  { addExperience }
)(UploadForm);