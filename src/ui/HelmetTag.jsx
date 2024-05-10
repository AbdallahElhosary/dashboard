import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const HelmetTag = ({ title }) => {
  
  const {t} = useTranslation()
  return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t(title) }</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
  )
}

export default HelmetTag
