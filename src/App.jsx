
import { AppKitProvider } from './wagmiConfig';
import WalletConnect from './components/WalletConnect';


function App() {
  return (
    <AppKitProvider>
      <div className="min-h-screen flex flex-col items-center justify-center">

        <h1 className=' text-4xl  font-bold mb-4 text-white'>Welcome </h1>
        <div className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          <h1 className="text-2xl font-bold mb-4 text-white text-center ">Connect Your Wallet</h1>
      <WalletConnect />
      </div>
      </div>
    </AppKitProvider>
  );
}

export default App;
