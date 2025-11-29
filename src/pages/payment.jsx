import React from 'react';
import Header from '../components/Header.jsx';
import { usePlan } from '../context/PlanContext.jsx';
import toast from 'react-hot-toast';

export default function Payment() {
  const { plan, price } = usePlan();

  const handleCopy = (textToCopy, fieldName) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast.success(`${fieldName} copied to clipboard!`);
    });
  };

  const bankDetails = {
    bankName: 'MONIEPOINT',
    accountName: 'JULIET OGOLO',
    accountNumber: '8029583710',
  };

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-gradient-to-b from-[#8f211f] to-[#5e1514] text-white pt-24 pb-20 flex justify-center items-start">
        <div className="w-full max-w-md p-8 space-y-6 bg-gradient-to-b from-[#5a0f0f] to-[#3b0b0b] rounded-2xl shadow-xl border border-yellow-700/30">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold">Complete Your Payment</h1>
            <p className="mt-4 text-yellow-400 font-bold text-lg">
              You are paying for: {plan || 'FortuneX Starter'}
            </p>
          </div>

          <div className="text-center bg-black/20 p-3 rounded-lg border border-yellow-700/20">
            <p className="font-semibold text-yellow-300">
              &#9888; NOW TAKE NOTE: To get registered on Fortunex...
Do not pay with opay, it’s not  allowed for withdrawal so it's also not allowed for payment

You can use palmpay, moniepoint, Access bank,UBA or other banks to make payment and that's the bank you will use for your withdrawal on FORTUNEX
            </p>
          </div>

          <div className="space-y-4 bg-black/20 p-6 rounded-lg border border-yellow-700/20">
            {/* Bank Name */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-300">Bank Name:</p>
                <p className="text-lg font-bold">{bankDetails.bankName}</p>
              </div>
              <button
                onClick={() => handleCopy(bankDetails.bankName, 'Bank Name')}
                className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-md hover:bg-yellow-600 transition"
              >
                Copy
              </button>
            </div>

            {/* Account Name */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-300">Account Name:</p>
                <p className="text-lg font-bold">{bankDetails.accountName}</p>
              </div>
              <button
                onClick={() => handleCopy(bankDetails.accountName, 'Account Name')}
                className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-md hover:bg-yellow-600 transition"
              >
                Copy
              </button>
            </div>

            {/* Account Number */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-300">Account Number:</p>
                <p className="text-lg font-bold">{bankDetails.accountNumber}</p>
              </div>
              <button
                onClick={() => handleCopy(bankDetails.accountNumber, 'Account Number')}
                className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-md hover:bg-yellow-600 transition"
              >
                Copy
              </button>
            </div>

            {/* Amount */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-600">
              <p className="text-lg font-medium text-gray-300">Amount:</p>
              <p className="text-3xl font-extrabold text-yellow-400">
                ₦{price || '7,500'}
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-300">
              After payment, click the button below to confirm. Your account will be activated shortly.
            </p>
            <a href="https://wa.me/message/RFL7EZEI7C4XB1" target="_blank" rel="noopener noreferrer">
            <button
              className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-full shadow-lg hover:scale-[1.02] transition"
            >
              I Have Made Payment
            </button>
            </a>
          </div>
        </div>
      </div>

    </>
  );
}
