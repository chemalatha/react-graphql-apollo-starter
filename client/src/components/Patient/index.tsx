import * as React from 'react';
import styled from 'styled-components';

export interface PatientIntf {
  id:string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  patient: PatientIntf;
  deletePatient: Function;
}

const Cell = styled.td`
  padding: 10px 30px;
  text-align: center;
`;

class Patient extends React.Component<Props> {

  deletePatient = () => {
    const { patient: {id}, deletePatient } = this.props;
    deletePatient(id);
  }

  render() {
    const { patient } = this.props;
    return (
      <tr>
        <Cell>{patient.firstName}</Cell>
        <Cell>{patient.lastName}</Cell>
        <Cell>{patient.email}</Cell>
        <Cell onClick={this.deletePatient}>Delete</Cell>
      </tr>
    );
  }
};

export default Patient;
