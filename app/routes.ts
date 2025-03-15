import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("post/:postId", "routes/post.tsx"),
  // Prefix Example
  ...prefix("some-route", [route("about", "routes/about.tsx")]),
  // Layout Example
  layout("routes/dashboard-layout.tsx", [
    // Nested Routes Example
    route("dashboard", "routes/dashboard.tsx", [
      route("finances", "routes/finances.tsx"),
      route("personal", "routes/personal-info.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
