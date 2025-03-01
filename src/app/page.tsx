export default function Home() {
  return (
    <section>
      {/* Header */}
      <section className="flex items-center justify-between space-x-3 py-3">
        <hr className="h-px w-full text-[#F2F2F2]" />
        <p className="text-[#758084] whitespace-nowrap uppercase text-xs font-mono">
          Noise chapter 2
        </p>
        <hr className="h-px w-full text-[#F2F2F2]" />
      </section>

      {/* Nose Features */}
      <section className="border border-[#F2F2F2] p-6 rounded-xl space-y-5">
        <p className=" font-zagma text-[#758084] uppercase text-xs tracking-tight">
          Noise features
        </p>
        <div className="space-y-4">
          <h1 className="text-2xl md:text-[32px] lg:text-[40px] text-[#121212] leading-7 md:leading-8  tracking-tight font-semibold ">
            A <span className="text-[#9AAEB5]">review</span> of your nose’s
            proportions
          </h1>
          <p className="text-[#121212] leading-[18px] max-w-lg md:leading-5">
            The nose is a feature that should be considered{" "}
            <span className="font-semibold">relative</span> to others,
            influencing the overall side profile
            <span className="font-semibold"> harmony.</span>
          </p>
        </div>
      </section>

      {/* Container */}

      <section>
        {/* Carousel */}
        <section></section>
        {/* Image */}
        <section></section>

        {/* Explanation */}
        <section></section>

        {/* Noise Shape */}
        <section></section>
      </section>
    </section>
  );
}
