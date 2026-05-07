'use client';
import React, { lazy, Suspense, useEffect } from "react";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ShiftDeployLoader from "../../../components/ShiftDeployLoader";
import ConvertHero from "./sections/ConvertHero";

const ConvertProblem = lazy(() => import("./sections/ConvertProblem"));
const ConvertSolution = lazy(() => import("./sections/ConvertSolution"));
const ConvertComparison = lazy(() => import("./sections/ConvertComparison"));
const ConvertFaqs = lazy(() => import("./sections/ConvertFaqs"));
const IndustriesSection = lazy(() =>
	import("./sections/IndustriesSection").then((m) => ({ default: m.IndustriesSection }))
);

const ShiftConvert = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, []);

	return (
		<>
			

			<div className="w-full">
				<Navigation />

				<Suspense fallback={<ShiftDeployLoader />}>
					<ConvertHero />
					<ConvertProblem />
					<IndustriesSection />
					<ConvertSolution />
					<ConvertComparison />
					<ConvertFaqs />
				</Suspense>

				<Footer />
			</div>
		</>
	);
};

export default ShiftConvert;
