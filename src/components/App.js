import React from "react";
import Header from "./Header";
import Content from "./Content";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuKey: 3,
      menuList: [
        {
          menuKey: 0,
          name: "떡볶이",
          price: 2000,
          shortageFlag: false,
          deleteFlag: false
        },
        {
          menuKey: 1,
          name: "김밥",
          price: 2500,
          shortageFlag: false,
          deleteFlag: false
        },
        {
          menuKey: 2,
          name: "순대",
          price: 3000,
          shortageFlag: false,
          deleteFlag: false
        }
      ]
    };
  }

  updateMenuKey() {
    this.setState({
      menuKey: this.state.menuKey + 1
    });
  }

  updateMenuList() {
    this.setState({
      menuKey: this.state.menuKey + 1
    });
  }

  addMenuList(setName, setPrice) {
    this.updateMenuKey();
    this.setState({
      menuList: this.state.menuList.concat({
        id: this.state.menuKey,
        name: setName,
        price: setPrice
      })
    });
  }

  onRemove(menuKey) {}

  render() {
    return (
      <div>
        <div>
          <Header
            menuKey={this.state.menuKey}
            menuList={this.state.menuList}
            addMenu={this.addMenuList}
            onRemove={this.onRemove}
          />
        </div>
        <hr />

        <div>
          <Content
            menuKey={this.state.menuKey}
            menuList={this.state.menuList}
            addMenu={this.addMenuList}
            onRemove={this.onRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
