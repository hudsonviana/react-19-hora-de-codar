import { use, Suspense } from "react";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const dataPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

function PostItems() {
  // const posts = use(fetchPosts());
  const posts = use(dataPromise);
  // console.log(posts);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

function Posts() {
  return (
    <Suspense fallback="carregando posts">
      <PostItems />
    </Suspense>
  );
}

export default Posts;
