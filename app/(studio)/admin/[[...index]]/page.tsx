"use client";
import dynamic from "next/dynamic";
import React from "react";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);
import config from "@/sanity.config";

const AdminPage = () => {
  return <NextStudio config={config} />;
};

export default AdminPage;
