import Container from "./Container";
import Separator from "./Separator";
import { useDisplayStore } from "@/store/useDisplayStore";

export default function Footer() {
  const isVisible = useDisplayStore((state) => state.isVisible);

  return !isVisible && (
    <footer className="flex flex-col gap-y-3 bg-[#020618] py-8">
      <Container className="mx-auto flex-col">
        <div className="flex gap-x-1 w-full">
          <div className="flex flex-col gap-y-3 max-w-md">
            <div className="flex items-center gap-x-2">
              <img
                src="logo-blue.png"
                alt="Krisfy Logo"
                width={40}
                className="rounded-full aspect-square"
              />
              <span className="bg-gradient-to-r from-[#3a62ff] via-[#7044fb] to-[#9a27ff] bg-clip-text text-transparent font-bold text-2xl">
                Krisfy
              </span>
            </div>
            <p className="text-white text-sm">
              Leading DeFi platform for crypto lending and borrowing with
              institutional-grade security. Maximize your crypto asset potential
              with competitive yields.
            </p>
            <div className="flex items-center gap-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#1D293D] flex items-center justify-center text-[#99A1AF]">
                <i className="ri-twitter-line"></i>
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#1D293D] flex items-center justify-center text-[#99A1AF]">
                <i className="ri-chat-1-line"></i>
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#1D293D] flex items-center justify-center text-[#99A1AF]">
                <i className="ri-group-line"></i>
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#1D293D] flex items-center justify-center text-[#99A1AF]">
                <i className="ri-github-line"></i>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-around">
            <div className="space-y-3 text-white">
              <h6 className="text-lg font-semibold">Product</h6>
              <ul className="text-sm font-medium space-y-2 text-[#767D8D]">
                <li>Lending</li>
                <li>Borrowing</li>
                <li>Staking</li>
                <li>Yield Farming</li>
                <li>Governance</li>
              </ul>
            </div>

            <div className="space-y-3 text-white">
              <h6 className="text-lg font-semibold">Resources</h6>
              <ul className="text-sm font-medium space-y-2 text-[#767D8D]">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Security Audits</li>
                <li>Bug Bount</li>
                <li>Brand Assets</li>
              </ul>
            </div>

            <div className="space-y-3 text-white">
              <h6 className="text-lg font-semibold">Company</h6>
              <ul className="text-sm font-medium space-y-2 text-[#767D8D]">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press Kit</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="space-y-3 text-white">
              <h6 className="text-lg font-semibold">Legal</h6>
              <ul className="text-sm font-medium space-y-2 text-[#767D8D]">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Risk Disclosure</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
        </div>
        <Separator className="mt-8 mb-6" />
        <div className="grid grid-cols-2">
          <div className="space-y-2 text-white">
            <h6>Stay Updated</h6>
            <span className="text-sm font-medium text-[#767D8D]">
              Get the latest updates on new features, market insights, and
              crypto lending tips.
            </span>
          </div>
        </div>
        <Separator className="mt-6 mb-4" />
        <span className="text-xs font-medium text-[#767D8D]">
          &copy; 2024 Krisfy. All rights reserved.
        </span>
      </Container>
    </footer>
  );
}
