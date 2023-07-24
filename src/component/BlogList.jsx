import { Link } from "react-router-dom";

const BlogList = ({ postList }) => {
  return (
    <>
      <div className="container mx-auto my-16 p-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {postList.map((item, index) => {
            return (
              <Link
                key={index.toString()}
                className="card card-compact w-100 glass"
              >
                <figure>
                  <img src={item.img} alt="Post-image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title"> {item.title} </h2>
                  <p> {item.short} </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogList;
