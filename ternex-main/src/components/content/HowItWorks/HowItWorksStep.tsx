import type { FC, PropsWithChildren } from "react";
import styles from "./HowItWorks.module.css";

const HowItWorksStep: FC<PropsWithChildren> = ({ children }) => {
	return <p className={styles.step}>{children}</p>;
};

export default HowItWorksStep;
