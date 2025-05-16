import { useState } from "react";
import { BadgeDollarSign, Check, Flame } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      title: "Basic",
      monthlyPrice: "19",
      yearlyPrice: "190",
      features: [
        "Unlimited AI usage here",
        "Premium support",
        "Customer care on point",
        "Collaboration tools",
      ],
      height: "h-[28rem]",
    },
    {
      title: "Pro",
      monthlyPrice: "39",
      yearlyPrice: "390",
      features: [
        "Integrations with 3rd-party",
        "Advanced analytics",
        "Team performance tracking",
        "Top grade security",
        "Customizable Solutions",
      ],
      height: "h-[30rem]", // Swapped from 3rd card
      popular: true,
    },
    {
      title: "Enterprise",
      monthlyPrice: "79",
      yearlyPrice: "790",
      features: [
        "Custom reports & dashboards",
        "Most performance usage",
        "Dedicated Enterprise-grade security",
        "Customizable Solutions",
        "Seamless Integration",
        "Dedicated account manager",
      ],
      height: "h-[32rem]", // Swapped from 2nd card
    },
  ];

  return (
    <section
      className="relative bg-[#0B0D11] text-white py-20 px-4 sm:px-10 md:px-20 lg:px-32 overflow-hidden"
      id="pricing"
    >
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#1F2025] to-transparent opacity-40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 z-10 relative">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-white mb-2 border border-gray-700 px-3 py-1 rounded-md w-fit mx-auto">
          <BadgeDollarSign size={16} />
          <span>Pricing</span>
        </div>
        <h2 className="text-4xl font-semibold">
          Flexible Plans for{" "}
          <span className="italic font-light mx-2">Everyone</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Simple pricing. No hidden fees. Cancel anytime.
        </p>

        {/* Billing Toggle */}
        <div className="mt-6 inline-flex border border-gray-600 rounded-full p-1 bg-[#11131A]">
          <button
            className={`px-4 py-1 rounded-full transition ${
              billing === "monthly"
                ? "bg-black text-white"
                : "text-white hover:bg-gray-800"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            className={`flex items-center gap-2 px-4 py-1 rounded-full transition ${
              billing === "yearly"
                ? "bg-black text-white"
                : "text-white hover:bg-gray-800"
            }`}
            onClick={() => setBilling("yearly")}
          >
            <span>Yearly</span>
            <span className="bg-black text-white text-[10px] font-semibold px-2 py-[2px] rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="flex flex-wrap justify-center gap-4 z-10 relative">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`w-full max-w-sm bg-[#11131A] border border-gray-700 rounded-2xl p-8 shadow-lg flex flex-col justify-between ${plan.height}`}
          >
            <div className="text-left">
              {/* Popular badge */}
              {plan.popular && (
                <div className="flex mb-4">
                  <div className="flex items-center gap-1 text-xs text-white border border-gray-500 rounded-full px-3 py-1 uppercase tracking-wide">
                    <Flame size={14} />
                    Popular
                  </div>
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <div className="text-4xl font-bold mb-4">
                ${billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                <span className="text-sm text-gray-400 font-medium ml-1">
                  /{billing === "monthly" ? "mo" : "yr"}
                </span>
              </div>
              <div className="flex justify-center py-8">
                <div className="text-black w-[200px]">
                  <InteractiveHoverButton className="w-full text-center justify-center">
                    Get Started
                  </InteractiveHoverButton>
                </div>
              </div>

              {/* Features */}
              <ul className="text-gray-400 text-sm space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={16} className="text-green-400 mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
