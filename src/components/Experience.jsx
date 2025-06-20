const Experience = () => {
  const experiences = [
    {
      date: "08/2023 – 10/2024",
      location: "Lahore, Pakistan",
      position: "Junior Developer, Eusol",
      tasks: [
        "Attendance Integration",
        "Installation Of Odoo On Domain",
        "WhatsApp Integration",
        "Conversion of Odoo Module from Old to New Version",
        "Odoo Migration",
        "Customization of Eusol Setup"
      ],
    },
    {
      date: "11/2024",
      location: "Lahore, Pakistan",
      position: "Odoo Developer and Frontend, AlBari",
      tasks: [
        "Changing in Existing Module",
        "Converted Odoo Module from Old to New Version",
        "Designed QWeb Reports and Resolved Module Issues Efficiently",
        "Familiar with All Versions of Odoo",
        "Integrated Odoo with WhatsApp",
        "Integrated Odoo with Attendance Machine",
        "Shopify Integration",
        "Install odoo Using Docker"
      ],
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 border-2 border-neutral-800 rounded-lg">
            <h2 className="text-xl font-semibold">{exp.position}</h2>
            <p className="text-neutral-400">{exp.date} | {exp.location}</p>
            <ul className="mt-2 list-disc list-inside text-neutral-300">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
