import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to sshPay</h1>
      <nav>
        <ul>
          <li><Link href="/business-accounts">Business Accounts</Link></li>
          <li><Link href="/multi-currency-wallets">Multi-Currency Wallets</Link></li>
          <li><Link href="/card-issuance">Card Issuance</Link></li>
          <li><Link href="/api-documentation">API Documentation</Link></li>
          <li><Link href="/security-compliance">Security/Compliance</Link></li>
        </ul>
      </nav>
    </div>
  );
}
