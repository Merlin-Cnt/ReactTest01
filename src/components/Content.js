import React from "react";
import MenuInfo from "./MenuInfo";

class Content extends React.Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn("onRemove not defined")
  };

  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    const { menuList, onRemove } = this.props;
    const list = menuList.map(info => (
      <MenuInfo key={info.menuKey} info={info} onRemove={onRemove} />
    ));

    return (
      <div>
        <h2>메뉴관리</h2>

        <div style={style}>
          메뉴명 : <input type="text" id="menuName" />
          &nbsp; 금액 : <input type="text" id="menuPrice" />
          <button>등록</button>
        </div>
        <div style={style} id="menuList">
          {list}
        </div>
      </div>
    );
  }
}

export default Content;
