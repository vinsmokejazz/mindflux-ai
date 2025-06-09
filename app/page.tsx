import CompanionCard from "@/components/CompanionCard";
import { Button } from "@/components/ui/button";
import React from "react";

const Page=()=>{
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
      
      <section>

      </section>
      </main>
   
  )
}
export default Page