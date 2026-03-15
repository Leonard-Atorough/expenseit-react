import { useEffect } from "react";
import { useOutletContext } from "react-router";
import { Features, Hero } from "../../components/features/landing";

export default function LandingPage() {
  const { setPage } = useOutletContext<{ setPage: (page: string | undefined) => void }>();

  useEffect(() => {
    setPage("HOME");
  }, [setPage]);

  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
