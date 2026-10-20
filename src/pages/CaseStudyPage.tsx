import { useParams } from "react-router";
import Seo from "../components/Seo.tsx";
import { getProject } from "../data/projects.ts";
import NotFoundPage from "./NotFoundPage.tsx";

export default function CaseStudyPage() {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFoundPage />;

  return (
    <article className="container-page py-24">
      <Seo title={project.title} description={project.tagline} />
      <h1 className="text-6xl font-semibold">{project.title}</h1>
    </article>
  );
}
