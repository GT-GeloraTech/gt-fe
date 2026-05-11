import { services } from "@/constants/services";

import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <h2 className="mt-25 text-[56px] leading-none font-black tracking-[-0.04em] text-white">
            Our <span className="text-[#d4b06a]">Services</span>
          </h2>

          <p className="mt-5 text-[18px] leading-8 text-zinc-400">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 80}>
                <Card className="group relative min-h-[250px] overflow-hidden rounded-[26px] border border-[#d4b06a]/12 bg-[#2a0d35]/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4b06a]/40 hover:shadow-[0_0_35px_rgba(212,176,106,0.14)]">
                  {/* Glow Layer */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-[26px] border border-[#d4b06a]/30" />

                    <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#d4b06a]/10 blur-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-7 flex h-[64px] w-[64px] items-center justify-center rounded-[20px] bg-[#d4b06a] text-black transition-transform duration-300 group-hover:scale-110">
                      <Icon size={30} />
                    </div>

                    {/* Title */}
                    <h3 className="mb-5 text-[22px] leading-none font-bold text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="max-w-[320px] text-[16px] leading-8 text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
