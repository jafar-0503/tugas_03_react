import React, {Component} from 'react';

class MenuKontak extends Component {
  constructor() {
    super();
    this.state = {
      alamat: "Jl. Swadaya IV, Pd. Rangon Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
      kontak: "0857-7913-5418"
    };
  }
render(){
  return(
    <div>
    <center>
      <h3>{this.state.alamat}</h3>
      <h4>Kontak Kami: {this.state.kontak}</h4>
    </center>
    </div>
  )
}
}
export default MenuKontak;
