import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((promises) => {
      console.log(`${promises[1].body} ${promises[0].firstName} ${promises[0].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
