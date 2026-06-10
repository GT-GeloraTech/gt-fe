// "use client";

// import { motion } from "framer-motion";

// interface Props {
//   technologies: string[];
// }

// export default function OrbitTech({ technologies }: Props) {
//   const radius = 260;

//   return (
//     <div className="relative flex min-h-[650px] items-center justify-center overflow-visible">
//       {/* Center */}
//       <div className="absolute z-20 flex h-56 w-56 flex-col items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_80px_rgba(255,255,255,0.04)] backdrop-blur-xl">
//         <span className="text-primary text-sm tracking-[0.3em] uppercase">Core</span>

//         <h3 className="mt-2 text-center text-3xl font-semibold">Tech Stack</h3>
//       </div>

//       {/* Orbit system */}
//       <motion.div
//         className="relative h-[520px] w-[520px]"
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 35,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         {/* ring */}
//         <div className="absolute inset-0 rounded-full border border-white/10" />

//         {technologies.map((tech, index) => {
//           const angle = (index / technologies.length) * (Math.PI * 2);

//           const x = Math.cos(angle) * radius;
//           const y = Math.sin(angle) * radius;

//           return (
//             <motion.div
//               key={tech}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               style={{
//                 x,
//                 y,
//               }}
//               animate={{ rotate: -360 }}
//               transition={{
//                 duration: 35,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             >
//               <div className="group rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 whitespace-nowrap backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white/30">
//                 {tech}
//               </div>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";

interface Props {
  technologies: string[];
}

export default function OrbitTech({ technologies }: Props) {
  return (
    <div className="relative flex min-h-[450px] items-center justify-center overflow-visible px-4 sm:min-h-[550px] lg:min-h-[650px]">
      {/* Center */}
      <div className="absolute z-20 hidden h-28 w-28 flex-col items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_80px_rgba(255,255,255,0.04)] backdrop-blur-xl sm:flex sm:h-40 sm:w-40 lg:h-56 lg:w-56">
        <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs sm:tracking-[0.3em] lg:text-sm">
          Core
        </span>

        <h3 className="mt-1 text-center text-lg font-semibold sm:mt-2 sm:text-2xl lg:text-3xl">
          Tech Stack
        </h3>
      </div>

      {/* Orbit */}
      <motion.div
        className="relative h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] lg:h-[520px] lg:w-[520px]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Ring */}
        <div className="absolute inset-0 rounded-full border border-white/10" />

        {technologies.map((tech, index) => {
          const radius =
            typeof window !== "undefined"
              ? window.innerWidth < 640
                ? 140
                : window.innerWidth < 1024
                  ? 200
                  : 260
              : 260;

          const angle = (index / technologies.length) * (Math.PI * 2);

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tech}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ x, y }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="group rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs whitespace-nowrap backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white/30 sm:px-5 sm:py-3 sm:text-sm lg:px-8 lg:py-4 lg:text-base">
                {tech}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
