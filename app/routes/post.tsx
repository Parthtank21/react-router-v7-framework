import React from "react";
import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  return { postId };
}

export async function action() {}

export default function post({ loaderData }: Route.ComponentProps) {
  return <div>Post ID: {loaderData.postId}</div>;
}
