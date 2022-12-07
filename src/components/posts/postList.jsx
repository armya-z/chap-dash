import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsFetch } from "../../features/posts/postState";
import PostCard from "../Comon/Cards/PostCard";

function PostList() {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);

  return (
    <div>
      <section className="py-3">
        <h1 className="text-center text-3xl">posts list</h1>
        <p className="text-center text-xl">
          all post about how to what???!!!!
        </p>
        <hr className="my-5" />
      </section>
      <div></div>

      <ul>
        {posts.map((post) => (
          <div key={post.id}>
            <li>
              <PostCard
                title={post.title}
                author={post.author}
                img={post.image}
                alt={post.title}
              />
              <hr />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
