import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="flex items-center justify-center gap-6">
        <CompanionCard id="123"
          name="Neura the brainy expert"
          topic="neural network of brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard id="123"
          name="Neura the brainy expert"
          topic="neural network of brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard id="123"
          name="Neura the brainy expert"
          topic="neural network of brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />

      </section>

      <section className="home-section">
        <CompanionsList title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full" />
        <CTA/>
      </section>
    </main>

  )
}
export default Page