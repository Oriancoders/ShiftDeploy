'use client';
import React, { lazy, Suspense, useEffect } from "react";
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
