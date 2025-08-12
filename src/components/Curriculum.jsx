import { motion } from "framer-motion";

const MotionDiv = motion.div;
export default function CVSection() {
  const timelineData = [
    {
      title: "PhD Linguistics",
      date: "2015 - 2019",
      description:
        "Doctorat en linguistique, spécialisation en analyse du discours.",
    },
    {
      title: "Master in Japanese",
      date: "2013 - 2015",
      description: "Études approfondies en langue et culture japonaises.",
    },
    {
      title: "Full-Stack Programming Course",
      date: "2024",
      description: "6 mois intensifs en développement web full-stack.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-gray-200" id="cvsection">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Curriculum Vitae</h2>
        <div className="border-l-2 border-gray-600">
          {timelineData.map((item, index) => (
            <MotionDiv
              key={index}
              className="relative pl-8 pb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-0 top-2 w-3 h-3 bg-gray-500 rounded-full" />
              <h3 className="text-lg font-semibold text-gray-200">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.date}</p>
              <p className="text-gray-300">{item.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
