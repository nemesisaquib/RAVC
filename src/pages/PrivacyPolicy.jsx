import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 mt-5 pt-25 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header - Added mt-8 for spacing below the fixed header */}
          <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg p-8 mb-10 text-center mt-8">
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <p className="text-gray-300 mt-2">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </header>

          {/* Rest of your content remains the same */}
          <section className="bg-white shadow-md rounded-2xl p-6 mb-10">
            <p className="text-gray-700 mb-4">
              This privacy policy and notice for RAVC ("Company," "we," "us," or
              "our") describes how and why we might collect, store, use, and/or
              share ("process") your information when you use our services
              ("Services"), such as when you:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Visit our website at{" "}
                <a
                  href="https://www.ravc.in/"
                  className="text-[#d6a84f] hover:underline"
                >
                  https://www.ravc.in/
                </a>{" "}
                or any other website of ours that links to this privacy notice.
              </li>
              <li>
                Engage with us in other related ways, including any sales,
                marketing, or events.
              </li>
            </ul>
          </section>

          {/* Summary of Key Points */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Summary of Key Points
            </h2>
            <p className="text-gray-700 mb-6">
              This summary provides key highlights of our privacy policy. For
              more details about any of these topics, you can refer to the full
              notice below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "What personal information do we process?",
                  text: "We may process personal information depending on how you interact with www.ravc.in, the Services, and the features you use.",
                },
                {
                  title: "Do we process any sensitive personal information?",
                  text: "We do not process sensitive personal information.",
                },
                {
                  title: "Do we receive any information from third parties?",
                  text: "We do not receive any personal information from third parties.",
                },
                {
                  title: "How do we process your information?",
                  text: "We process information to provide, improve, and manage our Services, communicate with you, ensure security, and comply with legal obligations.",
                },
                {
                  title: "When do we share personal information?",
                  text: "We may share information with service providers, business partners, or as required by law.",
                },
                {
                  title: "How do we keep your information safe?",
                  text: "We use organizational and technical measures to protect data, but no online system is 100% secure.",
                },
                {
                  title: "What are your rights?",
                  text: "Depending on your location, privacy laws may give you certain rights over your personal information.",
                },
                {
                  title: "How do you exercise your rights?",
                  text: "You can contact us via our Contact Form: ",
                  link: "https://www.ravc.in/contact",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-5 border border-gray-100"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.text}{" "}
                    {item.link && (
                      <a
                        href={item.link}
                        className="text-[#d6a84f] hover:underline"
                      >
                        {item.link}
                      </a>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Full Details */}
          <div className="space-y-10">
            <Section
              title="What Personal Information Do We Process?"
              text="When you visit, use, or navigate our Services, we may process personal information depending on how you interact with www.ravc.in, the Services, the choices you make, and the features you use."
            />
            <Section
              title="Do We Process Any Sensitive Personal Information?"
              text="We do not process sensitive personal information."
            />
            <Section
              title="Do We Receive Any Information From Third Parties?"
              text="We do not receive any personal information from third parties."
            />
            <Section
              title="How Do We Process Your Information?"
              text="We process information to provide, improve, and manage our Services, communicate with you, ensure security and fraud prevention, and comply with legal obligations."
            />
            <Section
              title="When Do We Share Personal Information?"
              text="We may share information in specific cases such as with service providers, business partners, or to comply with legal requirements."
            />
            <Section
              title="How Do We Keep Your Information Safe?"
              text="We use organizational and technical security measures to protect your information. However, no electronic storage system or transmission is 100% secure."
            />
            <Section
              title="What Are Your Rights?"
              text="Depending on your geographic location, privacy laws may grant you certain rights regarding your personal information."
            />
            <Section
              title="How Do You Exercise Your Rights?"
              text={
                <>
                  The easiest way is by contacting us through our Contact Form:{" "}
                  <a
                    href="https://www.ravc.in/contact"
                    className="text-[#d6a84f] hover:underline"
                  >
                    https://www.ravc.in/contact
                  </a>
                  . We will act on your request as per applicable laws.
                </>
              }
            />
            <Section
              title="Disclaimer"
              text={
                <>
                  <p className="mb-3">
                    The individual services and products (if any) provided by
                    RAVC are covered under their independent terms and
                    conditions.
                  </p>
                  <p className="mb-3">
                    The information on this website is for general purposes only
                    and does not guarantee accuracy for technical, commercial,
                    legal, or other purposes.
                  </p>
                  <p>
                    Information may change from time to time and is indicative
                    in nature. For official details, please contact RAVC
                    directly.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// You'll also need to define the Section component if it doesn't exist
const Section = ({ title, text }) => (
  <section className="bg-white shadow-md rounded-2xl p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
    <div className="text-gray-700">{text}</div>
  </section>
);

export default PrivacyPolicy;

