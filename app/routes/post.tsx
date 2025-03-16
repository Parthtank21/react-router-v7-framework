import React from "react";
import type { Route } from "./+types/post";
import { useNavigate, useNavigation } from "react-router";

// export async function clientLoader({ params }: Route.LoaderArgs) {
//   console.log("Running Client Side");
//   const postId = params.postId;
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   return await res.json();
// }

export async function loader({ params }: Route.LoaderArgs) {
  console.log("Running Server Side");
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return await res.json();
}

export async function action() {}

export default function post({ loaderData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isNavigating = navigation.state;
  if(isNavigating !== 'idle') return <p>Navigating...</p>

  return (
    <div>
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
      <button onClick={() => navigate("/posts")}>Go to Posts</button>
      <p>Post: {loaderData.title}</p>
    </div>
  );
}
