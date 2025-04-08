export interface Project {
  title: string;
  skills: string[];
  src: string;
  images: string[];
  introduce: string;
  github: {
    owner: string;
    repo: string;
  }
}