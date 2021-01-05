import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
{
  allStrapiJobs(sort: {fields: strapiId, order: ASC}) {
    nodes {
      id
      strapiId
      company
      date
      position
      description {
        name
      }
    }
  }
}
`



const Jobs = () => {
  const data = useStaticQuery(query);
  
  const {
    allStrapiJobs: {nodes: jobs}
  } = data;

  console.log(jobs)
  const [value, setValue] = useState(0);

  const {company, position, date, description} = jobs[value];

  console.log(company, position, date, description);



  return (
    <section className="section jobs">
      <Title title="experience"/>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, idx) => {
            return (
              <button key={job.strapiId}
              className={`job-btn ${idx === value && "active-btn"}`}
              onClick={()=>setValue(idx)}
              > 
                {job.company} 
              </button>
            )
          })}
        </div>

        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
            description.map((item, idx) => {
              return (
                <div key={idx} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{item.name}</p>
                </div>
              )
            })
          }
        </article>

      </div>

      <Link to="about" className="btn center-btn">
          more info
      </Link>

    </section>
  )
}

export default Jobs
