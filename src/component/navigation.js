import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import { appMenuItems } from "../app-route";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = appMenuItems;

export const Navigation = () => (
  <motion.ul id="appmenu" variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i.id} />
    ))}
  </motion.ul>
);
