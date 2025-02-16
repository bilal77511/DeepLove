"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Myths = () => {
    return (
        <Container className="!p-0">
            <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
                {mythsdata.map((item, index) => (
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

const mythsdata = [
    {
        question: "Is AI Dating Impersonal?",
        answer:
            "Not at all! AI tools like DeepLove are designed to enhance personal connections by providing tailored suggestions that help you express yourself authentically and build meaningful relationships.",
    },
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
        question: "Can AI Really Understand Human Emotions?",
        answer:
            "Yes! Modern AI uses natural language processing (NLP) and sentiment analysis to understand tone, context, and emotions, allowing tools like DeepLove to offer advice that feels natural and empathetic.",
    },
    {
        question: "What If I Don’t Like the AI’s Suggestions?",
        answer:
            "AI tools are designed to assist, not dictate. You’re always in control and can choose to ignore or modify any suggestions that don’t feel right.",
    },
    {
        question: "Is AI Dating Only for Beginners?",
        answer:
            "No! Whether you're new to dating or a seasoned pro, AI tools can help refine your approach by providing insights into conversation patterns, suggesting icebreakers, and helping you navigate tricky situations.",
    },
    {
        question: "Will AI Replace Human Connection?",
        answer:
            "Absolutely not! AI is a supplement, not a substitute. Tools like DeepLove are here to help you build better connections, not replace the magic of in-person chemistry.",
    },
    {
        question: "Are AI Dating Tools Invasive?",
        answer:
            "Not at all. Privacy is a top priority for AI dating tools. DeepLove, for example, uses end-to-end encryption to ensure your data is secure and never shared without your consent.",
    },
    {
        question: "Do I Need to Be Tech-Savvy to Use AI Dating Tools?",
        answer:
            "No! AI tools like DeepLove are designed to be user-friendly. Just install, connect, and let the AI guide you—no technical skills required.",
    },


];