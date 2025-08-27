import LandingPage from "./pages/LandingPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Shop from "./pages/Shop"

const route = createBrowserRouter([
  {
    index: true,
    element: <LandingPage />
  },
  {
    path: "login",
  element: <LoginPage />
  }, 
  {
    path: "shop",
    element: <Shop />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
