import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { mainnet, arbitrum } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'




const queryClient = new QueryClient()


const projectId = '7e8f9b762779f61fc2ba85221cf1dec5'


const metadata = {
  name: 'Crypto Wallet Connect',
  description: 'Example using Wagmi and WalletConnect',
  url: 'https://yourdomain.com', // Must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}


const chains = [mainnet, arbitrum] ;


const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})


createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true 
})


export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
