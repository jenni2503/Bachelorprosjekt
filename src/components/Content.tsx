import { item } from "../types/itemType";
import ContentItem from "./ContentItem";

interface Props {
  items: item[];
}

const Content = ({ items }: Props) => {
  return (
    <div className="md:flex md:justify-center mb-4">
      <div
        className="mt-6 mx-2 rounded-xl
        md:w-5/6 lg:w-2/3
        "
      >
        {/* happens only if items is not empty */}
        {items &&
          items.map((item) => {
            // i = number of the content we click on
            return <ContentItem content={item} key={item.varenummer} />;
          })}
      </div>
    </div>
  );
};

export default Content;
