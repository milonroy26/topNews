import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { useEffect, useState } from "react";
import { postByCategory } from "../apiRequest/apiRequest";
import Loader from "../component/Loader";
import BlogList from "../component/BlogList";

const BycategoryPage = () => {
  const { categoryId } = useParams();
  const [list, setList] = useState(null);
  useEffect(() => {
    (async () => {
      let res = await postByCategory(categoryId);
      setList(res);
    })();
  }, [categoryId]);
  return (
    <Layout>
      {list === null ? (
        <Loader></Loader>
      ) : (
        <BlogList postList={list}></BlogList>
      )}
    </Layout>
  );
};

export default BycategoryPage;
