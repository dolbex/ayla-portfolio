import projectsData from '~~/data/projects.json'

export interface Project {
  slug: string
  number: string
  title: string
  description: string
  heroImage: string
  galleryBg: string
  galleryTint: string
  images: string[]
}

export function useProjects() {
  const projects = projectsData as Project[]

  function getProject(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug)
  }

  return { projects, getProject }
}
