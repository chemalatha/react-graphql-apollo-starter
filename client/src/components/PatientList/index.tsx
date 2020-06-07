import * as React from 'react';
import { PureComponent } from 'react';
import { graphql, compose, gql } from 'react-apollo';
import Patient, { PatientIntf } from '../Patient';

const ALL_PATIENTS_QUERY = gql`
  query AllPatientsQuery {
    allPatients {
      id
      firstName
      lastName
      email
    }
  }
`;

const DELETE_PATIENTS_MUTATION = gql`
  mutation DeletePatientMutation(
    $id: String!
  ) {
    deletePatient(id: $id){
      id
      email
    }
  }
`;

interface Props {
  allPatientsQuery: any;
  deletePatientMutation: any;
}

export class PatientList extends PureComponent<Props> {

  deletePatient = async (id: String) => {
    await this.props.deletePatientMutation({
      variables: {
        id
      }
    });
  }

  render() {
    const { allPatientsQuery } = this.props;

    if (allPatientsQuery && allPatientsQuery.loading) {
      return <div>Loading</div>;
    }

    if (allPatientsQuery && allPatientsQuery.error) {
      return <div>Error</div>;
    }

    const { allPatients } = this.props.allPatientsQuery;

    return (
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allPatients.map((patient: PatientIntf) =>
            <Patient key={patient.id} patient={patient} deletePatient={()=>this.deletePatient(patient.id)}/>
          )}
        </tbody>
      </table>
    );
  }
}

export default compose(
  graphql(ALL_PATIENTS_QUERY, { name: 'allPatientsQuery' }),
  graphql(DELETE_PATIENTS_MUTATION, { name: 'deletePatientMutation' })
)(
  PatientList as any
);
