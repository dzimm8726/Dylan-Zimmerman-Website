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
        
        <div className="text-sm text-gray-600 mb-8">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          This Privacy Policy describes how Subscription Manager collects, uses, and shares information when you use our mobile application.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Subscription details you manually enter (service names, costs, renewal dates, billing cycles)</li>
            <li>Account preferences and settings</li>
            <li>Device information for app functionality</li>
            <li>Usage analytics to improve the app experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Provide subscription tracking and management services</li>
            <li>Send renewal notifications and reminders</li>
            <li>Improve app functionality and user experience</li>
            <li>Ensure app security and prevent misuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Subscription data is stored locally on your device</li>
            <li>We implement industry-standard security measures</li>
            <li>Data retention only as long as necessary for services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information</li>
            <li>Opt out of data processing activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Google Analytics for Firebase</li>
            <li>Google Play Services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
          <p className="text-gray-700">
            Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <p className="text-sm text-gray-500">
            This privacy policy complies with applicable privacy laws including GDPR, CCPA, and Google Play Developer Policy requirements.
          </p>
        </div>
      </div>
    </div>
  );
}