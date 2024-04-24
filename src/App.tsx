import {
  RouterProvider,
  createBrowserRouter,
  useSearchParams,
} from "react-router-dom";
import "./App.css";

export const Staging = () => {
  const [searchParams] = useSearchParams();
  const apiKey = searchParams.get("apiKey") || " ";

  return (
    <iframe
      width="400"
      height="600"
      src={`https://global-stg.transak.com?apiKey=${encodeURIComponent(
        apiKey
      )}`}
      allow="camera;microphone;payment"
    ></iframe>
  );
};

export const Production = () => {
  const [searchParams] = useSearchParams();
  const apiKey = searchParams.get("apiKey") || " ";

  return (
    <iframe
      width="400"
      height="600"
      src={`https://global.transak.com?apiKey=${encodeURIComponent(apiKey)}`}
      allow="camera;microphone;payment"
    ></iframe>
  );
};

export const Home = () => {
  return <div className="container">Transak Double iframe Supporter</div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/staging",
    element: <Staging />,
  },
  {
    path: "/production",
    element: <Production />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
