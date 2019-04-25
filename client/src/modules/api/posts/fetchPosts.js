import api from "@/modules/api/";

export default {
  fetchPosts() {
    return api().get("posts");
  }
};
