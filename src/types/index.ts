// types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
}
