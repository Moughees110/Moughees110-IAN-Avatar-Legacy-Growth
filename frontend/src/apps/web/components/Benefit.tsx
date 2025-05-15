import { motion } from 'framer-motion'
import {
  Rocket,
  ShieldCheck,
  Sparkles,
  Code,
  CloudLightning,
  CheckCircle,
} from 'lucide-react'

const cards = [
  {
    title: 'Streamlined Collaboration',
    description:
      'Experience lightning-fast load Connect effortlessly with real-time syncing and shared workspaces. and interactions.',
    icons: [
      <Rocket key="1" className="w-12 h-12" />,
      <CloudLightning key="2" className="w-12 h-12" />,
    ],
    style: {
      outer: 'from-gray-500 <to-indigo-2></to-indigo-2>00',
      inner: 'border-gray-400 shadow-gray-500/30',
      embedded: 'border border-gray-800 border-b-transparent',
    },
  },
  {
    title: 'Customizable Workflows',
    description:
      'Top-notch security with consistent Adapt Landio to fit your unique business processes effortlessly.',
    icons: [
      <ShieldCheck key="1" className="w-12 h-12" />,
      <CheckCircle key="2" className="w-12 h-12" />,
    ],
    style: {
      outer: 'from-gray-500 <to-indigo-2></to-indigo-2>00',
      inner: 'border-gray-400 shadow-gray-500/30',
      embedded: 'border border-gray-800 border-b-transparent',
    },
  },
  {
    title: 'Secure and Reliable',
    description:
      'Visually appealing design Enterprise-grade security ensures your data stays safe and accessible users love.',
    icons: [
      <Sparkles key="1" className="w-12 h-12" />,
      <Code key="2" className="w-12 h-12" />,
    ],
    style: {
      outer: 'from-gray-500 <to-indigo-2></to-indigo-2>00',
      inner: 'border-gray-400 shadow-gray-500/30',
      embedded: 'border border-gray-800 border-b-transparent',
    },
  },
  {
    title: 'Scalable Solutions',
    description:
      'Built with modern tech Built to grow with your team, no matter your size or industry and clean code.',
    icons: [
      <Code key="1" className="w-12 h-12" />,
      <Rocket key="2" className="w-12 h-12" />,
    ],
    style: {
      outer: 'from-gray-500 <to-indigo-2></to-indigo-2>00',
      inner: 'border-gray-400 shadow-gray-500/30',
      embedded: 'border border-gray-800 border-b-transparent',
    },
  },
  {
    title: 'Enhanced Productivity',
    description:
      'Cloud services baked in for Eliminate repetitive tasks with smart automation solutions.',
    icons: [
      <CloudLightning key="1" className="w-12 h-12" />,
      <ShieldCheck key="2" className="w-12 h-12" />,
    ],
    style: {
      outer: 'from-gray-500 <to-indigo-2></to-indigo-2>00',
      inner: 'border-gray-400 shadow-gray-500/30',
      embedded: 'border border-gray-800 border-b-transparent',
    },
  },
  {
    title: 'Seamless Integrations',
    description:
      'Collaborate securely with Works with your favorite tools for a cohesive workflow experience access.',
    icons: [
      <CheckCircle key="1" className="w-12 h-12" />,
      <Sparkles key="2" className="w-12 h-12" />,
    ],
    style: {
      outer: 'from-gray-500 <to-indigo-2></to-indigo-2>00',
      inner: 'border-gray-400 shadow-gray-500/30',
      embedded: 'border border-gray-800 border-b-transparent',
    },
  },
]

const Benefit = () => {
  return (
    <div className="bg-[#0B0D11] text-white py-20 px-0.5 sm:px-10 md:px-20 lg:px-32">
      <div className="text-center mb-16 relative z-10">
        <div
          className=" border border-gray-800 shadow w-32 rounded-md mx-auto
         flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-white mb-2"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span>Benefit</span>
        </div>
        <h2 className="text-4xl font-semibold">
          Why Choose{' '}
          <em className="italic font-medium text-neutral-400">Landio?</em>
        </h2>
        <p className="text-gray-400 mt-3">
          Everything you need to collaborate, create in one place
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-[2px] bg-gradient-to-br ${card.style.outer}`}
          >
            <div
              className={`bg-[#0B0D11] rounded-2xl p-6 h-72 flex flex-col justify-between text-center`}
            >
              <div className={`rounded-xl p-3 mb-4  ${card.style.embedded}`}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  className={`border ${card.style.inner} shadow-lg bg-[#151a2bc5] rounded-lg w-30 h-20 mx-auto flex items-center justify-center gap-2 mb-4 mt-15 text-white/40 hover:text-white`}
                >
                  {card.icons.map((Icon, i) => (
                    <div key={i}>{Icon}</div>
                  ))}
                </motion.div>

                <div>
                  <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-400 px-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefit
