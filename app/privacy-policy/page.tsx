import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <Link href="/subscription-manager" className="text-lg font-medium text-gray-900 hover:text-gray-700">
              Back to Subscription Manager
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          This Privacy Policy describes how Subscription Manager collects, uses, and shares information when you use our mobile application.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Subscription details you manually enter</li>
            <li>Account preferences and settings</li>
            <li>Basic usage analytics to improve the app</li>
          </ul>
        </section>

       
      </div>
    </div>
  );
}