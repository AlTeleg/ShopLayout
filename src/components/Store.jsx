import { Component } from "react";

import CardsView from "./CardsView"
import IconSwitch from "./IconSwitch"
import ListView from "./ListView"

 export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLayout: 'view_module'
    };
    // this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch = () => {
    this.setState(prevState => ({
      selectedLayout: prevState.selectedLayout === 'view_module' ? 'view_list' : 'view_module'
    }));
  }
  
  render() {
    const { products } = this.props;
    const { selectedLayout } = this.state;

    return (
      <div className='shop-div'>
        <IconSwitch icon={selectedLayout} onSwitch={this.onSwitch}/>
        {selectedLayout === 'view_module' ? (
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </div>
    )
  }
}

