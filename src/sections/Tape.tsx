import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Perfomance",
  "Segurança",
  "Acessibilidade",
  "Escalabilidade",
  "Interatividade",
  "Manutenabilidade",
  "Confiabilidade",
  "Usabalidade",
  "Responsividade",
  "Interoperabilidade",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-purple-400 via-sky-400 to-teal-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
