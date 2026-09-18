import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TokenInfo from "@/components/TokenInfo";
import ContractStatus from "@/components/ContractStatus";
import TokenDesign from "@/components/TokenDesign";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <TokenInfo />
      <ContractStatus />
      <TokenDesign />
      <Roadmap />
      <Footer />
    </main>
  );
}