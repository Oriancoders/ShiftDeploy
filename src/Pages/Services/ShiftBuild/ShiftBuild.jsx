import React, { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>ShiftBuild | Build & Improve Conversion-Ready Websites | ShiftDeploy</title>
        <meta
          name="description"
          content="ShiftBuild creates modular, scalable, conversion-ready websites built for growth. Performance-first development, CRO-ready structure, and SEO-friendly architecture designed to evolve with your business."
        />
        <meta
          name="keywords"
          content="ShiftBuild, conversion-ready website development, business website redesign, modular website architecture, growth-driven web design, SEO-ready website, CRO-ready website"
        />
        <meta property="og:title" content="ShiftBuild - Websites Built to Grow, Not Just Exist" />
        <meta
          property="og:description"
          content="ShiftBuild helps businesses move from outdated, rigid websites to scalable digital foundations ready for ShiftSpeed and ShiftConvert optimization."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/services/shiftbuild" />
      </Helmet>

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
