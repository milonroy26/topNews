import { useEffect, useState } from "react";
import { postNewest } from "../apiRequest/apiRequest";
import BlogList from "../component/BlogList";
import Layout from "../layout/Layout";
import Loader from "../component/Loader";

const HomePage = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await postNewest();
      setList(res);
    })();
  }, []);
  return (
    <Layout>
      {list.length === 0 ? (
        <Loader></Loader>
      ) : (
        <BlogList postList={list}></BlogList>
      )}
    </Layout>
  );
};

export default HomePage;
