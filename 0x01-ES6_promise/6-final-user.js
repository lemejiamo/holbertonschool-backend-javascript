import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(filename);
  return Promise.all([user, photo])
    .then((data) => [{ status: data.status, value: data.value }]);
}
