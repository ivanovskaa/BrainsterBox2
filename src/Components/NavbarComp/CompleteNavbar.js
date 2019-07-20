import React from 'react';
import '../NavbarComp/CompleteNavbar.css';
import NavigationBar from '../NavbarComp/Navbar/Navbar';
import BurgerManu from '../NavbarComp/BurgerManu/BurgerManu';
import OpacityBg from '../NavbarComp/OpacityBg/OpacityBg';

// Parent Component for Navbar Component and BurgerManu Component
class CompleteNavbar extends React.Component {
  constructor() {
    super();
    this.state = {
      BurgerManuON: false,
    }
  }
// Function for showing/ opening BurgerManu Component on button click
  BurgerManuToggleShow = () => {
    this.setState({
      BurgerManuON: true
    });
  }
// Function for hiding/ closing BurgerManu Component on button click
  BurgerManuToggleHide = (props) => {
    this.setState({
      BurgerManuON: false
    });
  }

  render() {
    return (
      <div className="CompleteNavbar">
        <NavigationBar BurgerManuClickHandler01={this.BurgerManuToggleShow} />
        {(this.state.BurgerManuON) ?
          [<BurgerManu BurgerManuClickHandler02={this.BurgerManuToggleHide} />, <OpacityBg />] : ''
        }
      </div>
    );
  }
}

export default CompleteNavbar;

