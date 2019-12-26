import React, { Component } from "react";

class MenuInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      price: 0,
      menuKey: 0
    }
  };

  handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    const { name, price } = this.props.info;

    return (
      <div style={style}>
        <span>
          <b>{name}</b>
        </span>
        &nbsp;&nbsp;&nbsp;
        <span>{price}</span>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.handleRemove}>삭제</button>
        &nbsp;
        <button onClick={this.handleRemove}>결품</button>
      </div>
    );
  }
}

export default MenuInfo;
