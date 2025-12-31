// 1. TEDx projects
// 2. 15468 course project & report
// 3. personal project
// 4. 16726 projects page & report

export const projectData = [
    {
        id: 0,
        title: 'Google Maps Integration',
        brief: 'One liner to describe this project',
        description: `
            This project ... TEDx. (Ok, we really need to have a hyperlink for each section)
        `,
        image: '/proj-images/proj0.jpeg',
        tags: [
            {
                id: 0,
                name: '#googlemaps-api',
                description: 'This uses some sort of API',
            },
            {
                id: 1,
                name: '#nextjs',
                description: 'This is a real time application',
            },
            {
                id: 2,
                name: '#collaboration',
                description: 'This is a collaboration project',
            }
        ],
        demo: true,
        demo_url: '',
        github: true,
        github_url: 'https://github.com/gpxxlt',
    },
    {
        id: 1,
        title: 'Bidirectional Path Tracer',
        brief: 'One liner to describe this project',
        description:`
            The final project for CMU CS468: Physics Based Rendering. 
            In this project I implemented a bidirectional path tracer (BDPT) from scratch in a basic renderer, DIRT.
            This unbiased path tracer is useful in scenes that lack direct illumination and also caustic effects.
            See more details in the attached report.
        `,
        image: '/proj-images/proj0.jpeg',
        tags: [
            {
                id: 0,
                name: '#computer-graphics',
                description: 'This uses some sort of API',
            },
            {
                id: 1,
                name: '#C++',
                description: 'This is a real time application',
            },
            {
                id: 2,
                name: '#individual',
                description: 'This is a collaboration project',
            }
        ],
        demo: true,
        demo_url: '',
        github: true,
        github_url: '',
    },
    // {
    //     id: 2,
    //     title: 'Bidirectional Path Tracer',
    //     brief: 'One liner to describe this project',
    //     description: 'In-depth description for project 1',
    //     image: '/proj-images/proj0.jpeg',
    //     tags: [
    //
    //     ]
    // }
]
