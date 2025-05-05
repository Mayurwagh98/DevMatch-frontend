const RefundPolicy = () => {
  return (
    <>
      {" "}
      <div className="min-h-screen bg-gray-900 text-white p-8 md:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>
          <p className="text-gray-300 mb-4">Last updated: May 6, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
            <p className="text-gray-300">
              At DevMatch, we strive to offer premium developer matching
              services. If you're not satisfied with your purchase, please
              review our refund guidelines below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              2. Eligibility for Refunds
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Refunds are only available for premium plans purchased within
                the last 14 days.
              </li>
              <li>
                No refunds will be issued for partially used subscriptions.
              </li>
              <li>
                Free trials and basic accounts are not eligible for refunds.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              3. Non-Refundable Items
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>In-app purchases such as boosts or featured listings</li>
              <li>Customized profile services</li>
              <li>Third-party subscriptions made through DevMatch</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              4. How to Request a Refund
            </h2>
            <p className="text-gray-300">
              To request a refund, please email us at{" "}
              <span className="text-pink-400">support@devmatch.io</span> with
              the subject line “Refund Request”. Include your account email and
              the reason for the request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">5. Processing Time</h2>
            <p className="text-gray-300">
              Refunds are typically processed within 5–7 business days. The
              amount will be returned to your original payment method.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-300">
              DevMatch reserves the right to modify this Refund Policy at any
              time. Changes will be posted on this page.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
