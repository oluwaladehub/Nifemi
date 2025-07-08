import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface Project {
  name: string;
  description: string;
  url: string;
  images: { src: string; alt: string }[];
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {projects.map((project, index) => (
        <ProjectCard
          priority={index < 2}
          key={project.name}
          href={project.url}
          images={project.images}
          title={project.name}
          description={project.description}
          link={project.url}
        />
      ))}
    </Column>
  );
}
