import { useOutletContext } from "react-router";
import { Features } from "../components/landing/Features";
import { Hero } from "../components/landing/Hero";

export function LandingPage() {
  useOutletContext<{ setPage: (page: string | undefined) => void }>().setPage("HOME");

  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
