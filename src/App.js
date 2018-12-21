import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';
import { updateProduct } from './actions/product-actions';
import { watchFetchProducts } from './saga/saga';

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onProductReducer = this.onProductReducer.bind(this);
    // this.dogAction = this.dogAction.bind(this);
  }
  onUpdateUser(event){
      this.props.onUpdateUser(event.target.value);
  }

  onProductReducer(){
    this.props.onProductReducer('tytytyty');
  }
  // dogAction(){
  //   this.props.dogAction()
  // }
  render() {
    console.log( this.props )
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input onChange = { this.onUpdateUser } /> { this.props.user }
          <div onClick={ this.dogAction }> Action </div>

        </header>
      </div>
    );
  }
}
const mapStateToProps = dispatch => ({
  products: dispatch.products,
  user: dispatch.user,
  //dogAction: requestDog
});

const mapActionsToProp = {
  onUpdateUser: updateUser,
  onProductReducer: updateProduct,
  //dogAction: requestDog
}
export default connect(mapStateToProps, mapActionsToProp) (App);
