const Experience = () => {
    const experiences = [
      {
        date: "01/2024 – 10/2024",
        location: "Lahore, Pakistan",
        position: "Junior Developer, Eusol",
        tasks: [
          "Developed custom Odoo modules using Python and XML.",
          "Customized models, views, and data relationships.",
          "Designed QWeb reports and resolved module issues efficiently.",
        ],
      },
      {
        date: "11/2024",
        location: "Lahore, Pakistan",
        position: "Odoo Developer and Frontend, AlBari",
        tasks: [
          "Changing in existing module.",
          "Converted Odoo module from old to new version.",
          "Designed QWeb reports and resolved module issues efficiently.",
          "Familiar with all versions of Odoo.",
          "Integrated Odoo with WhatsApp.",
          "Integrated Odoo with Attendance Machine.",
          "work on the Odoo.sh",
          "server installation and error debugging"     
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
  
