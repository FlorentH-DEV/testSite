import { useInView } from "framer-motion";
import { useRef } from "react";

const SectionPerso = ({ id, children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${inView ? "section-visible" : "section-hidden"}`}
    >
      {children}
    </section>
  );
};

export default SectionPerso;