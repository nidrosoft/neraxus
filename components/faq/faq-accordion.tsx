"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How to Generate Images with Neraxus",
    answer: "Learn how to create stunning images using our AI-powered generation tools.",
  },
  {
    question: "How to Edit Images with Neraxus",
    answer: "When generating images, even with great text-to-image prompts, it's possible that some small details require adjustments due to the inherent randomness of image generation models.",
  },
  {
    question: "How to Write Great Text-to-Image Prompts",
    answer: "Discover the art of crafting effective prompts for better image generation results.",
  },
];

export function FaqAccordion() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}