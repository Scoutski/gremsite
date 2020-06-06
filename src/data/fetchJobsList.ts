import axiosClient from './axios';

const fetchJobsList = async (member: any) => {
  const { data }: any = await axiosClient.get(`/character/${member.ID}`, {
    params: {
      data: 'CJ'
    }
  });

  const jobs: any[] = data.Character.ClassJobs.map((job: any) => {
    return {
      name: job.UnlockedState.Name,
      level: job.Level
    }
  });

  return {
    member: data.Character.Name,
    jobs
  };
}

export default fetchJobsList;