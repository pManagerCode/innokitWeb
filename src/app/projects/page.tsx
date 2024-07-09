
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Projects } from "@/sections/projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Innokit",
  description: "This is Projects Page for INNOVATIVE KITCHEN SYDNEY",
};

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Projects" description="" />

      <Projects />
    </>
  );
};

export default ProjectsPage;
