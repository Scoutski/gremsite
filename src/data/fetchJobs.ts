import { gql } from 'apollo-boost';
import client from './apollo';

const fetchJobs = async () => {
  const jobsList = await client
    .query({
      query: gql`
      { fetchJobs
        {
          name
          userList
        }
      }
      `
    })

  // @ts-ignore
  return jobsList.data.fetchJobs;
}

export default fetchJobs;