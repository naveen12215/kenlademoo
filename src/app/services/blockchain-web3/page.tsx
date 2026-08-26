import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";

const service = services.find((item) => item.slug === "blockchain-web3")!;

export const metadata: Metadata = {
  title: "Blockchain & Web3 Development",
  description:
    "Build decentralized applications, smart contracts, DeFi protocols, and NFT platforms with Kenla Systems. Security-first blockchain engineering on Ethereum, Polygon, and more.",
};

export default function BlockchainWeb3Page() {
  return <ServicePageLayout service={service} />;
}
