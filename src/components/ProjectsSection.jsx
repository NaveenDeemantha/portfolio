
const projects = [
    {
        id: 1,
        title: "Project one",
        description: "This is a description for project one.",
        image: "/projects/project1.png",
        tags: ["React", "Node.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
     {
        id: 2,
        title: "Project two",
        description: "This is a description for project two.",
        image: "/projects/project2.png",
        tags: ["React", "Node.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
     {
        id: 3,
        title: "Project three",
        description: "This is a description for project three.",
        image: "/projects/project3.png",
        tags: ["React", "Node.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
     {
        id: 4,
        title: "Project four",
        description: "This is a description for project four.",
        image: "/projects/project4.png",
        tags: ["React", "Node.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
    
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto ">
                    Here are some of the projects I've worked on recently. 
                    Click on any project to learn more about it.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover">
                            <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}  
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/400x300/6366f1/ffffff?text=Project+Image";
                                    }}
                                />
                            </div>
                            {/* <div className="p-6">
                                <div className="flex flex-wrap gap">

                                </div>
                            </div> */}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )

}