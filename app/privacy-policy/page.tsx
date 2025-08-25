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
        <div className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="text-sm text-gray-600 mb-8">
            <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            This Privacy Policy describes how Subscription Manager collects, 
            uses, and shares information when you use our mobile application.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Subscription details you manually enter (service names, subscription costs, renewal dates, billing cycles)</li>
              <li>Account preferences and settings</li>
              <li>Feedback and correspondence when you contact us</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Device information (device model, operating system version, unique device identifiers)</li>
              <li>Usage analytics (app features used, session duration, crash reports)</li>
              <li>Technical data for app functionality and performance monitoring</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide subscription tracking and management services</li>
              <li>Send renewal notifications and reminders</li>
              <li>Improve app functionality and user experience</li>
              <li>Provide customer support</li>
              <li>Ensure app security and prevent misuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal subscription information to third parties.
            </p>
            <p className="text-gray-700 mb-4">We may share information in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our app (analytics, crash reporting, cloud storage)</li>
              <li><strong>Legal Requirements:</strong> When required by law, legal process, or government request</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Safety:</strong> To protect the rights, property, or safety of our users or others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Local Storage:</strong> Subscription data is primarily stored locally on your device</li>
              <li><strong>Cloud Backup:</strong> Optional cloud synchronization uses encrypted storage services</li>
              <li><strong>Security Measures:</strong> We implement industry-standard security measures including data encryption, secure data transmission, and access controls</li>
              <li><strong>Data Retention:</strong> We retain your information only as long as necessary to provide our services or as required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our app may integrate with third-party services for analytics and functionality. 
              These services have their own privacy policies:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Google Analytics for Firebase</li>
              <li>Google Play Services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our app is not intended for children under 13. We do not knowingly collect personal 
              information from children under 13. If we become aware that a child under 13 has 
              provided us with personal information, we will delete such information immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your information in accordance 
              with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify users of any 
              material changes by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Posting the updated policy in the app</li>
              <li>Updating the Last Updated date</li>
              <li>Sending notifications for significant changes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection Officer</h2>
            <p className="text-gray-700">
              For privacy-related inquiries from EU users, you may contact our Data Protection Officer 
              through the app's support channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Basis for Processing (EU Users)</h2>
            <p className="text-gray-700 mb-4">
              For users in the European Union, our legal basis for processing your information includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Consent:</strong> When you have given clear consent</li>
              <li><strong>Contract:</strong> When processing is necessary for our service</li>
              <li><strong>Legitimate Interest:</strong> For analytics and app improvement</li>
              <li><strong>Legal Obligation:</strong> When required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">California Consumer Privacy Act (CCPA)</h2>
            <p className="text-gray-700 mb-4">
              California residents have additional rights under the CCPA:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Breach Notification</h2>
            <p className="text-gray-700">
              In the event of a data breach that may compromise your personal information, we will 
              notify affected users within 72 hours of discovering the breach, as required by applicable 
              data protection laws.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-500 italic">
              This privacy policy complies with applicable privacy laws including GDPR, CCPA, 
              and Google Play Developer Policy requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}