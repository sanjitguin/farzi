
import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "./use-dimension";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";
import '../style/menu.css'
import { useDispatch, useSelector } from "react-redux";
import { appMenuAction } from "../store/menu-slice";

const sidebar = {
  open: (height = window.innerHeight) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Menu = () => {
  
  const isOpen = useSelector(state => state.appMenu.isOpen)
  const dispatch = useDispatch();

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav id="appmenu"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => dispatch(appMenuAction.toggleIsOpen(!isOpen))} />
    </motion.nav>
  );
};
