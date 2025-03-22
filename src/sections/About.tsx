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
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

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

const hobbies = [
  {
    title: "Jogos",
    emoji: "🕹️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Leitura",
    emoji: "📚",
    left: "50%",
    top: "5%",
  },
  {
    title: "One Piece",
    emoji: "👒",
    left: "35%",
    top: "40%",
  },
  {
    title: "Música",
    emoji: "🎵",
    left: "10%",
    top: "35%",
  },
  {
    title: "Formula1",
    emoji: "🏎️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Basquete",
    emoji: "⛹️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Academia",
    emoji: "🏋️‍♂️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-15">
      <div className="container">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Uma Visão Do Meu Universo"
          description="Saiba mais sobre mim, o que eu faço e o que me inspira"
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="Minhas Leituras"
              description="Explore os livros que moldam minhas habilidades."
            />
            <div className="w-40 mx-auto mt-3">
              <Image src={bookImage} alt="capa livro" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="Minhas Skills"
              description="Explore as tecnologias e ferramentas que uso para desenvolver projetos incríveis."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Além do Código"
              description="Explore meus interesses e hobbies além do universo de códigos."
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex gap-2 items-center px-6 bg-gradient-to-r from-purple-400 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="mapa" />
            <Image src={smileMemoji} alt="Memoji Piscando" />
          </Card>
        </div>
      </div>
    </div>
  );
};
