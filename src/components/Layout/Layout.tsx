import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Drawer from "./Drawer/Drawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppleIcons from "@/Schemas/Other/AppleIcons";
import FAQsSchema from "@/Schemas/FAQsSchema";
import OrgnizationSchema from "@/Schemas/OrgnizationSchema";
import HowToSchema from "@/Schemas/HowToSchema";
import ServiceSchema from "@/Schemas/ServiceSchema";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <main>
      {/* <GTM/> */}
      <AppleIcons />
      <FAQsSchema />
      <OrgnizationSchema />
      <HowToSchema />
      <ServiceSchema />
      <Drawer />
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </main>
  );
}

export default Layout;
