"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  Leaf,
  Camera,
  MessageCircle,
  Calendar,
  Sun,
  Droplets,
  Brain,
  ArrowRight,
  Check,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features: Feature[] = [
    {
      icon: <Camera className="h-6 w-6 text-green-600" />,
      title: "Photo Diagnosis",
      description:
        "Upload a photo of your struggling plant and get an AI-powered diagnosis explaining exactly what is wrong and how to fix it.",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: "Conversational AI Chat",
      description:
        "Ask nuanced questions like why your Monstera is yellowing despite proper watering. Get expert-level, contextual answers instantly.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-green-600" />,
      title: "Adaptive Care Schedules",
      description:
        "Personalized watering, fertilizing, and repotting schedules that adapt to your season, location, and each plant species.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Growth Journal",
      description:
        "Track your plants over time with photos, notes, and milestones. See how your care routine impacts growth week over week.",
    },
    {
      icon: <Sun className="h-6 w-6 text-green-600" />,
      title: "Light & Environment Analysis",
      description:
        "Get recommendations based on your home environment. Understand how light levels, humidity, and temperature affect each plant.",
    },
    {
      icon: <Brain className="h-6 w-6 text-green-600" />,
      title: "Learning Plant Intelligence",
      description:
        "The more you use PlantWhisperer, the smarter it gets about your specific plants, habits, and growing conditions.",
    },
  ];

  const steps: Step[] = [
    {
      number: "01",
      title: "Add Your Plants",
      description:
        "Snap photos or describe your plants. PlantWhisperer identifies species and sets up personalized care profiles automatically.",
    },
    {
      number: "02",
      title: "Get AI Diagnosis",
      description:
        "Notice something off? Upload a photo or describe symptoms. Our AI explains the root cause and provides step-by-step remedies.",
    },
    {
      number: "03",
      title: "Follow Smart Schedules",
      description:
        "Receive adaptive care reminders that adjust to seasons, your location, and how your plants are actually responding.",
    },
  ];

  const pricing: PricingTier[] = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with up to 5 plants",
      features: [
        "Up to 5 plant profiles",
        "3 AI diagnoses per month",
        "Basic care schedules",
        "Growth journal",
        "Community access",
      ],
      highlighted: false,
      cta: "Get Started Free",
    },
    {
      name: "Plant Parent",
      price: "$9",
      period: "per month",
      description: "For dedicated hobbyists with growing collections",
      features: [
        "Up to 30 plant profiles",
        "Unlimited AI diagnoses",
        "Adaptive care schedules",
        "Full growth journal with analytics",
        "Priority AI chat support",
        "Season & location optimization",
      ],
      highlighted: true,
      cta: "Start Free Trial",
    },
    {
      name: "Jungle",
      price: "$19",
      period: "per month",
      description: "For serious collectors with 30+ plants",
      features: [
        "Unlimited plant profiles",
        "Unlimited AI diagnoses",
        "Advanced environment analysis",
        "Batch care management",
        "Export & backup data",
        "Early access to new features",
        "Dedicated support",
      ],
      highlighted: false,
      cta: "Start Free Trial",
    },
  ];

  const faqItems = [
    {
      question: "How accurate is the AI plant diagnosis?",
      answer:
        "PlantWhisperer uses state-of-the-art vision and language models trained on thousands of plant care cases. While no AI is perfect, our diagnosis accuracy exceeds 90% for common houseplant issues. For rare conditions, we always recommend consulting a local nursery expert.",
    },
    {
      question: "Can I use PlantWhisperer on my desktop browser?",
      answer:
        "Absolutely! PlantWhisperer is designed as a browser-first web application. Access it from any desktop, laptop, tablet, or phone browser. No app download required.",
    },
    {
      question: "How do adaptive care schedules work?",
      answer:
        "Our schedules take into account your geographic location, current season, indoor temperature and humidity levels you report, the specific species of each plant, and pot size. As conditions change, your schedule updates automatically.",
    },
    {
      question: "Is my plant data private?",
      answer:
        "Yes. Your plant photos, journal entries, and chat conversations are encrypted and never shared with third parties. You can export or delete your data at any time.",
    },
    {
      question: "What makes this different from plant reminder apps?",
      answer:
        "Most plant apps just send generic watering reminders. PlantWhisperer provides expert-level conversational AI that understands context, diagnoses problems from photos, explains the science behind plant care, and adapts recommendations based on your actual results.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-7 w-7 text-green-600" />
              <span className="text-xl font-bold text-gray-900">PlantWhisperer</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="/login">
                <Button variant="ghost" className="text-sm">
                  Sign In
                </Button>
              </a>
              <a href="/register">
                <Button className="text-sm bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-3">
            <a href="#features" className="block text-sm text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#how-it-works" className="block text-sm text-gray-600 hover:text-gray-900">
              How It Works
            </a>
            <a href="#pricing" className="block text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#faq" className="block text-sm text-gray-600 hover:text-gray-900">
              FAQ
            </a>
            <Separator />
            <div className="flex flex-col gap-2 pt-2">
              <a href="/login">
                <Button variant="ghost" className="w-full text-sm">
                  Sign In
                </Button>
              </a>
              <a href="/register">
                <Button className="w-full text-sm bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm bg-green-50 text-green-700 border-green-200">
            <Leaf className="h-3.5 w-3.5 mr-1.5" />
            AI-Powered Plant Care
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Your AI plant parent — diagnose, journal, and grow smarter
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Upload photos, describe symptoms in plain language, and get expert-level conversational diagnoses for your houseplants. Finally, a tool built for people with 10–50+ plants who want more than generic reminders.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-base px-8 py-6">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button size="lg" variant="outline" className="text-base px-8 py-6">
                See How It Works
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required. Free for up to 5 plants.</p>

          {/* Hero visual */}
          <div className="mt-16 max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border border-green-100 p-8 sm:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <Camera className="h-8 w-8 text-green-600 mb-3" />
                <p className="text-sm font-medium text-gray-900">Upload a photo</p>
                <p className="text-xs text-gray-500 mt-1">Snap your struggling plant</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <Brain className="h-8 w-8 text-green-600 mb-3" />
                <p className="text-sm font-medium text-gray-900">AI analyzes</p>
                <p className="text-xs text-gray-500 mt-1">Identifies issues instantly</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <Droplets className="h-8 w-8 text-green-600 mb-3" />
                <p className="text-sm font-medium text-gray-900">Get a plan</p>
                <p className="text-xs text-gray-500 mt-1">Step-by-step recovery guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs bg-green-50 text-green-700 border-green-200">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Everything your plants need, powered by AI
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Go beyond basic reminders. Get the contextual, expert-level plant care guidance that 2.8M+ plant parents are searching for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border border-gray-200 hover:border-green-200 transition-colors hover:shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-2">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs bg-green-50 text-green-700 border-green-200">
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Three simple steps to healthier plants
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              No complex setup. Start getting AI-powered plant care in under a minute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-bold text-green-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-base px-8 py-6">
                Start Your Plant Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white">2.8M+</p>
              <p className="text-green-100 mt-1">Plant parents seeking help daily</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">90%+</p>
              <p className="text-green-100 mt-1">Diagnosis accuracy rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-green-100 mt-1">Plant species supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs bg-green-50 text-green-700 border-green-200">
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Plans that grow with your collection
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Start free and upgrade as your plant family expands. All plans include AI-powered care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((tier) => (
              <Card
                key={tier.name}
                className={`relative ${
                  tier.highlighted
                    ? "border-green-600 border-2 shadow-lg scale-[1.02]"
                    : "border-gray-200"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-3 py-0.5 text-xs">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-500 ml-1">/{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="/register" className="w-full">
                    <Button
                      className={`w-full ${
                        tier.highlighted
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                    >
                      {tier.cta}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs bg-green-50 text-green-700 border-green-200">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about PlantWhisperer.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Stop guessing. Start growing.
          </h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Join thousands of plant parents who are using AI to keep their collections thriving. Your plants deserve expert care — and now they can have it.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/register">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 text-base px-8 py-6">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="/login">
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10">
                Sign In
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-green-200">Free forever for up to 5 plants. No credit card needed.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-lg font-bold text-white">PlantWhisperer</span>
              </div>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                Your AI plant care companion. Diagnose problems, track growth, and get personalized care schedules for every plant in your collection.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Account</h4>
              <ul className="space-y-2">
                <li><a href="/login" className="text-sm text-gray-400 hover:text-white transition-colors">Sign In</a></li>
                <li><a href="/register" className="text-sm text-gray-400 hover:text-white transition-colors">Get Started</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              {"© 2024 PlantWhisperer. All rights reserved."}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}