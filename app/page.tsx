import React, { Suspense } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
// import RecenrProjects from "@/components/RecenrProjects";
const RecenrProjects = React.lazy(() => import("@/components/RecenrProjects"));
// import Clients from "@/components/Clients";
const Clients = React.lazy(() => import("@/components/Clients"));
// import Experience from "@/components/Experience";
const Experience = React.lazy(() => import("@/components/Experience"));
// import Approach from "@/components/Approach";
const Approach = React.lazy(() => import("@/components/Approach"));
// import Footer from "@/components/Footer";
const Footer = React.lazy(() => import("@/components/Footer"));

import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero/>
          <Suspense>
            <FloatingNav navItems={navItems}/>
          </Suspense>
          <Grid/>
          {/* fallback={<p>Loading...</p>} */}
          <Suspense> 
            <RecenrProjects/>
            <Clients/>
            <Experience/>
            <Approach/>
            <Footer/>
          </Suspense>
        </div>
    </main>
  );
}
