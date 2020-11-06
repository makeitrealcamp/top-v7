import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import Form from './components/Form';
import Products from './components/Products';
import './App.css';
import { data } from './data';

class App extends Component {
  state = {
    name: '',
    description: '',
    price: 0,
    products: data,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name, description, price } = this.state
    const newProduct = {
      id: uuid(),
      name,
      description,
      price,
    };

    this.setState({
      // products: this.products.concat(newProduct)
      products: [ newProduct, ...this.state.products ]
    })
  }

  handleDeleteProduct = id => e => {
    this.setState({
      products: this.state.products.filter(product => product.id !== id)
    })
  }

  render() {
    const { name, description, price, products } = this.state;
    return (
      <div className="App">
        <Form
          name={name}
          description={description}
          price={price}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Products
          products={products}
          handleDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
