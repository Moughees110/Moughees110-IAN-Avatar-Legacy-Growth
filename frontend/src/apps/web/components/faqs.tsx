
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FAQsComponent() {
  return (
    <section className="relative w-full min-h-screen bg-[#0B0C0F] text-white py-20 px-4 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-white mb-2 border border-gray-700 px-3 py-1 rounded-md w-fit mx-auto">
          <HelpCircle className="w-4 h-4" /> FAQ's
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Frequently Asked <span className="italic font-light">Question</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Find quick answers to the most common questions about our platform
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side Card */}
          <div className="bg-[#0F1014] border border-[#1A1A1A] rounded-xl p-6 max-w-sm mx-auto flex flex-col justify-center items-center text-center">
            <div className="bg-[#0B0C0F] border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center mb-4">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Still Have Questions?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Still have questions? Feel free to get in touch with us today!
            </p>
            <Button className="gap-2 cursor-pointer text-sm px-4 py-2 text-gray-300 bg-[#0F1014] shadow-md border border-gray-600">
              <ArrowUpRight className="w-4 h-4 text-white" /> Ask A Question
            </Button>
          </div>

          {/* Right Side Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-2">
            <div className="bg-[#0F1014] border border-[#1A1A1A] rounded-xl p-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Is the template SEO-friendly?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, the template is built with SEO best practices, making it
                  easy to optimize your content for search engines.
                </AccordionContent>
              </AccordionItem>
            </div>

            <div className="bg-[#0F1014] border border-[#1A1A1A] rounded-xl p-2">
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What’s included with the template?
                </AccordionTrigger>
                <AccordionContent>
                  The template includes a complete UI kit, documentation, and
                  all necessary components for quick setup.
                </AccordionContent>
              </AccordionItem>
            </div>

            <div className="bg-[#0F1014] border border-[#1A1A1A] rounded-xl p-2">
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I use this template to create a landing page?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, this template is perfect for creating high-converting
                  landing pages.
                </AccordionContent>
              </AccordionItem>
            </div>

            <div className="bg-[#0F1014] border border-[#1A1A1A] rounded-xl p-2">
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Is this template optimized for accessibility?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely, it follows best practices to ensure it is
                  accessible to all users.
                </AccordionContent>
              </AccordionItem>
            </div>

            <div className="bg-[#0F1014] border border-[#1A1A1A] rounded-xl p-2">
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Does the template include mobile responsiveness?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, the template is fully responsive and works seamlessly on
                  all screen sizes.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </div>

      {/* Gradient Bottom Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#ffffff0a] to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}

