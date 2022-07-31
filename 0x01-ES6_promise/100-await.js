import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {

  let photo = null;
  let user = null;

  const response = { };
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } finally {
    response.photo = photo;
    response.user = user;
  }

  return response;

}
