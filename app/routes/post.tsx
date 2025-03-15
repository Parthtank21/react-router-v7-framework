import React from "react";
import type { Route } from "./+types/post";

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
  return <div>Post: {loaderData.title}</div>;
}
