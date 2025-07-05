import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import AboutUsPage from "@/pages/aboutUs_page/AboutUsPage";
import AirSourcePage from "@/pages/airSource_page/AirSourcePage";
import BlogDetaisPage from "@/pages/blog_detail_page/BlogDetaisPage";
import BlogPage from "@/pages/blog_page/BlogPage";
import CaseStudiesPage from "@/pages/caseStudies_page/CaseStudiesPage";
import ContactPage from "@/pages/contact_page/ContactPage";
import GeothermalWorks from "@/pages/geothermalWorks_page/GeothermalWorks";
import GroundSource from "@/pages/groundSourcePage/GroundSource";
import Home from "@/pages/home/Home";
import HydronicPage from "@/pages/hydronicPage/HydronicPage";


import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/services/how-geothermal-works",
        element: <GeothermalWorks />,
      },
      {
        path: "/services/ground-source-heat-pumps",
        element: <GroundSource />,
      },
      {
        path: "/services/hydronic-heating-and-cooling",
        element: <HydronicPage />,
      },
      {
        path: "/services/air-source-heat-pumps",
        element: <AirSourcePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetaisPage />,
      },
      {
        path: "/case-studies",
        element: <CaseStudiesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },

    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />, // ✅ Fixed typo
      },
    ],
  },
]);

export default router;
