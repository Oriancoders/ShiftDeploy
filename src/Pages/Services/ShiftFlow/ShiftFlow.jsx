import React, { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ShiftDeployLoader from "../../../components/ShiftDeployLoader";
import FlowHero from "./sections/FlowHero";

const FlowProblem = lazy(() => import("./sections/FlowProblem"));
const FlowSolution = lazy(() => import("./sections/FlowSolution"));
const FlowComparison = lazy(() => import("./sections/FlowComparison"));
const FlowFaqs = lazy(() => import("./sections/FlowFaqs"));
const IndustriesSection = lazy(() =>
  import("./sections/IndustriesSection").then((m) => ({ default: m.IndustriesSection }))
);

const ShiftFlow = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>ShiftFlow | Ongoing Support & Optimization | ShiftDeploy</title>
        <meta
          name="description"
          content="ShiftFlow keeps your digital presence healthy with proactive monitoring, preventive fixes, security upkeep, and monthly optimization cycles that protect growth."
        />
        <meta
          name="keywords"
          content="ShiftFlow, website maintenance service, proactive website monitoring, security updates, performance checks, ongoing optimization, web ops support"
        />
        <meta property="og:title" content="ShiftFlow - Keeping Your Digital Presence Healthy" />
        <meta
          property="og:description"
          content="ShiftFlow is proactive support and optimization: monitoring, preventive fixes, performance checks, and monthly improvements to protect long-term ROI."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/services/shiftflow" />
      </Helmet>

      <div className="w-full">
        <Navigation />

        <Suspense fallback={<ShiftDeployLoader />}>
          <FlowHero />
          <FlowProblem />
          <IndustriesSection />
          <FlowSolution />
          <FlowComparison />
          <FlowFaqs />
        </Suspense>

        <Footer />
      </div>
    </>
  );
};

export default ShiftFlow;
