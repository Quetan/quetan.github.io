import { motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

const MotionShow: FC<PropsWithChildren> = ({ children }) => {
	return (
		<motion.div
			className="will-change-transform"
			initial={{ opacity: 0, scale: 1.2 }}
			whileInView={{
				opacity: 1,
				scale: 1,
				transition: { type: "spring", damping: 9, duration: 0.75 },
			}}
		>
			{children}
		</motion.div>
	);
};

export default MotionShow;
