import Button from "@/components/Button";
import Container from "@/components/Container";
import TextGradient from "@/components/LandingPage/TextGradient";
// import { useWalletStore } from "@/store/useWalletStore";

const LandingPages = () => {

  const questionsNAnswers = [
    {
      q: "What is crypto lending and how does it work?",
      a: "Crypto lending is the process of lending your cryptocurrency assets to other borrowers and earning interest as a return. Our platform uses smart contracts to automate this process, ensuring security and transparency. You can earn yields up to 15% APY from the assets you lend.",
    },
    {
      q: "Are my funds safe on this platform?",
      a: "Yes, security is our top priority. All smart contracts have been audited by leading security firms. We use a non-custodial system, meaning you retain full control over your private keys. Additionally, our platform is equipped with fund insurance and multi-layer security systems.",
    },
    {
      q: "What is the minimum deposit to start lending?",
      a: "Minimum deposits vary depending on the asset type. For Bitcoin minimum $100, Ethereum $50, and stablecoins like USDC minimum $25. We are committed to making DeFi accessible to everyone.",
    },
    {
      q: "Is there a lock period for funds I lend?",
      a: "There is no lock period for lending on our platform. You can withdraw funds anytime 24/7. However, for optimal yields, we recommend holding for at least 30 days.",
    },
    {
      q: "Which cryptocurrencies are supported?",
      a: "We support 50+ cryptocurrency assets including Bitcoin (BTC), Ethereum (ETH), all major stablecoins (USDC, USDT, DAI), DeFi tokens (UNI, AAVE, COMP), and many popular altcoins. The complete list is available on the Markets page.",
    },
    {
      q: "How is the interest I earn calculated?",
      a: "Interest is calculated as compound daily based on APY (Annual Percentage Yield). Rates are dynamic following market supply-demand. You can monitor earnings in real-time on the dashboard and see earning projections in our calculator.",
    },
    {
      q: "Are there any hidden fees?",
      a: "Transparency is key. There are no deposit or withdrawal fees. We only charge a 10% platform fee from the yields you earn. All fee structures are available on the Pricing page and clearly displayed before each transaction.",
    },
    {
      q: "What if I want to borrow crypto?",
      a: "You can use crypto assets as collateral to borrow other assets. Maximum Loan-to-Value (LTV) ratio is 75%. Interest rates start from 3% APR depending on collateral assets. Liquidation occurs automatically if collateral value drops below maintenance margin",
    },
  ];

  return (
    <div className="bg-[#0e162b]">
      {/* Main page */}
      <main className="bg-gradient-to-tr pt-10 from-[#1e163e] via-[#0e162c] h-screen to-[#1e163e]">
        <Container className="gap-x-4 items-center h-[90vh] justify-between mx-auto">
          <div className="w-1/2 relative space-y-6">
            <div className="absolute inset-0 bg-white blur-[80px] m-auto opacity-80 rounded-full w-20 h-20"></div>
            <h1 className="text-7xl uppercase font-bold text-white">
              <TextGradient withVia text="Unlock Your" /> Crypto Potential
            </h1>

            <p className="text-white text-xl">
              Krisfy is the leading DeFi platform to maximize the value of your
              crypto assets. Lend, borrow, and earn with institutional-grade
              security and competitive yields.
            </p>

            <div className="flex items-center gap-x-6">
              <Button className="flex items-center gap-x-4 py-1.5 justify-between text-lg">
                <span>Get Started</span>
                <i className="ri-arrow-right-line"></i>
              </Button>
              <button className="bg-[#201d3a] cursor-pointer border border-[#33333b] px-8 text-[#4e98f0] font-semibold text-lg py-1.5 rounded-2xl">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-x-6">
              <div className="flex items-center gap-x-1">
                <i className="ri-stock-line text-lg text-[#05df72]"></i>
                <div className="-space-y-1">
                  <span className="text-lg font-bold text-white block">
                    $2.5B+
                  </span>
                  <span className="text-sm font-light text-white">
                    Total Volume
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <i className="ri-shield-line text-lg text-[#51a2ff]"></i>
                <div className="-space-y-1">
                  <span className="text-lg font-bold text-white block">
                    100%
                  </span>
                  <span className="text-sm font-light text-white">Secure</span>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <i className="ri-flashlight-line text-lg text-[#b472f5]"></i>
                <div className="-space-y-1">
                  <span className="text-lg font-bold text-white block">
                    24/7
                  </span>
                  <span className="text-sm font-light text-white">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard - Right Side */}
          <div className="w-1/2">
            <div className="px-3 py-4 rounded-2xl relative bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 border border-[#353b77]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur-3xl opacity-40"></div>{" "}
              <div className="flex relative z-10 items-center justify-between">
                <h5 className="text-white font-semibold text-lg">
                  Krisfy Dashboard
                </h5>
                <div className="w-2 h-2 bg-[#05DD72] rounded-full" />
              </div>
              <div className="my-3 relative z-10 gap-x-3 flex items-center justify-between">
                <div className="w-1/2 bg-[#23274faf] border border-[#2c2f4f] flex flex-col text-white p-3 rounded-xl">
                  <span className="font-light text-sm">Available to Lend</span>
                  <span className="font-bold text-xl">$125,430</span>
                  <span className="text-sm text-[#05DD72]">+12.5% APY</span>
                </div>
                <div className="w-1/2 bg-[#23274faf] border border-[#2c2f4f] flex flex-col text-white p-3 rounded-xl">
                  <span className="font-light text-sm">Current Loans</span>
                  <span className="font-bold text-xl">$89,250</span>
                  <span className="text-sm text-[#51a2ff]">+5.8% APR</span>
                </div>
              </div>
              <div className="flex flex-col relative z-10 gap-y-4">
                <div className="bg-[#23274faf] border border-[#2c2f4f] flex items-center justify-between p-3 rounded-xl">
                  <div className="flex items-center gap-x-2">
                    <span className="w-8 h-8 bg-gradient-to-r from-[#B360FF] to-[#9E30FC] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      I
                    </span>
                    <div className="flex text-white flex-col">
                      <span className="font-semibold text-lg">ICP</span>
                      <span className="text-xs">13.1% APY</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-semibold text-white text-lg">
                      $41658
                    </span>
                    <span className="text-[#05DD72]">+2.7%</span>
                  </div>
                </div>

                <div className="bg-[#23274faf] border border-[#2c2f4f] flex items-center justify-between p-3 rounded-xl">
                  <div className="flex items-center gap-x-2">
                    <span className="w-8 h-8 bg-gradient-to-br from-[#CB6CE7] to-[#e12d90] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      S
                    </span>
                    <div className="flex text-white flex-col">
                      <span className="font-semibold text-lg">SOL</span>
                      <span className="text-xs">11.5% APY</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-semibold text-white text-lg">
                      $17475
                    </span>
                    <span className="text-[#05DD72]">+3.8%</span>
                  </div>
                </div>

                <div className="bg-[#23274faf] border border-[#2c2f4f] flex items-center justify-between p-3 rounded-xl">
                  <div className="flex items-center gap-x-2">
                    <span className="w-8 h-8 bg-gradient-to-br from-[#4496FF] to-[#1E6AFE] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      U
                    </span>
                    <div className="flex text-white flex-col">
                      <span className="font-semibold text-lg">USDC</span>
                      <span className="text-xs">14.7% APY</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-semibold text-white text-lg">
                      $43805
                    </span>
                    <span className="text-[#05DD72]">+4.1%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* Why Choose Krisfy */}
      <section>
        <Container className="mx-auto py-10 flex-col gap-y-4">
          <div className="space-y-2 w-full flex items-center flex-col">
            <h2 className="text-4xl font-bold text-white">
              Why Choose <TextGradient text="Krisfy" />
            </h2>
            <p className="text-white text-center text-lg max-w-2xl">
              The most secure and profitable DeFi platform to maximize your
              crypto asset potential.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-y-5 gap-x-6 mt-8">
            <div className="p-4 group relative hover:scale-[1.05] duration-100 transition bg-[#23274faf] rounded-lg flex flex-col gap-y-3 border-[#2c2f4f] border">
              <div className="flex relative z-10 w-10 h-10 items-center justify-center p-2 bg-gradient-to-br from-[#2585ff] to-[#00b1e0] rounded-lg">
                <i className="ri-shield-line text-lg text-white"></i>
              </div>
              <h6 className="font-semibold relative z-10 text-white text-xl">
                Advanced Security
              </h6>
              <p className="text-white font-light relative z-10">
                Audited smart contracts with multi-layer security systems and
                user fund insurance protection.
              </p>
              <div className="absolute transition-all duration-200 group-hover:bg-gradient-to-r bg-transparent inset-0 from-indigo-600 to-purple-600 blur-lg opacity-40"></div>{" "}
            </div>

            <div className="p-4 group relative hover:scale-[1.05] duration-100 transition bg-[#23274faf] rounded-lg flex flex-col gap-y-3 border-[#2c2f4f] border">
              <div className="flex w-10 h-10 relative z-10 items-center justify-center p-2 bg-gradient-to-r from-[#00c856] to-[#00bd79] rounded-lg">
                <i className="ri-stock-line text-lg text-white"></i>
              </div>
              <h6 className="font-semibold relative z-10 text-white text-xl">
                Competitive Yields
              </h6>
              <p className="text-white font-light relative z-10">
                Earn up to 15% APY for lending and access low-interest loans
                starting from 3% APR.
              </p>
              <div className="absolute transition-all duration-200 group-hover:bg-gradient-to-r bg-transparent inset-0 from-indigo-600 to-purple-600 blur-lg opacity-40"></div>{" "}
            </div>

            <div className="p-4 group relative hover:scale-[1.05] duration-100 transition bg-[#23274faf] rounded-lg flex flex-col gap-y-3 border-[#2c2f4f] border">
              <div className="flex w-10 h-10 relative z-10 items-center justify-center p-2 bg-gradient-to-r from-[#f2ab00] to-[#ff7400] rounded-lg">
                <i className="ri-flashlight-line text-lg text-white"></i>
              </div>
              <h6 className="font-semibold relative z-10 text-white text-xl">
                Instant Settlement
              </h6>
              <p className="text-white relative z-10 font-light">
                Real-time transactions with no waiting period. Lend, borrow, and
                withdraw anytime 24/7.
              </p>
              <div className="absolute transition-all duration-200 group-hover:bg-gradient-to-r bg-transparent inset-0 from-indigo-600 to-purple-600 blur-lg opacity-40"></div>{" "}
            </div>

            <div className="p-4 group relative hover:scale-[1.05] duration-100 transition bg-[#23274faf] rounded-lg flex flex-col gap-y-3 border-[#2c2f4f] border">
              <div className="flex w-10 h-10 relative z-10 items-center justify-center p-2 bg-gradient-to-r from-[#b148ff] to-[#f138a2] rounded-lg">
                <i className="ri-global-line text-lg text-white"></i>
              </div>
              <h6 className="font-semibold relative z-10 text-white text-xl">
                Multi-Chain Support
              </h6>
              <p className="text-white relative z-10 font-light">
                Support for various blockchains including Ethereum, BSC, Polygon
                with 50+ crypto assets.
              </p>
              <div className="absolute transition-all duration-200 group-hover:bg-gradient-to-r bg-transparent inset-0 from-indigo-600 to-purple-600 blur-lg opacity-40"></div>{" "}
            </div>

            <div className="p-4 group relative hover:scale-[1.05] duration-100 transition bg-[#23274faf] rounded-lg flex flex-col gap-y-3 border-[#2c2f4f] border">
              <div className="flex w-10 h-10 relative z-10 items-center justify-center p-2 bg-gradient-to-r from-[#6060ff] to-[#327CFF] rounded-lg">
                <i className="ri-lock-2-line text-lg text-white"></i>
              </div>
              <h6 className="font-semibold relative z-10 text-white text-xl">
                Non-Custodial
              </h6>
              <p className="text-white relative z-10 font-light">
                Full control over your assets. Private keys remain in your hands
                with DeFi technology.
              </p>
              <div className="absolute transition-all duration-200 group-hover:bg-gradient-to-r bg-transparent inset-0 from-indigo-600 to-purple-600 blur-lg opacity-40"></div>{" "}
            </div>

            <div className="p-4 group relative hover:scale-[1.05] duration-100 transition bg-[#23274faf] rounded-lg flex flex-col gap-y-3 border-[#2c2f4f] border">
              <div className="flex w-10 h-10 relative z-10 items-center justify-center p-2 bg-gradient-to-r from-[#FF2055] to-[#FB2C38] rounded-lg">
                <i className="ri-smartphone-line text-lg text-white"></i>
              </div>
              <h6 className="font-semibold relative z-10 text-white text-xl">
                Mobile First
              </h6>
              <p className="text-white relative z-10 font-light">
                Intuitive mobile app for Android and iOS. Trade crypto lending
                anywhere, anytime.
              </p>
              <div className="absolute transition-all duration-200 group-hover:bg-gradient-to-r bg-transparent inset-0 from-indigo-600 to-purple-600 blur-lg opacity-40"></div>{" "}
            </div>
          </div>

          {/*  */}
          <div className="flex mx-auto items-center gap-x-52 mt-20">
            <div className="flex flex-col items-center text-3xl text-white font-bold">
              <TextGradient text="$2.5B+" />
              <span className="text-sm font-normal">Total Value locked</span>
            </div>
            <div className="flex flex-col items-center text-3xl text-white font-bold">
              <TextGradient text="150K+" />
              <span className="text-sm font-normal">Active Users</span>
            </div>
            <div className="flex flex-col items-center text-3xl text-white font-bold">
              <TextGradient text="50+" />
              <span className="text-sm font-normal">Supported Assets</span>
            </div>
            <div className="flex flex-col items-center text-3xl text-white font-bold">
              <TextGradient text="180+" />
              <span className="text-sm font-normal">Countries</span>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="from-[#0e162b] bg-gradient-to-b to-[#1C283C] mt-10">
        <Container className="mx-auto py-10 flex-col gap-y-10">
          <div className="space-y-2 w-full flex items-center flex-col">
            <h2 className="text-4xl font-bold text-white">
              How The <TextGradient text="Platform Works" />
            </h2>
            <p className="text-white text-center text-lg max-w-2xl">
              Start earning from your crypto assets in 4 easy steps.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-4 gap-x-5">
            <div className="p-4 bg-[#1d293d] rounded-lg items-center flex flex-col gap-y-3 border-[#2c2f4f] border relative">
              <div className="absolute -top-4 -right-4 text-white text-sm font-medium bg-gradient-to-r from-[#3A7CFF] to-[#A54DFF] flex items-center justify-center h-8 w-8 rounded-full">
                1
              </div>
              <div className="flex w-12 h-12 items-center justify-center p-2 bg-gradient-to-br from-[#2585ff] to-[#00b1e0] rounded-lg">
                <i className="ri-wallet-line text-xl text-white"></i>
              </div>
              <span className="text-white font-semibold text-lg">
                Connect Wallet
              </span>
              <p className="text-white font-light text-center">
                Connect your crypto wallet (MetaMask, WalletConnect, or Coinbase
                Wallet) with our platform.
              </p>
            </div>

            <div className="p-4 bg-[#1d293d] rounded-lg items-center flex flex-col gap-y-3 border-[#2c2f4f] border relative">
              <div className="absolute -top-4 -right-4 text-white text-sm font-medium bg-gradient-to-r from-[#3A7CFF] to-[#A54DFF] flex items-center justify-center h-8 w-8 rounded-full">
                2
              </div>
              <div className="flex w-12 h-12 items-center justify-center p-2 bg-gradient-to-br from-[#00c856] to-[#00bd79] rounded-lg">
                <i className="ri-money-dollar-circle-line text-2xl text-white"></i>
              </div>
              <span className="text-white font-semibold text-lg">
                Deposit Assets
              </span>
              <p className="text-white font-light text-center">
                Deposit your chosen crypto assets into audited smart contracts
                for maximum security.
              </p>
            </div>

            <div className="p-4 bg-[#1d293d] rounded-lg items-center flex flex-col gap-y-3 border-[#2c2f4f] border relative">
              <div className="absolute -top-4 -right-4 text-white text-sm font-medium bg-gradient-to-r from-[#3A7CFF] to-[#A54DFF] flex items-center justify-center h-8 w-8 rounded-full">
                3
              </div>
              <div className="flex w-12 h-12 items-center justify-center p-2 bg-gradient-to-br from-[#b148ff] to-[#f138a2] rounded-lg">
                <i className="ri-stock-line text-xl text-white"></i>
              </div>
              <span className="text-white font-semibold text-lg">
                Earn or Borrow
              </span>
              <p className="text-white font-light text-center">
                Choose to lend and earn automatic yields, or use as collateral
                to borrow other assets.
              </p>
            </div>

            <div className="p-4 bg-[#1d293d] rounded-lg items-center flex flex-col gap-y-3 border-[#2c2f4f] border relative">
              <div className="absolute -top-4 -right-4 text-white text-sm font-medium bg-gradient-to-r from-[#3A7CFF] to-[#A54DFF] flex items-center justify-center h-8 w-8 rounded-full">
                4
              </div>
              <div className="flex w-12 h-12 items-center justify-center p-2 bg-gradient-to-r from-[#FF6700] to-[#FB2D36] rounded-lg">
                <i className="ri-shield-line text-xl text-white"></i>
              </div>
              <span className="text-white font-semibold text-lg">
                Manage & Withdraw
              </span>
              <p className="text-white font-light text-center">
                Monitor your portfolio in real-time and withdraw anytime without
                lock periods or penalty fees.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#1d293d] rounded-lg items-center flex flex-col gap-y-3 border-[#2c2f4f] border">
            <span className="text-2xl font-bold text-white">
              Ready to Start Your DeFi Journey?
            </span>
            <p className="text-white max-w-2xl text-center">
              Join 150,000+ users who have trusted our platform to maximize
              their crypto potential.
            </p>
            <div className="flex items-center gap-x-4">
              <Button className="py-2 px-6">Start Earning Now</Button>
              <button className="py-2 px-5 font-semibold rounded-2xl cursor-pointer bg-transparent border border-[#2656A3] text-[#4F9EF8]">
                View Documentation
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section>
        <Container className="mx-auto py-10 flex-col">
          <div className="flex flex-col gap-y-3 items-center">
            <h2 className="text-4xl font-bold text-white text-center">
              Frequently Asked <TextGradient text="Questions" />
            </h2>
            <p className="text-white text-center text-lg max-w-3xl">
              Find answears to the most frequently asked questions about our
              crypto lending platform.
            </p>
          </div>

          <div className="gap-y-2 mt-10">
            <div className="mx-auto flex flex-col gap-y-4 max-w-3xl">
              {questionsNAnswers.map((item) => (
                <button className="flex w-full cursor-pointer transition-all justify-between mx-auto max-w-3xl text-white bg-[#151F33] hover:bg-[#1E2A3E] items-center py-3 px-6 rounded-xl">
                  <span>{item.q}</span>
                  <i className="ri-arrow-drop-down-line text-2xl"></i>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-14">
            <div className="bg-[#151F33] w-full max-w-3xl py-4 px-3 rounded-xl text-white flex items-center flex-col gap-y-3">
              <h6 className="font-semibold text-xl">Still Have Questions?</h6>
              <p className="text-sm">
                Our support team is ready to help you 24/7 via live chatt or
                email.
              </p>
              <div className="flex items-center gap-x-4 mt-1">
                <Button className="py-2 px-5">Contact Support</Button>
                <button className="py-2 px-5 font-semibold rounded-2xl cursor-pointer bg-transparent border border-[#2656A3] text-[#4F9EF8]">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LandingPages;
