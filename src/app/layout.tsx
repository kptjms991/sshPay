"use client";

import "./globals.css";
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">AirWallex Clone</h1>
          <nav>
            <ul className="flex space-x-4 relative">
              <li className="hover:underline">
                <a href="/business-accounts">Business Accounts</a>
              </li>
              <li className="hover:underline">
                <a href="/multi-currency-wallets">Multi-Currency Wallets</a>
              </li>
              <li className="hover:underline">
                <a href="/card-issuance">Card Issuance</a>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span className="hover:underline cursor-pointer">More</span>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 bg-gray-700 text-white shadow-lg rounded-md mt-2">
                    <li className="p-2 hover:bg-gray-600">
                      <a href="/security-compliance">Security & Compliance</a>
                    </li>
                    <li className="p-2 hover:bg-gray-600">
                      <a href="/api-documentation">API Documentation</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 AirWallex Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
