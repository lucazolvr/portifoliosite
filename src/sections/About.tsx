import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/LivroArqSoftw.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavaIcon from "@/assets/icons/icons8-java.svg";
import GithubIcon from "@/assets/icons/github.svg";
import SpringIcon from "@/assets/icons/spring.svg";
import SqlIcon from "@/assets/icons/database.svg";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: <JavascriptIcon />,
  },
  {
    title: "HTML5",
    icon: <HTMLIcon />,
  },
  {
    title: "CSS3",
    icon: <CSSIcon />,
  },
  {
    title: "React",
    icon: <ReactIcon />,
  },
  {
    title: "Java",
    icon: <JavaIcon />,
  },
  {
    title: "Github",
    icon: <GithubIcon />,
  },
  {
    title: "SpringBoot",
    icon: <SpringIcon />,
  },
  {
    title: "Banco de Dados",
    icon: <SqlIcon />,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="Sobre mim"
        title="Uma Visão Do Meu Universo"
        description="Saiba mais sobre mim, o que eu faço e o que me inspira"
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>Minhas Leituras</h3>
            <p>Explore os livros moldam meu conhecimento.</p>
          </div>
          <Image src={bookImage} alt="capa livro" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Minhas Ferramentas</h3>
            <p>
              Explore as tecnologias e ferramentas que uso para desenvolver
              projetos incríveis.
            </p>
          </div>
          <div></div>
        </Card>
      </div>
    </div>
  );
};
