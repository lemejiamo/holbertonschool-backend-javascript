/* export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
 */

function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

export default uploadPhoto;