import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="flex min-h-screen items-center bg-primary/30 py-24 xl:py-0">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-x-10">
          {/* text */}
          <div className="mb-2 flex flex-col text-center lg:text-left xl:mb-0 xl:w-[30vw] xl:pt-16">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Crafted work with depth and intent
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-6 max-w-[440px] lg:mx-0"
            >
              A focused selection of product, brand, and automation work built
              around narrative, motion, and conversion. Each project balances
              clarity with premium interaction design.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto flex w-full max-w-[440px] items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm lg:mx-0"
            >
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                  Projects
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">03</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                  Focus
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Storytelling, AI, UX Systems
                </div>
              </div>
            </motion.div>
          </div>

          {/* projects */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[68%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
