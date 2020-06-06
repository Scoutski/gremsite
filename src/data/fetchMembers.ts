import axiosClient from './axios';

let userList: any = [];
const gremsLodestoneId = '9230268173784303427';

const fetchMembers = async () => {
  if (userList.length === 0) {
    console.log('fetching data');
    const { data }: any = await axiosClient.get(`/freecompany/${gremsLodestoneId}`, {
      params: {
        data: 'FCM'
      }
    });

    userList = data.FreeCompanyMembers;
  }

  return userList;
}

export default fetchMembers;