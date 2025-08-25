import Link from "next/link";

export default function SubscriptionManager() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <Link href="/" className="text-lg font-medium text-gray-900 hover:text-gray-700">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Subscription Manager
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple mobile app to track and manage all your recurring subscriptions.
          </p>
        </div>

        <div className="text-center mb-16">
          <button 
            disabled 
            className="bg-gray-300 text-gray-500 px-8 py-3 rounded-lg text-lg font-medium cursor-not-allowed"
          >
            Coming Soon to Google Play
          </button>
        </div>

        <div className="text-center">
          <Link 
            href="/privacy-policy" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}