import calculator from './assets/icon-calculator.svg'
import karma from './assets/icon-karma.svg'
import supervisor from './assets/icon-supervisor.svg'
import team from './assets/icon-team-builder.svg'

export default [
    
    {
        title: 'Supervisor',
        body: 'Monitors activity to identify project roadblocks',
        img: supervisor,
        id:1,
        sm: ["col-span-1"],
        md: [ "md:col-start-3", "md:col-span-2", 'md:row-span-full',  ],
        xl: ["xl:col-start-2", "xl:row-start-[2]", "xl:row-span-2"],
        shadow: "shadow-[inset_0_5px_0_0_#45d3d3,0_4px_8px_-4px_#0000004d]"
    },
    {
        title: 'Team Builder',
        body: 'Scans our talent network to create the optimal team for your project',
        img: team,
        id:2,
        sm: ["col-span-1"],
        md:["md:col-start-2",  "md:row-start-2", 'md:row-end-auto'],
        xl: ["xl:col-start-3", "xl:row-start-1", "xl:row-span-2"],
        shadow: "shadow-[inset_0_5px_0_0_#ea5353,0_4px_8px_-4px_#0000004d]"

    },
    {
        title: 'Karma',
        body: 'Regularly evaluates our talent to ensure quality',
        img: karma,
        id:3,
        sm: ["col-span-1"],
        md:[ "md:col-start-4", "md:col-span-2", "md:row-[2]",],
        xl: ["xl:col-start-4", "xl:row-start-2", "xl:row-span-2"],
        shadow: "shadow-[inset_0_5px_0_0_#fcaf4a,0_4px_8px_-4px_#0000004d]"
    },
    {
        title: 'Calculator',
        body: 'Uses data from past projects to provide better delivery estimates',
        img: calculator,
        id:4,
        sm: ["col-span-1"],
        md:['md:row-[3]', "md:col-start-3",  "md:col-span-2", "md:justify-self-center"],
        xl: ["xl:col-[3]", "xl:row-start-3", "xl:row-span-2"],
        shadow: "shadow-[inset_0_5px_0_0_#549ef2,0_4px_8px_-4px_#0000004d]"
    },
    
]