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
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/mapa.png";
import smileMemoji from "@/assets/images/memoji-piscando.png";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "SpringBoot",
    iconType: SpringIcon,
  },
  {
    title: "Banco de Dados",
    iconType: SqlIcon,
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
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Além do Código</h3>
            <p>Explore meus interesses e hobbys além do universo de códigos.</p>
          </div>
        </Card>
        <Card>
          <Image src={mapImage} alt="mapa" />
          <Image src={smileMemoji} alt="Memoji Piscando" />
        </Card>
      </div>
    </div>
  );
};
