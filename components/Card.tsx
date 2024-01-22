import SpoilerItem from "./SpoilerItem";

type Props = {
  title: string;
  content: {
    title: string;
    text: string;
  }[];
};

export default function Card({ content, title }: Props) {
  return (
    <div className="bg-background/80 py-9 px-8 pr-4 h-full rounded-2xl shadow-lg">
      <div className="h-72 scrollbar-thin overflow-x-hidden overflow-y-scroll sm:scrollbar-none sm:h-auto scrollbar-thumb-gray-400 scrollbar-track-gray-200 sm:overflow-y-visible pr-3 sm:pr-0">
        <h4 className="text-base text-secondary mb-4">{title}</h4>
        <ul>
          {content.map((data, index) => {
            return (
              <li key={index} className="mb-12 last:mb-0">
                <SpoilerItem title={data.title} text={data.text} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
