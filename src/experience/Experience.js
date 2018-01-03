import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  loadExp,
  DeleteImage,
  addImageToExp,
  addCommentToExp
} from './actions';
import styled from 'styled-components';

export class Experience extends PureComponent {
  state = {
    index: 0
  };

  componentDidMount() {
    this.props.loadExp(this.props.id);
    this.startListener();
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleArrows);
  }

  startListener = () => {
    document.addEventListener('keydown', this.handleArrows);
  };

  handleArrows = ({ key }) => {
    if (key === 'ArrowLeft' && this.state.index !== 0) this.handleClick(-1);
    if (
      key === 'ArrowRight' &&
      this.state.index !== this.searchedExp().images.length - 1
    )
      this.handleClick(1);
  };

  handleClick = value => {
    const newState = {
      ...this.state,
      index: this.state.index + value
    };
    this.setState(newState);
  };

  handleCommentPost = event => {
    event.preventDefault();
    const { elements } = event.target;
    const post = {
      user: this.props.user.name,
      comment: elements.comment.value
    };
    this.props.addCommentToExp(this.props.id, post);
  };

  handleDelete = imageId => {
    this.props.DeleteImage(this.props.id, imageId);
  };

  handleImgPost = event => {
    event.preventDefault();
    const form = event.target;
    const image = new FormData(form);
    form.reset();
    this.props.addImageToExp(this.props.id, image);
  };

  searchedExp = () => {
    return this.props.exp.find(exp => exp._id === this.props.id);
  };

  render() {
    if (!this.searchedExp()) return <div>Page not available</div>;
    return (
      <div>
        <section className="hero is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{this.searchedExp().title}</h1>
              <h2 className="subtitle">{this.searchedExp().location}</h2>
            </div>
          </div>
        </section>
        { this.searchedExp().user.email === this.props.user.email
         && <button className="button" onClick={()=>{
           this.state.shouldDisplay
             ? this.setState({ shouldDisplay: false })
             : this.setState({ shouldDisplay: true });
         }}> AddImage </button>
        }
        <div>
          { this.state.shouldDisplay
           &&
          <form onSubmit={this.handleImgPost}> 
            <input
              type="file"
              name="image"
              accept=".jpg, .jpeg, .png, .svg" 
              placeholder="Insert file"
            />
            <input name="caption" placeholder="caption"/>
            <button type="submit">Add</button>
          </form>
          } 
        </div>
        <StyledDiv>
          {this.searchedExp().images
            ?(<div>
              {this.searchedExp().images.map((img, i, array) => (
                <ImgDiv key={img._id} shouldDisplay ={this.state.index === i}>
                  {i !== 0 && <StyledButton className="button" onClick ={()=> this.handleClick(-1)}> ◀</StyledButton>}
                  
                  <StyledImgDiv>
                    <img style={{ objectFit:'cover' }} src={img.imageURI} alt={img.caption}/>
                    <p style={{ marginLeft: '40%' }}> {img.caption} </p>
                  </StyledImgDiv>
                  <div>
                    { this.searchedExp().user.email === this.props.user.email
                     &&<DeleteButton className ="delete" onClick={() => this.handleDelete(img._id)}>X</DeleteButton>
                    }
                  </div>
                  { i !== array.length -1
                     && <StyledButton className="button" onClick ={()=> this.handleClick(1)}> ▶ </StyledButton>}
                </ImgDiv>
              ))}
            </div>)
            :<div> No images uploaded yet </div>
          }
          <h5> {this.searchedExp().description} </h5>
        </StyledDiv>
        <div>
          Tags:{this.searchedExp().tags
             && this.searchedExp().tags.map((tag, i) =>(<span key={i}>  {tag} </span>))}
          <h5> Have questions? shoot {this.searchedExp().user.name} an <a href={`mailto:${this.searchedExp().user.email}?Subject=Friend%20From%20iTravel`} target="_top">email</a></h5>
        </div>

        <div style={{ border:'1px solid grey' }}>
          {this.searchedExp().comments
           && this.searchedExp().comments.map((com, i) => (
             <div key={i}>
               <p><span style={{ fontWeight:'bold' }}>{com.user} </span>{com.comment}</p>
             </div>))}
          <form onSubmit={this.handleCommentPost}> 
            <input name="comment" placeholder="Enter Your Comment Here"/>
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

const StyledButton = styled.div`
margin-top: 30%;
margin-right: 2%;
`;

const StyledImgDiv = styled.div`
height: '30rem'
margin: auto;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
`;
const StyledDiv = styled.div`
width: 70%;
margin: auto;
display: 'flex';
justify-content: flex-center;

`;

const ImgDiv = styled.div`
  display: ${props => (props.shouldDisplay ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
  margin: 0 10%;
`;

const DeleteButton = styled.button`
  text-align: center;
`;

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExp, addImageToExp, DeleteImage, addCommentToExp }
)(Experience);
