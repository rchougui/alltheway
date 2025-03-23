"use client";

import { HeroSection } from "../components/Hero";
import { Header } from "../components/layout/header";
import { TravelOptions } from "../components/TravelOptions";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TravelOptions />
    </>
  );
}
