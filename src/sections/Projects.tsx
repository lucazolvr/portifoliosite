import CodeEduSaas from "@/assets/images/CodeEduSaas.png";
import CitrusTaskSaas from "@/assets/images/CitrusTaskSaas.png";
import AiaconFintechSaas from "@/assets/images/AiaconFintechSaas.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg"

const portfolioProjects = [
  {
    company: "AIACON Software",
    year: "2025",
    title: "CodeEdu",
    results: [
      { title: "Plataforma completa para ensino e avaliação de programação" },
      { title: "Editor de código integrado e feedback instantâneo" },
      { title: "Gerenciamento de desempenho para instituições de ensino" },
    ],
    link: "https://github.com/lucazolvr",
    image: CodeEduSaas,
  },
  {
    company: "AIACON Software",
    year: "2025",
    title: "CitrusTasks",
    results: [
      { title: "Organize suas tarefas com simplicidade" },
      { title: "Transforme sua rotina com foco e organização" },
      { title: "Acompanhe suas tarefas diárias com facilidade" },
    ],
    link: "https://github.com/lucazolvr",
    image: CitrusTaskSaas,
  },
  {
    company: "AIACON Software",
    year: "2024",
    title: "AIACON Fintech Project",
    results: [
      { title: "Controle financeiro simplificado" },
      { title: "Análise inteligente para gestão de gastos" },
      { title: "Orçamento automático e integração bancária" },
    ],
    link: "https://github.com/lucazolvr",
    image: AiaconFintechSaas,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16">
    <div className="container">
      <div className="flex justify-center ">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-400 via-sky-400 to-teal-400 text-center text-transparent bg-clip-text">
        Resultados Reais
      </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6">Projetos em Destaque</h2>
      <p className="text-center text-white/60 mt-4">Veja como posso transformar simples pensamentos em grandes projetos.
      </p>
      <div className="flex flex-col mt-10 gap-20">
        {portfolioProjects.map((project) =>(
          <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8">
                
                <div className="absolute inset-0 -z-10 opacity-5" style={{
                  backgroundImage: `url(${grainImage.src})`
                }}></div>

                <div className="bg-gradient-to-r from-purple-400 to-teal-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
                </div>
              
              <h3 className="font-serif text-2xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4"/>
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) =>(
                  // eslint-disable-next-line react/jsx-key
                  <li className="flex gap-2 text-sm text-white/50">
                    <CheckCircleIcon className="size-5"/>
                    <span>{result.title}</span>
                    </li>
                ))}
              </ul>
              <a href="{project.link}">
              <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>Abrir Projeto</span>
                <ArrowUpRightIcon className="size-4"/>
              </button>
              </a>
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4"/>
          </div>
        ))}
      </div>
    </div>
  </section>;
};
