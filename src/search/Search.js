import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadSearch } from './actions';
import stock from '../home/favicon.png';

export class Search extends PureComponent {
    
  handleSearch = event => {
    event.preventDefault();
    const { elements } = event.target;
    const query = `?location=${elements.location.value}&tag=${elements.tag.value}`;
    this.props.loadSearch(query);
  };

  render() {
    return (
      <div>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h2 className="title">Search</h2>
            </div>
          </div>
        </section>
        <div className="level">
          <form className="level-item" onSubmit={this.handleSearch}>
            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input name="location" placeholder="location" />
              </div>
            </div>
            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input name="tag" placeholder="tag" />
              </div>
            </div>
            <button type="submit">Search</button>
          </form>
        </div>
        {this.props.search.length !== 0 ? (
          <div>
            <ul style={{ display: 'flex' }}>
              {this.props.search.map((exp, i) => (
                <div key={i}>
                  {exp.images && exp.images[0] && 
              <div>
                <Link to={`experiences/${exp._id}`}><img style={{ objectFit:'cover',width: '200px',height: '120px', margin: '10px' }} src={exp.images[0].imageURI} alt={exp.images[0].caption}/></Link>
              </div>
                  }
                  {exp.images && !exp.images[0] &&
              <div>
                <div>
                  <Link to={`experiences/${exp._id}`}><img style={{ objectFit:'cover',width: '150px',height: '120px', margin: '10px' }} src={stock} alt='none'/></Link>
                </div>
                <p style={{ textAlign:'center' }}>{exp.location}</p>
              </div>
                  }
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <div> No results </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, search: state.search }),
  { loadSearch }
)(Search);