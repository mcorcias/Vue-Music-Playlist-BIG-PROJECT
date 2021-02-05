import { ref } from 'vue';
import { projectStorage } from '../firebase/config';
import { user } from '../composables/getUser';

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);

  // url for download the image
  const url = ref(null);

  // Path for firestore
  const filePath = ref(null);

  const uploadImage = async file => {
    filePath.value = `covers/${user.value.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filePath.value);

    try {
      // upload the file
      const res = await storageRef.put(file);
      url.value = res.ref.getDownloadURL();
    } catch (err) {
      console.log(err.message);
      error.value = err.massage;
    }
  };
  return { error, url, filePath, uploadImage };
};

export default useStorage;
