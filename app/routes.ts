import type { RouteObject } from "react-router";
import RootErrorBoundary from "./RootBoundary";

export default [];

export const hashRoutes: RouteObject[] = [
  {
    path: "imprint",
    lazy: async () => {
      const { default: Component } = await import("./routes/imprint/page");
      return { Component };
    },
  },
  {
    path: "docs",
    lazy: async () => {
      const { default: Component } = await import("./routes/docs/page");
      return { Component };
    },
  },
  {
    path: "docs/*",
    lazy: async () => {
      const { default: Component } = await import("./routes/docs/path");
      return { Component };
    },
  },
  {
    path: "/",
    ErrorBoundary: RootErrorBoundary,
    lazy: async () => {
      const { default: Component } = await import("./routes/layout");
      return { Component };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import("./routes/home/page");
          return { Component };
        },
      },
      {
        path: "publications-events",
        lazy: async () => {
          const { default: Component } =
            await import("./routes/publications-events/page");
          return { Component };
        },
      },
    ],
  },
];
