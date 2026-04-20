import { skillsData } from "../data/skillsData";

export function getRecommendations(userSkills = []) {
  let recommendedSkills = new Set();
  let projects = new Set();
  let careers = new Set();

  userSkills.forEach((skill) => {
    const data = skillsData[skill];

    if (data) {
      data.nextSkills.forEach((s) => recommendedSkills.add(s));
      data.projects.forEach((p) => projects.add(p));
      data.careers.forEach((c) => careers.add(c));
    }
  });

  // Fallback recommendations if no skills found
  const skills = Array.from(recommendedSkills);
  const projects_arr = Array.from(projects);
  const careers_arr = Array.from(careers);

  return {
    skills: skills.length > 0 ? skills : ["JavaScript", "React", "Web Development", "TypeScript"],
    projects: projects_arr.length > 0 ? projects_arr : ["Build a Todo App", "Create a Portfolio Website", "Build a Chat Application", "Develop an E-commerce Site"],
    careers: careers_arr.length > 0 ? careers_arr : ["Frontend Developer", "Full Stack Developer", "Web Developer", "Software Engineer"],
  };
}
