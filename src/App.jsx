
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './Components/Layout/AppLayout'
import { Politics } from './Pages/Politic'
import { Finances } from './Pages/Finance'
import { Sports } from './Pages/Sport'
import { Home } from './Pages/Home'
import './index.css'
import { ErrorPage } from './Pages/ErrorPage'
import { getApiDatas} from './Api/GetApiData'
import { SearchResults } from './Pages/SearchResulst'

export const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
            loader: getApiDatas, 
          },
          {
            path: "/politics",
            element: <Politics />,
            loader: getApiDatas,
          },
          {
            path: "/finances",
            element: <Finances />,
            loader: getApiDatas,
          },
          {
            path: "/sports",
            element: <Sports />,
            loader: getApiDatas,
          },
          {
            path: "/search",
            element: <SearchResults />,
            loader: getApiDatas,
          },
        ],
      },
    ]
  );
  return <RouterProvider router={router} />

}
