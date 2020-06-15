import React from 'react';
import fetchJobs from './data/fetchJobs';
import { JOB_TYPES } from './helpers/jobTypes';
import './App.css';

import Table from './components/Table';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [jobsData, setJobsData] = React.useState([])

  const jobKeys = jobsData && jobsData.map(job => job.name);
  React.useEffect(() => {
    const fetchData = async () => {
      const jobData = await fetchJobs();
      setJobsData(jobData);
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
