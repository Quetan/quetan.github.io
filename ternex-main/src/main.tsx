import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./components/theme/themeProvider/themeProvider";
import { ThemeToggler } from "./components/theme/themeToggler/themeToggler";
import "@fontsource-variable/tektur";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="theme">
			<Layout />
			<ThemeToggler />
		</ThemeProvider>
	</React.StrictMode>
);
