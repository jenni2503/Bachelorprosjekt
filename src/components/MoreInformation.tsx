import { item } from "../types/itemType";

interface Props {
  item: item;
}

const MoreInformation = ({ item }: Props) => {
  return (
    <div>
      <div className="bg-neutral-700">
        {/* white line div */}
        <div className="w-full h-[1px] mt-5 bg-white"></div>
        {/* Posisjon */}
        <div>
          <p className="pt-10 pl-5 text-slate-100 font-light">{`Posisjon: ${item.posisjon}`}</p>
        </div>

        {/* Beskrivelse */}
        <div className="mt-5">
          <p className="pl-5 text-slate-100 font-bold text-sm md:text-lg">
            Beskrivelse:
          </p>
          <p
            className="mt-5 mx-5 px-5 py-5 rounded-xl 
            text-slate-100 bg-neutral-400 bg-opacity-40"
          >
            {item.beskrivelse}
          </p>
        </div>

        {/* Begrunnelse */}
        <div className="mt-5">
          <p className="pl-5 text-slate-100 font-bold text-sm md:text-lg">
            Begrunnelse:
          </p>
          <p
            className="mt-5 mx-5 px-5 py-5 rounded-xl 
            text-slate-100 bg-neutral-400 bg-opacity-40"
          >
            {item.begrunnelse}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInformation;
