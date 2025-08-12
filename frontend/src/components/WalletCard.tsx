import { MetamaskLogo, WalletConnectLogo, PhantomLogo } from "@/types/assets";
import { useWalletDisplayStore } from "@/store/useWalletDisplayStore";
import clsx from "clsx";
import { usePhantomWallet } from "@/services/usePhantomWallet";

const WalletCard = () => {
  const { isWallet, toggleWallet } = useWalletDisplayStore();
  const { connectPhantom, disconnectPhantom, phantomConnected } = usePhantomWallet();

  return(
    <>
      <div className={clsx("bg-slate-800 rounded-xl border-1 border-slate-700 fixed bottom-[20%] h-[600px] w-[500px] p-12", {'hidden': isWallet === false, 'visible': isWallet === true})}>
        <div className="flex justify-between items-center">
          <div className="flex items-start flex-col">
            <h2 className="text-white font-bold text-xl text-center">Select Wallet</h2>
            <p className="text-gray-200 text-sm text-center">Choose your preferred wallet to connect to <span className="font-bold italic">Krisfy</span></p>
          </div>
          <button className="hover:cursor-pointer" onClick={() => toggleWallet()}>
            <i className="ri-close-line text-white hover:text-red-500"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-4 justify-center h-[70%]">
          <button className="hover:cursor-pointer">
            <ListItem src={MetamaskLogo} alt="Metamask Logo" width={50} title="Metamask" description="Connect using Metamask wallet" />
          </button>
          <ListItem src={WalletConnectLogo} alt="WalletConnect Logo" width={50} title="WalletConnect" description="Connect using WalletConnect protocol" />
          {phantomConnected ? (
            <button onClick={() => disconnectPhantom} className="flex items-start w-full active:scale-95 transition-all ease-in-out duration-50 cursor-pointer w-full bg-slate-700/50 p-4 rounded-xl border-1 border-gray-600 hover:border-gray-500 shadow-md hover:shadow-lg hover:shadow-gray-900">
              Disconnect
            </button>
          ) : (
            <button className="hover:cursor-pointer" onClick={() => connectPhantom()}>
              <ListItem src={PhantomLogo} alt="Phantom Logo" width={50} title="Phantom" description="Connect using Phantom wallet" />
            </button>
          )}
        </ul>
        <div className="w-full bg-slate-700/50 p-4 rounded-xl border-1 border-gray-600">
          <span className="text-gray-200 text-sm text-center">By connecting a wallet, you agree to Krisfy's Terms of Service and acknowledge that you have read and understand the protocol disclaimer.</span>
        </div>
      </div>
    </>
  )
}

export default WalletCard;

const ListItem = ({ src, alt, width, title, description }: { src?: string, alt?: string, width?: number, title?: string, description?: string}) => {
  return <li  className="flex items-start w-full active:scale-95 transition-all ease-in-out duration-50 cursor-pointer w-full bg-slate-700/50 p-4 rounded-xl border-1 border-gray-600 hover:border-gray-500 shadow-md hover:shadow-lg hover:shadow-gray-900">
      <img src={src} alt={alt} width={width} title={title} />
      <div className="ml-6 flex flex-col items-start">
        <h3 className="text-white font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
  </li>;
};
