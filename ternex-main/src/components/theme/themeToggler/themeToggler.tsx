import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/themeProvider/themeProvider";

export function ThemeToggler() {
	const { theme, setTheme } = useTheme();

	const isDark = theme === "dark";

	const toggleTheme = () => {
		setTheme(isDark ? "light" : "dark");
	};

	return (
		<Button
			onClick={toggleTheme}
			className="fixed bottom-[5dvh] right-4 z-50"
			variant="link"
			size="icon"
		>
			{isDark ? (
				<Moon className="absolute h-[2.5rem] w-[2.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			) : (
				<Sun className="h-[2.5rem] w-[2.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			)}
			<span className="sr-only">Сменить тему</span>
		</Button>
	);
}
