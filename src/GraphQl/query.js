
import {useQuery, gql} from '@apollo/client';

export const getAll = gql`
  {
    getAll{
    	id
      title
      description
    },
    
  }
  `

  export const getAllUsers = gql`
  {
      getAllUsers{
    	username
      password
    },
  }
  `