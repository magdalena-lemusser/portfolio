import { useState } from "react";

export default function ProjectCard({
  title,
  images,
  description,
  challenges,
  skills,
  githubLink,
  liveLink,
}) {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openModal(index, e) {
    e.stopPropagation();
    setCurrentIndex(index);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function prevImage(e) {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  function nextImage(e) {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return (
    <>
      <div
        className={`bg-gray-100 text-gray-800 rounded-lg p-8 shadow-md w-full cursor-pointer transition-transform duration-300 hover:scale-105 ${
          expanded ? "min-h-[600px]" : "min-h-[350px]"
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-3xl font-bold mb-6">{title}</h3>

        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative w-36 h-36 sm:w-40 sm:h-40 md:w-50 md:h-50 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-110
        ${i === 0 ? "rotate-[-3deg] translate-y-2" : ""}
        ${i === 1 ? "rotate-[2deg]" : ""}
        ${i === 2 ? "rotate-[-1deg] -translate-y-2" : ""}`}
              onClick={(e) => openModal(i, e)}
            >
              <img
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                className="w-full h-full object-cover max-h-[300px]"
              />
            </div>
          ))}
        </div>

        {expanded && (
          <div className="mt-8 space-y-4">
            <p>
              <strong>Description:</strong> {description}
            </p>
            <p>
              <strong>Problématiques rencontrées:</strong> {challenges}
            </p>
            <p>
              <strong>Compétences développées:</strong> {skills}
            </p>
            <div className="flex space-x-4 mt-4">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[80vh] w-full bg-white rounded-lg shadow-lg p-4 border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`${title} large screenshot ${currentIndex + 1}`}
              className="w-full max-h-[70vh] object-contain rounded-md"
            />
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-200 text-3xl font-bold hover:text-gray-500"
              aria-label="Close modal"
            >
              &times;
            </button>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-200 text-4xl font-bold hover:text-gray-500"
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-200 text-4xl font-bold hover:text-gray-500"
              aria-label="Next image"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
