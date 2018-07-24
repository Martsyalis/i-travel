import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { loadFeed } from "./actions";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Feed extends PureComponent {
  componentDidMount() {
    this.props.loadFeed();
  }

  render() {
    if (!this.props.feed) return <div>No Experiences have been posted yet</div>;

    return (
      <FeedDiv>
        {this.props.feed.filter(exp => exp.images.length > 0).map(exp => (
          <Link key={exp._id} to={`experiences/${exp._id}`}>
            <StyledImg
              src={exp.images[0].imageURI}
              alt={exp.images[0].caption}
            />
          </Link>
        ))}
      </FeedDiv>
    );
  }
}

export default connect(
  state => ({ feed: state.feed }),
  { loadFeed }
)(Feed);

const StyledImg = styled.img`
  height: 200px;
  margin: 1% 0;
  width: 240px;
  objectfit: "cover";
`;

const FeedDiv = styled.div`
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-areas: "a a a";
  grid-gap: 20px;
  grid-auto-columns: 250px;
`;
