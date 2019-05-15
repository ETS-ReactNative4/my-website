import React from 'react';
import WorkDetail from './WorkDetail';
import './WorkPage.css';

class WorkPage extends React.Component{
    state = {
        jobs: [
            {
                title: "Contractor",
                employer: "UBC Health and Adult Development Lab, Vancouver",
                duration: "Jan 2018 – April 2018, 4 months",
                duties: [
                    "Created a python parser to process raw text files into legible csv file for a research study"
                ],
                skills: "Python"
            },
            {
                title: "Agile Developer Intern - Performance and Reliability (Co-op)",
                employer: "SAP Labs Vancouver, Vancouver",
                duration: "May 2017 – Dec 2017, 8 months",
                duties: [
                    "Improved internal technologies, including Java and Selenium tools, as well as Jenkins automation",
                    "Isolated root cause of performance issues to a single commit on a monolithic business analysis product with millions of lines of code",
                    "Set up reverse proxy and development proxy through Apache HTTP Server",
                    "Maintained and managed existing performance testing environments"
                ],
                skills: "JavaScript, Java, Jenkins, Selenium, Eclipse, Protractor, Git, Batch, Shell, Agile (Sprints)"
            },
            {
                title: "Quality Software Intern (Co-op)",
                employer: "Shift Health Paradigm, Vancouver",
                duration: "Aug 2016 – Dec 2016, 4 months",
                duties: [
                    "Managed automated testing in Protractor on company’s proprietary survey web application",
                    "Updated existing test cases to increase performance and compatibility",
                    "Wrote scripts to test new features pending for deployment",
                    "Created a web parser that collected useful facilities given a person’s location and specific needs"
                ],
                skills: "JavaScript, Protractor, Selenium, Node.js, Git, Bash, Agile (Sprints)"
            }
        ]
    }

    render(){
        const renderedList = this.state.jobs.map((job)=>{
            return <WorkDetail key = {job.id} job = {job}/>
        })
        
        return <div className = "WorkPage">{renderedList}</div>
    }
}

export default WorkPage;