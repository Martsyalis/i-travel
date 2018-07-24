import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { loadExpByUser, deleteExp } from "../experience/actions";
import { Link } from "react-router-dom";
import stock from "./favicon.png";
import { Hero } from "../commonComponents/common";
import styled from "styled-components";

class Home extends PureComponent {
  componentDidMount() {
    this.props.loadExpByUser(this.props.user._id);
  }

  handleDelete = id => {
    this.props.deleteExp(id);
  };
  render() {
    const expByUser = this.props.user.experiences;
    if (!expByUser) return <div />;
    return (
      <div>
        <Hero title="Shared Experiences" />
        <h4>Here are Experiences you've shared</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GridDiv>
            {expByUser.map((exp, i) => (
              <div key={i}>
                <div>
                  <Link to={`experiences/${exp._id}`}>
                    <img
                      style={{
                        objectFit: "cover",
                        width: "200px",
                        height: "120px",
                        margin: "10px"
                      }}
                      src={
                        exp.images && exp.images[0]
                          ? exp.images[0].imageURI
                          : stock
                      }
                      alt={
                        exp.images && exp.images[0]
                          ? exp.images[0].caption
                          : "stock image"
                      }
                    />
                  </Link>
                  <button
                    className=" delete"
                    onClick={() => this.handleDelete(exp._id)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </GridDiv>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExpByUser, deleteExp }
)(Home);

const GridDiv = styled.div`
  height: 100px;
  display: grid;
  grid-template-areas: "a a a";
  grid-gap: 10px;
  grid-auto-columns: 250px;
`;
