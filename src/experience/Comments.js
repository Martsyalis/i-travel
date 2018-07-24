import React, { PureComponent } from "react";
import io from "socket.io-client";
const socket = io();

export default class Comments extends PureComponent {
  render() {
    const { comments, onPost } = this.props;

    return (
      <div style={{ border: "1px solid grey" }}>
        {comments &&
          comments.map(({ user, comment }, i) => (
            <div key={i}>
              <p>
                <span style={{ fontWeight: "bold" }}>{user} </span>
                {comment}
              </p>
            </div>
          ))}

        <form
          onSubmit={event => {
            event.preventDefault();
            const { target: form } = event;
            socket.on("chat", msg => {
              this.props.loadExp();
            });
            onPost(form.elements.comment.value);
            form.reset();
          }}
        >
          <input name="comment" placeholder="Enter Your Comment Here" />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}
