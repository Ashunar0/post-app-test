import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { GlobalLayout } from "./components/GlobalLayout";

export const meta = () => {
  return [{ title: "react-demo-team-app" }];
};

export function Layout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <GlobalLayout>
      <Outlet />
    </GlobalLayout>
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
