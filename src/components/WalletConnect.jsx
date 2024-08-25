
import React from 'react';
import { useAccount, useBalance, useDisconnect } from 'wagmi';

export default function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address,
    watch: true,
  });
  const { disconnect } = useDisconnect();

  return (
    <div>
      {!isConnected ? (
        // Connect Button
        <w3m-button />
      ) : (
        
        <div>
          <p className="mb-2 text-white">Wallet Address: {address}</p>
          {isLoading && <p>Loading balance...</p>}
          {isError && <p>Error fetching balance</p>}
          {data && (
            <p className="mb-2 text-white">
              Balance: {data.formatted} {data.symbol}
            </p>
          )}
          {/* Logout Button */}
     <div className=' flex justify-center items-center'>
     <button
            className="bg-[#fff] text-black border border-black py-2 px-4 rounded mt-4"
            onClick={() => disconnect()}
          >
            Logout
          </button>
     </div>
        </div>
      )}
    </div>
  );
}
