import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsFetch } from "../../features/posts/postState";

function PostList() {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);
  console.log(posts);

  return (
    <div>
      <h1>posts list</h1>
      <p>all post about how to what???!!!!</p>
      <hr />
      <ul>
        {posts.map((post) => (
          <div key={post.id}>
            <li>
              <h2>{post.title}</h2>
              <h2>{post.author}</h2>
              <p>{post.body}</p>
              <img
                src={post.image}
                alt={post.title}
                width={200}
                height={200}
              />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
