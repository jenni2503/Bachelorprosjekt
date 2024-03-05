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
          <p
            className="pt-10 pl-5 text-slate-100 font-ligh 
          text-[15px] tracking-widet"
          >{`Posisjon: ${item.posisjon}`}</p>
        </div>

        {/* Beskrivelse */}
        <div className="mt-5">
          <p className="pl-5 text-slate-100 font-bold text-[15px] tracking-wide]">
            Beskrivelse:
          </p>
          <p
            className="mt-5 mx-5 px-5 py-5 rounded-xl 
            text-slate-100 bg-neutral-500 
             bg-opacity-60 text-sm tracking-[0.3px]"
          >
            {item.beskrivelse}
          </p>
        </div>

        {/* Begrunnelse */}
        <div className="mt-5">
          <p className="pl-5 text-slate-100 
          font-bold text-[15px] tracking-wide">
            Begrunnelse:
          </p>
          <p
            className="mt-5 mx-5 px-5 py-5 rounded-xl 
            text-slate-100 bg-neutral-500 bg-opacity-60 
            text-sm tracking-[0.3px]"
          >
            {item.begrunnelse}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInformation;
