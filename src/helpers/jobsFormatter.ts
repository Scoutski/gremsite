import fetchJobsList from '../data/fetchJobsList';

const sortOrganisedData = (organisedData: any, jobKeys: string[]) => {
  jobKeys.forEach(jobKey => {
    organisedData[jobKey].sort((a: string, b: string) => {
      // @ts-ignore
      const aNum = +a.match(/(\d+)/)[0];
      // @ts-ignore
      const bNum = +b.match(/(\d+)/)[0];
      if (aNum < bNum) return -1;
      if (aNum > bNum) return 1;
      if (aNum === bNum) return 0;
    });
  })
}

const formatJobsList = async (members: any[] = [], organisedData: any, jobKeys: string[], setJobsData: any) => {
  console.log('formatJobsList!');
  for (let i = 0; i < members.length; i++) {
    console.log(`${members[i].Name} Loop!`);
    setTimeout(async () => {
      console.log(`fetching data for ${members[i].Name}`);
      const memberData = await fetchJobsList(members[i]);

      memberData.jobs.forEach((job: any) => {
        const jobName = job.name.replace('"', '').replace(' ', '_');
        if (job.level >= 60) {
          if (!organisedData[jobName]) {
            organisedData[jobName] = [];
          }
          organisedData[jobName].push(`${members[i].Name} (${job.level})`);
        }
      });

      if (i === members.length - 1) {
        sortOrganisedData(organisedData, jobKeys);
        console.log('organisedData', organisedData);
        setJobsData(organisedData);
      }
    }, i * 100);
  }
}

export default formatJobsList;