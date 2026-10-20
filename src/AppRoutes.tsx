import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage.tsx"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="projects/:slug"
          element={
            <Suspense fallback={<p className="container-page py-24 label">loading...</p>}>
              <CaseStudyPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
