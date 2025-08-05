// import { useConnectWallet } from "../services/useConnectWallet";
// import { useWalletStore } from "@/store/useWalletStore";
import Container from "./Container";
import Button from "./Button";
import Popover from "./Popover";
import { useDisplayStore }  from "@/store/useDisplayStore";
import { useWalletDisplayStore } from "@/store/useWalletDisplayStore";
import WalletCard from "./WalletCard";

export default function Navbar() {
  // const { connect } = useConnectWallet();
  // const { connected } = useWalletStore();
  const isVisible = useDisplayStore((state) => state.isVisible);
  const toggleVisibility = useDisplayStore((state) => state.toggleVisibility);
  const { toggleWallet } = useWalletDisplayStore();

  return (
    <nav
      className="flex justify-center z-20 bg-[#0b0d11] py-3 items-center fixed top-0 left-0 right-0 "
      role="navigation"
      aria-label="main navigation"
    >
      <WalletCard />
      <Container className="justify-between items-center">
        {/* Icon logo */}
        <div className="flex items-center gap-x-2">
          <img
            src="logo-blue.png"
            alt="Krisfy Logo"
            width={35}
            className="rounded-full aspect-square"
          />
          <span className="bg-gradient-to-r from-[#3a62ff] via-[#7044fb] to-[#9a27ff] bg-clip-text text-transparent font-bold text-xl">
            Krisfy
          </span>
        </div>

        {/* Menu */}
        {!isVisible ? (

        <ul className="flex items-center gap-x-10 text-white text-sm">
          <li className="cursor-pointer flex items-center relative">
            <Popover
              triggerElement={
                <>
                  <span>Products</span>{" "}
                  <i className="ri-arrow-drop-down-line text-xl"></i>
                </>
              }
            >
              <h6 className="text-[#50A1FE] sticky top-0 font-semibold">
                Our Products
              </h6>
              <div className="mt-4 grid grid-cols-1 gap-y-3">
                <div className="text-white px-3 py-4 bg-[#233044] rounded-xl border border-gray-200/20 font-semibold flex flex-col gap-y-1.5">
                  <span>Krisfy</span>
                  <p className="font-light">Core DeFi lending platform</p>
                </div>
                <div className="text-white overflow-hidden relative px-3 py-4 bg-gray-600/20 rounded-xl border border-gray-200/20 font-semibold flex flex-col gap-y-1.5">
                  <span>
                    Advanced Features{" "}
                    <span className="bg-purple-800 py-1 px-3 rounded-xl text-xs font-light border border-gray-200/20">
                      Coming Soon
                    </span>
                  </span>
                  <p className="font-light">Core DeFi lending platform</p>
                  <div className="absolute inset-0 bg-[#162030a8] w-full h-full" />
                </div>
              </div>
            </Popover>
          </li>
          <li className="cursor-pointer flex items-center relative">
            <Popover
              triggerElement={
                <>
                  <span>Resources</span>{" "}
                  <i className="ri-arrow-drop-down-line text-xl"></i>
                </>
              }
            >
              <h6 className="text-[#B473EF] sticky top-0 font-semibold">
                Resources
              </h6>
              <div className="mt-4 grid grid-cols-1 gap-y-3">
                <div className="text-white px-3 py-4 bg-[#233044] rounded-xl border border-gray-200/20 font-semibold flex flex-col gap-y-1.5">
                  <div className="flex items-center gap-x-2">
                    <i className="ri-global-line text-[#83CBFF] text-xl"></i>
                    <div className="flex flex-col">
                      <span>Ecosystems</span>
                      <p className="font-light">
                        Explore our partners networks
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-white px-3 py-4 bg-[#233044] rounded-xl border border-gray-200/20 font-semibold flex flex-col gap-y-1.5">
                  <div className="flex items-center gap-x-2">
                    <i className="ri-government-fill text-[#9B9B9B] text-xl"></i>
                    <div className="flex flex-col">
                      <span>Governance</span>
                      <p className="font-light">
                        Participate in protocol decisions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-white px-3 py-4 bg-[#233044] rounded-xl border border-gray-200/20 font-semibold flex flex-col gap-y-1.5">
                  <div className="flex items-center gap-x-2">
                    <i className="ri-chat-1-fill text-white text-xl"></i>
                    <div className="flex flex-col">
                      <span>Help & Support</span>
                      <p className="font-light">Get assistance and guidance</p>
                    </div>
                  </div>
                </div>

                <div className="text-white px-3 py-4 bg-[#233044] rounded-xl border border-gray-200/20 font-semibold flex flex-col gap-y-1.5">
                  <div className="flex items-center gap-x-2">
                    <i className="ri-question-mark text-[#F8312F] text-xl"></i>
                    <div className="flex flex-col">
                      <span>FAQ</span>
                      <p className="font-light">Frequently asked questions</p>
                    </div>
                  </div>
                </div>

                <div className="text-white px-3 py-4 bg-[#233044] rounded-xl border border-gray-200/20 font-semibold flex flex-col gap-y-1.5">
                  <div className="flex items-center gap-x-2">
                    <i className="ri-blogger-fill text-[#F3EEF8] text-xl"></i>
                    <div className="flex flex-col">
                      <span>Blog</span>
                      <p className="font-light">Latest news and updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover>
          </li>
          <li className="cursor-pointer flex items-center relative">
            <Popover
              triggerElement={
                <>
                  <span>Developers</span>{" "}
                  <i className="ri-arrow-drop-down-line text-xl"></i>
                </>
              }
            >
              <h6 className="text-[#06D16E] sticky top-0 font-semibold">
                Developer Resources
              </h6>
              <div className="mt-4 grid grid-cols-1 gap-y-3">
                <div className="text-white px-3 py-4 bg-[#233044] rounded-xl border border-gray-200/20 font-semibold flex flex-col gap-y-1.5">
                  <div className="flex items-center gap-x-2">
                    <i className="ri-stack-fill text-[#00A6ED] text-xl"></i>
                    <div className="flex flex-col">
                      <span>Documentation</span>
                      <p className="font-light">
                        Comprehensive API and protocol docs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-white px-3 py-4 bg-[#233044] rounded-xl border border-gray-200/20 font-semibold flex flex-col gap-y-1.5">
                  <div className="flex items-center gap-x-2">
                    <i className="ri-lock-line text-[#F9C23C] text-xl"></i>
                    <div className="flex flex-col">
                      <span>Security</span>
                      <p className="font-light">
                        Audit reports and security practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover>
          </li>
        </ul>

        ):
          <ul className="flex items-start w-[70%] gap-x-10 text-white text-sm">
            <li className="font-bold">Dashboard</li>
            <li className="font-bold text-gray-500">Market</li>
            <li className="font-bold text-gray-500">Governance</li>
          </ul>
        }

        {/*  */}
        <div className="flex items-center gap-x-4">
          {!isVisible ? (
            <>
              <i className="ri-search-line cursor-pointer text-white text-3xl"></i>
              <Button className="hover:cursor-pointer active:scale-95" onClick={toggleVisibility}>Open App</Button>
            </>
          ) : (
            <Button className="hover:cursor-pointer active:scale-95" onClick={toggleWallet}>Connect Wallet</Button>
          )}
        </div>
      </Container>
    </nav>
  );
}
