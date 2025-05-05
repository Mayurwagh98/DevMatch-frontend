const TermsService = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-8 md:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-300 mb-4">Last updated: May 6, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300">
              By using DevMatch, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with
              any part, please do not use the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">2. Eligibility</h2>
            <p className="text-gray-300">
              You must be at least 18 years old to use DevMatch. By creating an
              account, you confirm that you meet this requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">3. User Conduct</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Respect other users and their privacy.</li>
              <li>No harassment, hate speech, or abuse will be tolerated.</li>
              <li>Do not impersonate others or use fake identities.</li>
              <li>
                Spamming or self-promotion without permission is prohibited.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              4. Account Responsibility
            </h2>
            <p className="text-gray-300">
              You are responsible for maintaining the confidentiality of your
              account and all activities under it. DevMatch is not liable for
              any unauthorized use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">5. Termination</h2>
            <p className="text-gray-300">
              We reserve the right to suspend or delete your account if you
              violate these terms or engage in harmful behavior. You may also
              terminate your account at any time from your settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-300">
              DevMatch is not responsible for any damages or losses resulting
              from use of the platform. Use at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">7. Changes to Terms</h2>
            <p className="text-gray-300">
              We may update these Terms from time to time. Continued use of
              DevMatch after changes implies your acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>
            <p className="text-gray-300">
              If you have questions about these Terms, please reach out at{" "}
              <span className="text-pink-400">legal@devmatch.io</span>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsService;
