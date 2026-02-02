import TiltedCard from "./TiltedCard";

export default function Hero({ data }) {
  return (
    <section className="bg-card rounded-3xl p-5 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-[0_20px_60px_rgba(8,15,32,0.12)]">
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brandGreen">
            {data.content.kicker}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-text mt-2 leading-tight">
            {data.content.title}
          </h1>
        </div>
        <p className="text-base leading-relaxed text-textMuted">
          {data.content.body}
        </p>
        <button className="bg-brandGreen text-white font-semibold px-6 py-3 rounded-full w-fit">
          {data.cta.label}
        </button>
      </div>
      <div className="shrink-0 w-48 h-48 md:w-56 md:h-56 bg-linear-to-br from-accent/20 to-brandGreen/20 rounded-2xl flex items-center justify-center relative">
        {data.image ? (
          <TiltedCard
            imageSrc={data.image}
            altText="Profile"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            imgClassName="object-cover object-[center_30%]"
          />
        ) : (
          <div className="w-full h-full bg-brandGreen/20" />
        )}
      </div>
    </section>
  );
}
