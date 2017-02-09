import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { reduxForm, reset } from 'redux-form';

class Feature extends Component {
  componentDidMount() {
    this.props.fetchTreeData();
  }

  handleFormSubmit(formProps) {
      console.log(formProps);
  }

  resetFormData(){
    this.props.resetForm('testform');
  }    

  render() {
        const { handleSubmit, load, pristine, reset, submitting,
            fields: { name, address1, address2, city, fstate, zipcode }} = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <h2 className="form-heading"> Input Form</h2>

                            <div className={`form-group ${name.touched && name.invalid ? 'has-error' : ''}`}>
                                <label className="control-label">Name :</label>
                                <input className="form-control" {...name} type="text" />
                                {name.touched && name.error && <div className="error">{name.error}</div>}
                            </div>

                            <div className={`form-group ${address1.touched && address1.invalid ? 'has-error' : ''}`}>
                                <label className="control-label">Address1 :</label>
                                <input className="form-control" {...address1} type="text" />
                                {address1.touched && address1.error && <div className="error">{address1.error}</div>}
                            </div>

                            <div className={`form-group ${address2.touched && address2.invalid ? 'has-error' : ''}`}>
                                <label className="control-label">Address2 :</label>
                                <input className="form-control" {...address2} type="text" />
                                {address2.touched && address2.error && <div className="error">{address2.error}</div>}
                            </div>

                            <div className={`form-group ${city.touched && city.invalid ? 'has-error' : ''}`}>
                                <label className="control-label">City :</label>
                                <input className="form-control" {...city} type="text" />
                                {city.touched && city.error && <div className="error">{city.error}</div>}
                            </div>

                            <div className={`form-group ${fstate.touched && fstate.invalid ? 'has-error' : ''}`}>
                                <label className="control-label">State :</label>
                                <select className="form-control" {...fstate} type="text" >
                                  <option value=''> Please Select the State </option>
                                  <option value='CA'> California </option>
                                  <option value='NY'> NewYork </option>
                                  <option value='TX'> Texas </option>
                                </select>
                                {fstate.touched && fstate.error && <div className="error">{fstate.error}</div>}
                            </div>

                            <div className={`form-group ${zipcode.touched && zipcode.invalid ? 'has-error' : ''}`}>
                                <label className="control-label">ZipCode :</label>
                                <input className="form-control" {...zipcode} type="text" />
                                {zipcode.touched && zipcode.error && <div className="error">{zipcode.error}</div>}
                            </div>

                            <hr />
                            <button action="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button> &nbsp;
                            <button type="button" disabled={pristine || submitting} className="btn btn-danger" onClick={this.resetFormData.bind(this)}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.name) {
        errors.name = 'Name field is Required';
    } else if (formProps.name.length < 1 || formProps.name.length > 100) {
      errors.name = 'Name must be 100 characters or less'
    } else if (!/^[a-zA-Z]+$/i.test(formProps.name)) {
      errors.name = 'Name must be alpha'
    }

    if (!formProps.address1) {
        errors.address1 = 'Address1 field is Required';
    } else if (formProps.address1.length < 1 || formProps.address1.length > 100) {
      errors.address1 = 'Address1 must be 100 characters or less'
    } else if (!/^[a-zA-Z0-9]+$/i.test(formProps.address1)) {
      errors.address1 = 'Address1 must be alpha numeric'
    }

    if (formProps.address2) {
      if (formProps.address2.length > 100) {
        errors.address2 = 'Address2 must be 100 characters or less'
      } else if (!/^[a-zA-Z0-9]+$/i.test(formProps.address2)) {
        errors.address2 = 'Address2 must be alpha numeric'
      }
    }

    if (!formProps.city) {
        errors.city = 'City field is Required';
    } else if (formProps.city.length < 1 || formProps.city.length > 50) {
      errors.city = 'City must be 100 characters or less'
    } else if (!/^[a-zA-Z0-9]+$/i.test(formProps.city)) {
      errors.city = 'City must be alpha numeric'
    }

    if (!formProps.fstate) {
        errors.fstate = 'State field is Required';
    } else if (formProps.fstate.length !== 2 ) {
      errors.fstate = 'State must be 2 characters'
    } else if (!/^[A-Z]+$/i.test(formProps.fstate)) {
      errors.fstate = 'State must be alpha numeric'
    }

    if (!formProps.zipcode) {
        errors.zipcode = 'ZipCode field is Required';
    } else if (formProps.zipcode.length !== 5) {
      errors.zipcode = 'ZipCode must be 5 characters'
    } else if (!/^[0-9]+$/i.test(formProps.zipcode)) {
      errors.zipcode = 'ZipCode must be numeric'
    }

    return errors;
}

function mapStateToProps(state) {
  return { jsontree_data: state.treereducer.data };
}

export default reduxForm({
    form: 'testform',
    fields: [ 'name', 'address1', 'address2', 'city', 'fstate', 'zipcode' ],
    validate
}, mapStateToProps, actions)(Feature);

