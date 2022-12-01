import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do we get started?',
      answer:
        'First sign up for our Free 30-day trial. We will work with you to design the perfect card and loyalty program for your business.',
    },
    {
      question: 'I already have paper cards, why should we switch?',
      answer:
        '75% of consumers say they would engage more with a mobile loyalty program. Plus with stickycards you prevent theft and abuse, save on printing, reduce your carbon footprint, and have the ability to add expiry reminders!',
    },
  ],
  [
    {
      question: 'Why should I setup a stickycard?',
      answer:
        "Loyalty is hard to build and it costs 5X more to acquire a new customer. Don't you want your customers coming back? 80% of consumers find that loyalty programs impact their purchasing decisions.",
    },
    {
      question: 'How long does it take to create a card?',
      answer:
        'Depending on the complexity, we can usually build a card for your business within 48-72 hours.',
    },
    
  ],
  [
    {
      question: 'Will your price go up?',
      answer:
        "No! Here at stickycards we are determined to help small businesses compete with the Goliaths of their industry. Although we will add new plans in the future, your price will never change. We keep our friends close.",
    },
    {
      question: 'Do you support Google/Facebook registrations?',
      answer:
        "We're currently working on this and will have these sign-up options for cardholders in 2023!",
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
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
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
