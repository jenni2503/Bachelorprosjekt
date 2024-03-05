import { useState } from "react";
import Modal from "./Modal";

const InfoModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-end w-full mr-5 md:mr-0 md:w-5/6 lg:w-2/3">
        <button
          className="h-5 pl-2 md:pl-0 md:w-20 md:h-10 mt-16 border-l-[1px] border-yellow-300"
          onClick={() => setOpen(true)}
        >
          <p className="text-yellow-300 text-sm md:text-sm font-semibold">
            INFO
          </p>
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          {/* children */}
          <div className="">
            <h1 className="font-bold mb-2">
              Om BKU (Bindende klassifiseringsuttalelse)
            </h1>
            <p className="mb-10">
              BKU-søk inneholder alle gyldige bindende forhåndsuttalelser om
              klassifisering fattet iht. vareførselsforskriften § 7-6. Du kan
              søke etter de ulike klassifiseringsuttalelsene i vårt oppslagsverk
              her. Disse uttalelsene er anonymiserte versjoner av gyldige
              klassifiseringsuttalelser.
            </p>
            <h1 className="font-bold mb-2">Om søk etter BKU</h1>
            <p className="mb-10">
              Uttalelsene finner du kun på norsk, og du kan benytte fritekst
              eller 2-8 siffer i ditt søk (se også eksempler på søk nedenfor).
              Når du søker så får du opp en resultatliste der det er sortert fra
              mest sannsynlig riktig varenummer til lignenede varenummer.
            </p>
            <h1 className="font-bold mb-2">Eksempeler på søk</h1>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default InfoModal;
