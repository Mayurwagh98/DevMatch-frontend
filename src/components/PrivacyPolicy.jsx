const PrivacyPolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-8 md:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-300 mb-4">Last updated: May 6, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-300">
              Welcome to DevMatch. We value your privacy and are committed to
              protecting your personal information. This Privacy Policy outlines
              how we collect, use, and safeguard your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Profile details like name, email, and bio</li>
              <li>Location (if enabled)</li>
              <li>Device and browser data</li>
              <li>Activity logs (likes, swipes, chats)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300">
              We use your information to provide and improve DevMatch services,
              including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Matching you with other developers</li>
              <li>Personalizing your experience</li>
              <li>Communicating with you about updates</li>
              <li>Ensuring platform safety and preventing abuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">4. Data Sharing</h2>
            <p className="text-gray-300">
              We do not sell your data. We may share it with trusted third-party
              services (e.g., hosting providers, analytics) solely to enhance
              your experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
            <p className="text-gray-300">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access and update your data</li>
              <li>Request deletion of your account</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
            <p className="text-gray-300">
              If you have questions or concerns about this Privacy Policy,
              contact us at:
              <br />
              <span className="text-pink-400">privacy@devmatch.io</span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
