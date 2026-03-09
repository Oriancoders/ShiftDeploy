import React, { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
			<Helmet>
				<title>ShiftConvert | Conversion & UX Optimization That Improves Lead Quality | ShiftDeploy</title>
				<meta
					name="description"
					content="ShiftConvert improves conversion performance by optimizing UX flow, page clarity, and decision architecture. Turn existing traffic into more qualified leads without guesswork."
				/>
				<meta
					name="keywords"
					content="ShiftConvert, CRO service, conversion rate optimization, UX optimization, funnel optimization, website conversion strategy, lead quality improvement"
				/>
				<meta property="og:title" content="ShiftConvert - Conversion & UX Optimization That Drives Action" />
				<meta
					property="og:description"
					content="ShiftConvert helps service businesses improve conversion outcomes through clearer messaging, smarter funnel flow, and higher trust architecture."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.shiftdeploy.com/services/shiftconvert" />
			</Helmet>

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
