"use client"

import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PricingSection() {
  const router = useRouter();

  const plans = [
    {
      title: "Basic",
      description: "A basic plan for startups and individual users",
      price: 84000,
      features: [
        "AI-powered analytics",
        "Basic support",
        "5 projects limit",
        "Access to basic AI tools"
      ],
      route: "/checkout/basic"
    },
    {
      title: "Premium",
      description: "A premium plan for growing businesses",
      price: 168200,
      features: [
        "Advanced AI insights",
        "Priority support",
        "Unlimited projects",
        "Access to all AI tools",
        "Custom integrations"
      ],
      highlight: true,
      route: "/checkout/premium"
    },
    {
      title: "Ultimate",
      description: "The ultimate plan with all features for industry leaders",
      price: 336500,
      features: [
        "Bespoke AI development",
        "White-glove support",
        "Unlimited projects",
        "Priority access to new AI tools",
        "Custom integrations",
        "Highest data security and compliance"
      ],
      route: "/checkout/ultimate"
    }
  ];

  return (
    <div className="h-full bg-[url('/gb.png')] bg-center bg-cover">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center flex-col flex justify-center items-center">
          <h2 className="text-base font-semibold">Pricing</h2>
          <h1 className="mt-3 text-4xl py-3 font-bold lg:text-6xl bg-gradient-to-b from-gray-900 via-black to-gray-f600 bg-clip-text text-transparent text-center">
            Simple pricing for everyone.
          </h1>
          <p className="md:max-w-xl max-w-[375px] mt-5 px-3 bio text-[14px] lg:text-[18px] bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text text-transparent">
            Choose an <span className="font-semibold">affordable plan</span> that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>

        <div className="mt-8 flex justify-center items-center gap-3 bg-gradient-to-b from-gray-900 via-black to-gray-600 bg-clip-text text-transparent">
          <span>Annual</span>
          <Switch />
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-amber-500/10 text-amber-500">
            2 MONTHS FREE 🎉
          </span>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-20">
          {plans.map((plan) => (
            <Card
              key={plan.title}
              className={`relative bg-zinc-900 border-zinc-800 ${plan.highlight ? 'border-amber-500/50' : ''}`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{plan.title}</CardTitle>
                <p className="text-sm text-zinc-400">{plan.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">₹{plan.price / 100}</span>
                  <span className="ml-1 text-zinc-400">one time</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-white text-black hover:bg-zinc-200"
                  onClick={() => router.push(plan.route)}
                >
                  Subscribe
                </Button>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}