import React from "react";
import PosMenuInfo from "./PosMenuInfo";

class Header extends React.Component {
  static defaultProps = {
    list: [],
    handleAddMenu: data => this.handleAddMenu,
    addInfo: {
      name: "",
      price: 0,
      menuKey: 0
    }
  };

  state = {
    totalPrice: 0,
    addList: []
  };

  handleAddMenu = data => {
    alert("2");
    /*   
    const { addList } = this.state.addList;
    const { totalPrice } = this.state.totalPrice;
     
    this.setState({
      addList: addList.concat({
        menuKey: setMenuKey,
        name: setName,
        price: setPrice
      }),
      totalPrice: totalPrice + setPrice
    });
    */
  };

  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    const { menuList, handleAddMenu } = this.props;
    const list = menuList.map(info => (
      <PosMenuInfo key={info.id} info={info} handleAddMenu={handleAddMenu} />
    ));

    const { addList } = this.state.addList;
    const { totalPrice } = this.state.totalPrice;

    return (
      <div>
        <h1>POS</h1>
        <div style={style}>
          <span>
            메뉴리스트
            <div style={style}>{list}</div>
          </span>

          <span>
            선택메뉴
            <div style={style}>{addList}</div>
          </span>

          <span>
            합계
            <div style={style}>{totalPrice}</div>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
