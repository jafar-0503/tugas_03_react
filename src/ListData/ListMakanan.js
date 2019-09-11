import React, {Component} from 'react';

class ListMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.daftarMenu
    };
  }

    render(){
      return(
        <div>
          <img src={this.props.daftarMenu} alt="Product Makanan" width='150' />
        </div>
      )
    }
}

export default ListMakanan;
