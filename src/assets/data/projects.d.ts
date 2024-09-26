export interface Project {
    title: string;
    date: string;
    lieu: string;
    imageSrc: string;
  }
  
  declare module '../assets/data/projects2023.js' {
    const value: Project[];
    export default value;
  }
  
  declare module '../assets/data/projects2024.js' {
    const value: Project[];
    export default value;
  }
  
  declare module '../assets/data/projects2022.js' {
    const value: Project[];
    export default value;
  }
  
  declare module '../assets/data/projects2021.js' {
    const value: Project[];
    export default value;
  }
  
  declare module '../assets/data/projects2020.js' {
    const value: Project[];
    export default value;
  }
  