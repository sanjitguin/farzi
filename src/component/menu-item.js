import * as React from "react";
import { animate, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import '../style/menu-item.css'
import { useDispatch, useSelector } from "react-redux";
import { appMenuAction } from "../store/menu-slice";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = ({ i }) => {
  
  const style = { border: `2px solid ${i.border}` };
  const selectedMenu = useSelector(state => state.appMenu.selectedMenu)
  const dispatch = useDispatch();

  return (
    <motion.li id="appmenu"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
       <NavLink to={`${i.path}`} style={{textDecoration: "none"}} onClick={ () => 
                    dispatch(appMenuAction.updateSelectedMenu(i)) }> 
        <div className="icon-placeholder" style={style} />
        <div className="text-placeholder" style={style} >
                {i.text}
        </div>
      </NavLink>
    </motion.li>
  );
};
