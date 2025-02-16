"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How Does AI Improve Dating Conversations?",
    answer:
      "AI tools like DeepLove analyze your chats in real-time, offering suggestions to keep conversations engaging. For example, if a chat is stalling, it might suggest a fun question or a flirty comment to reignite the spark.",
  },
  {
    question: "Can AI Help Me Avoid Ghosting?",
    answer:
      "Yes! AI can detect when a conversation is losing momentum and provide tips to keep it alive. It can also help you craft thoughtful follow-up messages to reduce the chances of being ghosted.",
  },
  {
    question: "What If I Don’t Like the AI’s Suggestions?",
    answer:
      "AI tools are designed to assist, not dictate. You’re always in control and can choose to ignore or modify any suggestions that don’t feel right.",
  },
  {
    question: "Is AI Biased in Dating Advice?",
    answer:
      "Reputable AI tools are trained on diverse datasets to minimize bias. However, it’s important to use your judgment and ensure the advice aligns with your values and intentions.",
  },
  {
    question: "How Does AI Handle Privacy?",
    answer:
      "AI dating tools like DeepLove use advanced encryption and anonymization techniques to protect your data. Your conversations and personal information are never shared with third parties.",
  },
  {
    question: "Can AI Help Me Write a Better Dating Profile?",
    answer:
      "Absolutely! AI can analyze your profile and suggest improvements, such as highlighting your unique traits or rephrasing descriptions to make them more engaging.",
  },
  {
    question: "What If I Don’t Like the AI’s Suggestions?",
    answer:
      "AI tools are designed to assist, not dictate. You’re always in control and can choose to ignore or modify any suggestions that don’t feel right.",
  },
  {
    question: "Can AI Help Me Understand My Dating Patterns?",
    answer:
      "Yes! AI can analyze your past interactions and identify patterns, such as recurring topics or communication styles. This can help you reflect on your approach and make improvements.",
  },
  {
    question: "Is AI Dating Only for Online Dating?",
    answer:
      "No! AI tools can also help with in-person dating. For example, DeepLove can provide tips for first-date conversations or suggest ways to follow up after meeting someone in real life.",
  },
  {
    question: "How Does AI Handle Cultural Differences in Dating?",
    answer:
      "Advanced AI tools are trained on global datasets to understand cultural nuances. This allows them to provide advice that’s sensitive to different dating norms and traditions.",
  },
  {
    question: "Can AI Help Me Recover from a Bad Date?",
    answer:
      "Yes! AI can help you process what went wrong and suggest ways to improve future dates. It can also help you craft a polite but honest message if you need to let someone down gently.",
  },
];