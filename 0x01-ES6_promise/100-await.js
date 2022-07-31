import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;

  const response = { };
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  } finally {
    response.photo = photo;
    response.user = user;
  }
  return response;
}
