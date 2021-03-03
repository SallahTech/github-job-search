import React from 'react'

const JobDetails = ({ details, onResetPage }) => {
  const {
    type,
    title,
    description,
    location,
    company,
    company_url,
    company_logo,
    how_to_apply,
  } = details

  return (
    <div className='job-details'>
      <div className='back-link'>
        <a href='/#' onClick={onResetPage}>
          &lt;&lt; Back to results
        </a>
      </div>

      <div>
        {type} / {location}
      </div>
      <div className='main-section'>
        <div className='left-section'>
          <div className='title'>{title}</div>
          <hr />
          <div
            className='job-description'
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <div className='right-section'>
          <div className='company-details'>
            <h3>About Company</h3>
            <img src={company_logo} alt={company} className='company-logo' />
            <div className='company-name'>{company}</div>
            <a href={company_url} className='company-url'>
              {company_url}
            </a>
          </div>
        </div>
        <div className='how_to_apply'>
          <h3>How to apply</h3>
          <div dangerouslySetInnerHTML={{ __html: how_to_apply }}> </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
