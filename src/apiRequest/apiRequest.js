const BaseURl = "https://basic-blog.teamrabbil.com/api";

import axios from "axios";

export async function postCategory() {
  const res = await axios(BaseURl + "/post-categories");
  if (res.status === 200) {
    return res;
  } else {
    return [];
  }
}
