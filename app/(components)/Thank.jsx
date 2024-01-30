import Image from "next/image";
const Thank = () => {
  return (
    <div className="w-1/2 h-1/3 self-center flex flex-col justify-between items-center">
      <Image
        src="/images/icon-complete.svg"
        alt="complete icon"
        width="60"
        height="61"
      />
      <div className="">
        <h2 className="text-center uppercase text-2xl tracking-widest mb-2">
          thank you
        </h2>
        <p className="text-center text-gray-800 text-[18px]">
          We have added your card details
        </p>
      </div>
      <button
        style={{ backgroundColor: "#220930" }}
        className="w-1/2 border rounded-lg h-9 mt-5 text-white h-12"
      >
        Continue
      </button>
    </div>
  );
};

export default Thank;
