export interface Project {
  id: string; // Add the `id` field to the Project type
  title: string;
  _id?: string;
  description: string;
  image: string;
  githubClient?: string;
  githubServer?: string;
  link?: string;
  liveLink?: string;
  category?: string;
  details?: string;
  createdAt: string;
  updatedAt: string;
}
