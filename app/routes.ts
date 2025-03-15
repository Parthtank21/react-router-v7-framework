import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("post/:postId", "routes/post.tsx"),
  // Layout Example
  layout("routes/dashboard-layout.tsx", [
    // Nested Routes Example
    route("dashboard", "routes/dashboard.tsx", [
      route("finances", "routes/finances.tsx"),
      route("personal", "routes/personal-info.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
