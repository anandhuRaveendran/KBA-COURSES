import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddCoursePage from "./pages/AddCoursePage";
import MainLayout from "./layouts/MainLayout";
import LearnMorePage from "./pages/LearnMorePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
              <Route path="/" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />

        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/add-course" element={<AddCoursePage />} />
          <Route path="/learnmore" element={<LearnMorePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;