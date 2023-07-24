const BaseURl = "https://basic-blog.teamrabbil.com/api";

import axios from "axios";

export async function postCategory() {
  let res = await axios(BaseURl + "/post-categories");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

// post details info get
export async function postNewest() {
  let res = await axios(BaseURl + "/post-newest");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
