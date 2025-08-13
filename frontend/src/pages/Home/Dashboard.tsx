import Container from '@/components/Container';
import Button from '@/components/Button';
import { useWalletDisplayStore } from '@/store/useWalletDisplayStore';

const Dashboard = () => {
  const { toggleWallet } = useWalletDisplayStore();

  return (

    <div className="bg-[#0e162b]">
      {/* Main page */}
      <main className="bg-gradient-to-tr pt-10 from-[#1e163e] via-[#0e162c] h-screen to-[#1e163e]">
        <Container className="gap-x-4 items-center justify-center h-[90vh] justify-between mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center w-[30%]">
            <i className="ri-wallet-line text-blue-500 bg-gradient-to-r from-[#1e2955] to-[#291d55] text-5xl p-6 rounded-full"></i>
            <h2 className="text-3xl font-bold text-white">Connect Wallet</h2>
            <p className="text-base text-gray-300">Connect your wallet to start landing, borrowing, and earning yield on your crypto assets</p>
            <Button onClick={toggleWallet} className='hover:shadow-md active:scale-95 transition-all ease-in-out duration-100 shadow-sm hover:shadow-purple-500/80'>Connect Wallet</Button>
          </div>
        </Container>

      </main>
    </div>

  )
}

export default Dashboard;
