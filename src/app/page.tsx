import Carousel from "@/components/carousel/Carousel";
import Info from "@/components/icons/Info";
import { Dropdown } from "@/components/kit/Dropdown";
import Subtitle from "@/components/kit/subtitle";
import NoiseShapeChart from "@/components/NoiseShapeChart";
import Image from "next/image";
import Link from "next/link";
import noiseImage from "../../public/noise.webp";

export default function Home() {
  return (
    <section className="space-y-4 pt-2 md:pt-3">
      {/* Header */}
      <section className="flex items-center justify-between space-x-3 py-3">
        <hr className="h-px w-full text-[#F2F2F2]" />
        <Subtitle text="Nose chapter 2" />
        <hr className="h-px w-full text-[#F2F2F2]" />
      </section>

      {/* Noise Features */}
      <section className="border border-[#F2F2F2] p-6 rounded-xl space-y-5">
        <Subtitle text="Nose Proportions" />
        <div className="space-y-4">
          <h1
            className="text-[#121212] font-sans font-medium text-[24px] leading-[28px] tracking-[0em] 
               md:text-[32px] md:leading-[36px] md:tracking-[-0.015em] 
               lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.015em]"
          >
            A <span className="text-[#9AAEB5]">review</span> of your nose’s
            proportions
          </h1>
          <p className="text-[#121212] leading-[18px] max-w-lg md:leading-5">
            The nose is a feature that should be considered{" "}
            <span className="font-medium font-sans">relative</span> to others,
            influencing the overall side profile
            <span className="font-medium font-sans"> harmony.</span>
          </p>
        </div>
      </section>

      {/* Container */}
      <section className="border border-[#F2F2F2] rounded-xl space-y-4 p-3">
        {/* Carousel */}
        <section>
          <Carousel />
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image */}
          <section className="w-full h-[300px] md:h-[590px] lg:h-full relative rounded-xl border border-[#F2F2F2] overflow-hidden md:col-span-2 lg:row-span-2 lg:col-span-1 lg:col-start-2 bg-white">
            <Image
              src={noiseImage}
              alt="noise image"
              fill
              className="object-cover"
            />
          </section>

          {/* Explanation */}
          <section className="border border-[#F2F2F2] p-3 rounded-xl bg-[#FAFAFA] flex flex-col justify-between lg:row-start-1 min-h-[164px]  lg:min-h-[172px]">
            <div className="flex items-center justify-between">
              <Subtitle text="Explanation" />
              <Link
                title="QOVES landing page"
                href="https://www.qoves.com/"
                target="_blank"
              >
                <div className="hidden md:flex bg-[#F2F2F2] px-2 p-[5px] rounded-full items-center justify-center space-x-2 text-[#758084] cursor-pointer hover:bg-[#e7e7e7] duration-300">
                  <p className="text-sm font-sans font-light">Appendix</p>
                  <Info />
                </div>
              </Link>
            </div>
            <p className="text-[#121212] leading-[18px] md:max-w-sm md:leading-5 ">
              Your nose has{" "}
              <span className="font-medium"> balanced projection</span>, which
              means that its length from the face is at an attractive
              proportion.
            </p>
          </section>

          {/* Noise Shape */}
          <section className="border border-[#F2F2F2] p-3 rounded-xl bg-[#FAFAFA] space-y-5">
            <div className="flex items-center justify-between">
              <Subtitle text="Nose Shape" />
              <Dropdown />
            </div>

            <NoiseShapeChart />
          </section>
        </div>
      </section>
    </section>
  );
}
