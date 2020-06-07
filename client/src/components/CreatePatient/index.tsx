import * as React from 'react';
import { PureComponent } from 'react';
import { graphql, gql } from 'react-apollo';
import styled from 'styled-components';

const CREATE_PATIENT_MUTATION = gql`
  mutation CreatePatientMutation(
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    createPatient(firstName: $firstName, lastName: $lastName, email: $email) {
      firstName
      lastName
      email
    }
  }
`;

interface Props {
  createPatientMutation: any;
  history: any;
}

const Label = styled.span`
  width: 100px;
  display: inline-block;
  margin-left: 20px;
`;

const Field = styled.div`margin: 20px 0;`;

const Button = styled.button`margin: 20px;`;

class CreatePatient extends PureComponent<Props> {
  state = {
    firstName: undefined,
    lastName: undefined,
    email: undefined
  };

  updateValue = (event: any) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div>
          <Field>
            <Label>FirstName</Label>
            <input
              value={this.state.firstName}
              onChange={this.updateValue}
              name="firstName"
              type="text"
              placeholder="FirstName"
            />
          </Field>
          <Field>
            <Label>LastName</Label>
            <input
              value={this.state.lastName}
              onChange={this.updateValue}
              name="lastName"
              type="text"
              placeholder="LastName"
            />
          </Field>
          <Field>
            <Label>Email</Label>
            <input
              value={this.state.email}
              onChange={this.updateValue}
              name="email"
              type="text"
              placeholder="Email"
            />
          </Field>
        </div>
        <Button onClick={() => this._createPatient()}>Submit</Button>
      </div>
    );
  }

  _createPatient = async () => {
    const { firstName, lastName, email } = this.state;
    const { createPatientMutation, history } = this.props;
    await createPatientMutation({
      variables: {
        firstName,
        lastName,
        email
      }
    });
    history.push(`/`);
  };
}

export default graphql(CREATE_PATIENT_MUTATION, {
  name: 'createPatientMutation'
})(CreatePatient as any);
