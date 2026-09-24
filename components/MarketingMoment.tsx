'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const image =
  'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=2000';

export function MarketingMoment() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const frame = useTransform(
    scrollYProgress,
    [0.08, 0.42, 0.78],
    ['inset(8% 6% round 42px)', 'inset(0% 0% round 0px)', 'inset(0% 0% round 0px)'],
  );
  const scale = useTransform(scrollYProgress, [0.08, 0.5, 0.92], [1.08, 1.015, 1.06]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const shade = useTransform(scrollYProgress, [0.2, 0.52, 0.84], [0.12, 0.44, 0.58]);
  const copyOpacity = useTransform(scrollYProgress, [0.28, 0.46, 0.76, 0.92], [0, 1, 1, 0]);
  const copyY = useTransform(scrollYProgress, [0.28, 0.5], [24, 0]);

  return (
    <section ref={ref} className="marketing-moment" data-nav-theme="dark" aria-label="Bukaan aluminium dan kaca">
      <div className="marketing-moment-stage">
        <motion.div
          className="marketing-moment-frame"
          style={reduceMotion ? undefined : { clipPath: frame }}
        >
          <motion.img
            src={image}
            alt="Pintu kaca dengan frame hitam sebagai fokus utama"
            width="2000"
            height="1333"
            className="marketing-moment-image"
            style={reduceMotion ? undefined : { scale, y: imageY }}
          />
          <motion.div
            className="marketing-moment-shade"
            style={reduceMotion ? undefined : { opacity: shade }}
          />
        </motion.div>

        <motion.div
          className="marketing-moment-copy"
          style={reduceMotion ? { opacity: 1 } : { opacity: copyOpacity, y: copyY }}
        >
          <p className="eyebrow light">BUKAAN · CAHAYA · PROPORSI</p>
          <h2>Bukaan yang tepat<br /><span>mengubah cara ruang terasa.</span></h2>
        </motion.div>

        <div className="marketing-moment-rail" aria-hidden="true">
          <span>PINTU</span><i />
          <span>JENDELA</span><i />
          <span>PARTISI</span><i />
          <span>SHOWER</span>
        </div>
      </div>
    </section>
  );
}
