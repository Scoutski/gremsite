import React from 'react';
import fetchMembers from './data/fetchMembers.ts';
import formatJobsList from './helpers/jobsFormatter.ts';
import { JOB_TYPES } from './helpers/jobTypes'
import './App.css';

import Table from './components/Table';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [FCMembers, setFCMembers] = React.useState(null);
  const [jobsData, setJobsData] = React.useState({})

  const jobKeys = Object.keys(jobsData);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMembers();
      setFCMembers(data);
      
      let organisedData = {};
      await formatJobsList(data, organisedData, jobKeys, setJobsData);
    }

    fetchData();
  }, []);

  
  if (loading && jobKeys.length > 0) {
    setLoading(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Grems!</h1>
        {loading ? <p>Loading data... This will take a few seconds</p> : null}
        {!loading && JOB_TYPES.map(jobType =>
          <Table
            key={jobType}
            headerName={jobType}
            jobKeys={jobKeys}
            tableData={jobsData}
          />
        )}
      </header>
    </div>
  );
}

export default App;
