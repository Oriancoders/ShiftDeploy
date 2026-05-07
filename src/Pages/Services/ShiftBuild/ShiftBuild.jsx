'use client';
import React, { lazy, Suspense, useEffect } from "react";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ShiftDeployLoader from "../../../components/ShiftDeployLoader";
import BuildHero from "./sections/BuildHero";

const BuildProblem = lazy(() => import("./sections/BuildProblem"));
const BuildSolution = lazy(() => import("./sections/BuildSolution"));
const BuildComparison = lazy(() => import("./sections/BuildComparison"));
const BuildFaqs = lazy(() => import("./sections/BuildFaqs"));
const IndustriesSection = lazy(() =>
  import("./sections/IndustriesSection").then((m) => ({ default: m.IndustriesSection }))
);

const ShiftBuild = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      

      <div className="w-full">
        <Navigation />

        <Suspense fallback={<ShiftDeployLoader />}>
          <BuildHero />
          <BuildProblem />
          <IndustriesSection />
          <BuildSolution />
          <BuildComparison />
          <BuildFaqs />
        </Suspense>

        <Footer />
      </div>
    </>
  );
};

export default ShiftBuild;
