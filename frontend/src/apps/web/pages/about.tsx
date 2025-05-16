export default function About() {
  return (
    <section
      id='next-section'
      className="relative w-full py-24 px-6 text-center text-gray-400"
      style={{
        background:
          'linear-gradient(to right, #000000 0%, #0b0d14 25%, #141820 50%, #0b0d14 75%, #000000 100%)',
      }}
    >
      {/* Top Label */}
      <div className="mb-6 flex justify-center">
        <span className="inline-flex items-center gap-2 bg-gray-900 bg-opacity-50 text-gray-400 text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.049 6.29a1 1 0 00.95.69h6.62c.969 0 1.371 1.24.588 1.81l-5.36 3.89a1 1 0 00-.364 1.118l2.05 6.29c.3.92-.755 1.688-1.54 1.118l-5.36-3.89a1 1 0 00-1.176 0l-5.36 3.89c-.785.57-1.838-.197-1.539-1.118l2.05-6.29a1 1 0 00-.364-1.118l-5.36-3.89c-.783-.57-.38-1.81.588-1.81h6.62a1 1 0 00.95-.69l2.05-6.29z"
            />
          </svg>
          INTRODUCING ARTORIA
        </span>
      </div>

      {/* Quote */}
      <blockquote className="max-w-4xl mx-auto text-xl md:text-2xl font-light leading-relaxed text-gray-400">
        <span className="text-gray-500">&ldquo;</span>
        We gather your site data.{' '}
        <em className="italic font-serif">We know your target audience</em>{' '}
        &amp; how your brand can{' '}
        <em className="italic font-serif">standout from crowd.</em> <br />
        Best part is we also help you with Solutions{' '}
        <span className="text-gray-500">&rdquo;</span>
      </blockquote>

      {/* Profile */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <img
          src="/website/G1bC6MQnKLl8c7ZyjwpJlVGuw.avif"
          alt="Co-founder & ex Google designer"
          className="w-16 h-16 rounded-full object-cover"
        />
        <p className="text-gray-300 text-sm font-medium">
          Co-founder & ex google designer
        </p>
      </div>
    </section>
  )
}
