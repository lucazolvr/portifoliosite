import CodeEduSaas from "@/assets/images/CodeEduSaas.png";
import CitrusTaskSaas from "@/assets/images/CitrusTaskSaas.png";
import AiaconFintechSaas from "@/assets/images/AiaconFintechSaas.png";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "AIACON Software",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/lucazolvr",
    image: CodeEduSaas,
  },
  {
    company: "AIACON Software",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://github.com/lucazolvr",
    image: CitrusTaskSaas,
  },
  {
    company: "AIACON software house",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/lucazolvr",
    image: AiaconFintechSaas,
  },
];

export const ProjectsSection = () => {
  return <div>
    <div className="container">
      <div className="flex justify-center ">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-300 via-sky-400 to-teal-400 text-center text-transparent bg-clip-text">
        Resultados Reais
      </p>
      </div>
      <h2>Projetos em Destaque</h2>
      <p>Veja como posso transformar simples pensamentos em grandes projetos.</p>
      <div>
        {portfolioProjects.map((project) =>(
          <div key={project.title}>
              <div>
                <span>{project.company}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <hr />
              <ul>
                {project.results.map((result) =>(
                  <li>{result.title}</li>
                ))}
              </ul>
              <a href="{project.link}">
              <button>Abrir Projeto</button>
              </a>
              <Image src={project.image} alt={project.title}/>
          </div>
        ))}
      </div>
    </div>
  </div>;
};
