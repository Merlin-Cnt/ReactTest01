import React, { Component } from "react";

class PosMenuInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      price: 0,
      menuKey: 0
    }
  };

  handleOnSelect = data => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { handleAddMenu } = this.props;
    handleAddMenu(data);
  };

  render() {
    const style2 = {
      display: "inline-block",
      boder: "1px solid black",
      padding: "8px",
      margin: "8px",
      background: "#cce6ff"
    };

    const { name, price } = this.props.info;

    return (
      <span style={style2} onClick={this.handleOnSelect}>
        <div>
          <b>{name}</b>
        </div>
        <span>{price}</span>
      </span>
    );
  }
}

export default PosMenuInfo;
