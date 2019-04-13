import React, { Component } from 'react';
import TextInput from './TextInput';
import validate from './../logic/validate';


class FormContainer extends Component {
  
  constructor () {
    super();
      this.state = {
          formControls: {
              email: {
                value: '',
                placeholder:'Email',
                valid: false,
                touched: false,
                validationRules: {
                  minLength: 7,
                  isRequired:true
                }
              },
              name: {
                value: '',
                placeholder:'Name',
                valid: false,
                touched: false,
                validationRules: {
                  minLength: 3,
                  isRequired:true
                }
              },
              password: {
                value: '',
                placeholder:'Password',
                valid: false,
                touched: false,
                validationRules: {
                  minLength: 6,
                  isRequired:true
                }
              }
          },
          formValidation: false
      }
    
  }
  
  changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;
      const updatedControls = {
        ...this.state.formControls
      };
      const updatedFormElement = {
        ...updatedControls[name]
      };
      updatedFormElement.value = value;
      updatedFormElement.touched = true;
      updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
      updatedFormElement.valid.toString();

      updatedControls[name] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }

      this.setState({
        formControls: updatedControls
      }, ()=> {
        this.setState({ formValidation:formIsValid })
      });
   

  }

  
   render() {
      return (
          <form>

              <TextInput type="email" 
                placeholder={this.state.formControls.email.placeholder}
                name="email" 
                value={this.state.formControls.email.value} 
                onChange={this.changeHandler}
                touched={this.state.formControls.email.touched}
                valid={this.state.formControls.email.valid} 
                
              />

              <TextInput name="name" 
                placeholder={this.state.formControls.name.placeholder}
                value={this.state.formControls.name.value}
                onChange={this.changeHandler}
                touched={this.state.formControls.name.touched}
                valid={this.state.formControls.name.valid}
                
                />    

              <TextInput type="password" 
                placeholder={this.state.formControls.password.placeholder}
                name="password" 
                value={this.state.formControls.password.value} 
                onChange={this.changeHandler} 
                touched={this.state.formControls.password.touched}
                valid={this.state.formControls.password.valid}
                
              />

                <button onClick={this.formSubmitHandler} 
                 disabled={!this.state.formValidation}> Submit
                </button>

          </form>      
      );
  }

}


export default FormContainer;