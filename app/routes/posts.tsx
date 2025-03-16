import { Form, Link, useFetcher } from "react-router";
import type { Route } from "./+types/posts";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <p>Loading...</p>;
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
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state !== "idle";

  // Data returned by clientAction
  console.log(fetcher.data);

  return (
    <div>
      <h2>Posts</h2>
      <fetcher.Form method="post">
        <input type="text" name="title" />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </fetcher.Form>
      <ul>
        {loaderData.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              Post {post.id} : {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
