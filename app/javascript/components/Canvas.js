import React, {Component} from "react";

class Canvas extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = "40px Courier";
      ctx.fillText(this.props.text, 210, 75);
    };
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <img
          ref="image"
          src={"https://miro.medium.com/max/1482/1*W1IPZj18aerIffSO321a2w.png"}
          className="d-none"
        />
      </div>
    );
  }
}

export default Canvas;
