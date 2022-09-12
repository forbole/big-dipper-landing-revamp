import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

export interface SectionBoxProps extends ComponentProps<typeof motion.section> {
  main?: boolean;
}
