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
        md: [ "md:col-start-2", "md:col-span-2", 'md:row-span-full',  ],
        xl: ["xl:col-[1]", "xl:row-start-2", "xl:row-span-2"],
        shadow: "shadow-[inset_0_10px_0_0_#45d3d3]"
    },
    {
        title: 'Team Builder',
        body: 'Scans our talent network to create the optimal team for your project',
        img: team,
        id:2,
        md:["md:col-start-1", "md:col-span-2", "md:row-start-[2]", 'md:row-end-auto'],
        xl: ["xl:col-[2]", "xl:row-start-[0]", "xl:row-span-2"],
        shadow: "shadow-[inset_0_10px_0_0_#ea5353]"

    },
    {
        title: 'Karma',
        body: 'Regularly evaluates our talent to ensure quality',
        img: karma,
        id:3,
        md:[ "md:col-start-3", "md:col-span-2", "md:row-[2]",],
        xl: ["xl:col-[2]", "xl:row-start-[3]", "xl:row-span-2"],
        shadow: "shadow-[inset_0_10px_0_0_#fcaf4a]"
    },
    {
        title: 'Calculator',
        body: 'Uses data from past projects to provide better delivery estimates',
        img: calculator,
        id:4,
        md:['md:row-[3]', "md:col-start-2",  "md:col-span-2"],
        xl: ["xl:col-[3]", "xl:row-start-[2]", "xl:row-span-2"],
        shadow: "shadow-[inset_0_10px_0_0_#549ef2]"
    },
    
]