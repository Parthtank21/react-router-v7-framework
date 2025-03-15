import { Form } from "react-router";
import type { Route } from "./+types/posts";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
}

export async function clientAction({
  params,
  request,
}: Route.ClientActionArgs) {
  const formData = await request.formData();
  const title = formData.get("title");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return await res.json();
}

export default function Posts({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div>
      <h2>Posts</h2>
      <Form method="post">
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </Form>
      <ul>
        {loaderData.map((post) => (
          <li key={post.id}>
            Post {post.id} : {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
