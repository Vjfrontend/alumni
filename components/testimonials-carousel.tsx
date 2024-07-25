import Testimonial from "@/components/testimonial";
export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Felicia T",

      date: "May 19, 2023",
      content:
        "I've known the Chairman of OOCF for over a decade, and his commitment to helping the less privileged has been inspiring. His vision, which predates the foundation, has positively impacted many lives and exemplifies true generosity.",
    },
    {
      name: "Rodri Alba",

      date: "Apr 12, 2023",
      content:
        "Having known the Chairman for over a decade, I've witnessed his passion for uplifting the less privileged. His work, even before the foundation, has been a beacon of warmth and selflessness in our world.",
    },
    {
      name: "Oduwole Ademola",

      date: "Mar 04, 2023",
      content:
        "The Chairman's support is a warm embrace in challenging times. His dedication to humanity is inspiring. He's a living example of selfless service and compassion!.",
    },
    {
      name: "Michael Ross",

      date: "Jan 15, 2023",
      content:
        "Long before the foundation, the Chairman was already a beacon of hope. His vision for a better society has been the driving force behind the OOCF's impactful work.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100"
    >
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-bold md:text-xl">
              Testimonials & Mentions
            </h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-[#030442] opacity-30 blur-[160px]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px]" />
          </div>
          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
