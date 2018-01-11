import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadSearch } from './actions';
import styled from 'styled-components';
import { InputField, Hero } from '../commonComponents/common';
import { CLIENT_RENEG_LIMIT } from 'tls';

class Results extends PureComponent {

  render() {
    const { results } = this.props;
    if(!results) return <div> No Matching Experiences found </div>;
    return (
      <ResultsDiv>
        {results.filter(exp => exp.images.length > 0).map(exp =>(
          <Link key={exp._id} to={`experiences/${exp._id}`}>
            <StyledImg src={exp.images[0].imageURI} alt={exp.images[0].caption}/>
          </Link>
        ))}
      </ResultsDiv>
    );
  }
}
export class Search extends PureComponent {
  componentDidMount() {
    this.props.loadSearch();
  }
    
  handleSearch = event => {
    event.preventDefault();
    const { elements } = event.target;
    const query = `?location=${elements.location.value}&tag=${elements.tags.value}`;
    this.props.loadSearch(query);
  };

  render() {
    return (
      <div>
        <Hero title='Search'/>
        <div className="level">
          <form className="level-item" onSubmit={this.handleSearch}>
            <InputField fieldName="location"/>
            <InputField fieldName="tags"/>
            <button type="submit">Search</button>
          </form>
        </div>
        <div style={{ display: 'flex', justifyContent:'center' }}>
          <Results results ={this.props.search}/>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, search: state.search }),
  { loadSearch }
)(Search);

const ResultsDiv = styled.div`
height: 100px;
display: grid;
grid-template-areas: "a a a";
grid-gap: 10px;
grid-auto-columns: 250px;
`;

const StyledImg = styled.img`
height: 200px;
margin: 1% 0;
width: 300px;
objectFit: 'cover';
`;