import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, filename) {
  const statusList = [];

  try {
    const user = await signUpUser(firstName, lastName);
    statusList.push({
      status: 'resolved',
      value: user,
    });
  } catch (err) {
    statusList.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  try {
    const photo = await uploadPhoto(filename);
    statusList.push({
      status: 'resolved',
      value: photo,
    });
  } catch (err) {
    statusList.push({
      status: 'rejected',
      value: err.toString(),
    });
  }
  return statusList;
}

export default handleProfileSignup;
