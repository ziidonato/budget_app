import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "../base/Portal";
import styles from "styles/Components.module.scss";
import Link from "next/link";

const NavButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="w-full h-full text-end">
        <motion.button
          aria-hidden={isOpen ? "false" : "true"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          onClick={() => setIsOpen(true)}
        >
          <i className="fas fa-bars fa-xl" />
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <Portal onClose={handleClose} styles="absolute right-4 top-20">
            <Nav onClose={handleClose} />
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

const Nav = (props: { onClose: () => void }) => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Login/Register",
      href: "/login",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Transactions",
      href: "/transactions",
    },
  ];

  const navItems = links.map(({ name, href }) => (
    <Link key={name} href={href}>
      <a className={styles.navItem} onClick={props.onClose}>
        {name}
      </a>
    </Link>
  ));
  return <div className={styles.nav}>{navItems}</div>;
};

export default NavButton;
