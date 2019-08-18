// Just a BoilerPlate for interacting with External World..

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID db322a5337123a8c0dfc08c2d9356b062bc57d371216e60eced22634a32441f6"
  }
});
