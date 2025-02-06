

const StepsComponent = ({ pics }) => {
    const steps = [
      {
        number: 1,
        title: "Discovery",
        description:
          "We take time to understand your vision, goals, and aspirations. Every project begins with a collaborative conversation.",
      },
      {
        number: 2,
        title: "Design and Planning",
        description:
          "Our team of engineers, architects, and planners transforms ideas into actionable blueprints, ensuring efficiency and feasibility.",
      },
      {
        number: 3,
        title: "Execution",
        description:
          "With precision and expertise, we bring your project to life, adhering to timelines, budgets, and the highest standards.",
      },
      {
        number: 4,
        title: "Legacy Building",
        description:
          "We’re not just constructing buildings; we’re creating landmarks that leave a lasting impact.",
      },
    ];
  
    return (
      <div className="w-full max-w-5xl mx-auto p-4">
        {steps.map((step, index) => (
          <div key={index} className="w-full flex flex-col md:flex-row items-center gap-6 p-4">
            {/* Step Box */}
            <div className="w-16 h-24 border-2 border-[#904D5E] flex items-center justify-center">
            
              <p className="text-[#904D5E] text-lg font-semibold text-center">
                Step <br /> {step.number}
              </p>
            </div>
    
            {/* Text & Image Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 text-center md:text-left w-full">
            
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">{step.title}</h1>
              <img
                src={pics}
                alt={step.title}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <p className="w-full md:w-1/2 text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default StepsComponent;