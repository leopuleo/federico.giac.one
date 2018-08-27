import React from 'react'

import Seo from '../components/seo'
import Main from '../components/main'
import Title from '../components/title'
import Content from '../components/content'

const NotFoundPage = () => (
  <Main>
    <Seo
      title='Pagina non trovata'
      description='Spiacente, la pagina che hai cercato non esiste.'
    />
    <Title title='Pagina non trovata' cssClasses='lg:text-7xl' />
    <Content content='Spiacente, la pagina che hai cercato non esiste.' />
  </Main>
)

export default NotFoundPage
