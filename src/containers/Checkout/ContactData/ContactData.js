import React, { Component } from 'react';
import Button from './../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from './../../../axios-orders';
import Spinner from './../../../components/UI/Spinner/Spinner';
import Input from './../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elemtType: 'input',
        elemtConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: ''
      },
      street: {
        elemtType: 'input',
        elemtConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elemtType: 'input',
        elemtConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: ''
      },
      country: {
        elemtType: 'input',
        elemtConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },
      email: {
        elemtType: 'input',
        elemtConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: ''
      },
      deliveryMethod: {
        elemtType: 'select',
        elemtConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: ''
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      });
  }

  render () {
    let form = (
      <form>
        <Input elemtType="..." elemtConfig="..." value="..." />
        <Input inputtype="input" type="email" name="email" placeholder="Your mail" />
        <Input inputtype="input" type="text" name="street" placeholder="Street" />
        <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
