import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do I get started?',
      answer:
        `Sign up for our 30-day free trial and we'll help you create a loyalty card
         that's as unique as your business. After registration, our team will meet with
          you to design the perfect loyalty program that meets the needs of your customers
           and fits your brand. Don't wait – join the party today!`,
    },
    {
      question: 'My business uses a paper rewards card. Why should we switch?',
      answer:
        `Hey there, it's time to ditch the paper cards and join the digital age! Our loyalty 
        cards are convenient for customers, which can lead to increased participation in your
        loyalty program. You'll also get improved data tracking, reduced costs, and the satisfaction
        of reducing paper waste. It's a win-win!`,
    },
  ],
  [
    {
      question: 'Can I add to my basic package?',
      answer:
        `Absolutely! We’re always here to be flexible and convenient for you. Contact us at info@stickycards.co 
        if you need to add a location, manager, or just want to chat. Our support team will be happy to assist.`,
    },
    {
      question: 'Are there any fees associated after installation',
      answer:
        `We have no hidden fees. Once you’ve signed up, you’re good to go. Your price won’t change,
         but you’ll continue to receive all the cool updates we are working on!`,
    },
    
  ],
  [
    {
      question: 'Is our customers’ information safe with sticky cards?',
      answer:
        `We prioritize the protection and security of our customers' personal information. All data collected
        through our loyalty programs is encrypted and stored in a secure manner. Access to user data is only
        granted to customers who have purchased a Professional package or higher. You can trust that we take
         the necessary precautions to safeguard your information.`,
    },
    {
      question: 'Will your price change?',
      answer:
        `Sign up with us and lock in your subscription rate – it will never increase as long as you're
        a customer! Plus, all future features will be included at no extra cost. Don't wait, join sticky
         cards now to take advantage of our low prices!`,
    },
  ]
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-md text-gray-600">
            Here’s a list of some common questions we get, along with helpful answers.
            Can’t find what you’re looking for?
            No problem – just <Link
              href="mailto:info@stickycards.co"
              className="text-cyan-500"
            >
              send us an email
            </Link>  with your question and we’ll be happy to help.
            
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
