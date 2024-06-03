import { initiateOAuth2Flow } from "../shared/apiService";

const registerWithGoogle = () => {
  initiateOAuth2Flow();
};

export default registerWithGoogle;
