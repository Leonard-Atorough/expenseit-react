import { useOutletContext } from "react-router";
import { Features, Hero } from "../components/features/landing";

export function LandingPage() {
  useOutletContext<{ setPage: (page: string | undefined) => void }>().setPage("HOME");

  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
