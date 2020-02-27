import gql from 'graphql-tag';

export const PROJECT_LIST_VIEW = gql`
  query {
    me {
      id
      projects {
        id
        name
        updatedAt
        notes(orderBy: updatedAt_DESC) {
          id
          updatedAt
        }
        sectionLead {
          id
          name
        }
        teamLead {
          id
          name
        }
        projectStatus {
          id
          name
          color
        }
      }
    }
  }
`;

export const LABELS_QUERY = gql`
  query {
    labels {
      id
      name
      color
    }
  }
`;

export const DUMMY_QUERY = gql`
  query {
    info
  }
`;
