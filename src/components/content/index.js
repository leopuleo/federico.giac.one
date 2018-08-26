import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './style.css'

class Content extends Component {
  /*
   * Defining the props for this component
   */
  static propTypes = {
    content: PropTypes.string,
    cookieConsent: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ])
  }

  constructor (props) {
    super(props)
    this.state = {
      content : this.props.content,
      cookieConsent : this.props.cookieConsent
    }
  }

  componentDidMount () {
    const { content } = this.props
    this.handleExternalContent(content)
  }

  componentDidUpdate (prevProps) {
    const { cookieConsent, content } = this.props
    // Typical usage (don't forget to compare props):
    if (cookieConsent !== prevProps.cookieConsent) {
      this.handleExternalContent(content)
    }
  }

  // Handle window height value
  handleExternalContent = (content) => {
    const { cookieConsent } = this.props
    const regex = /(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/gim
    if (cookieConsent) {
      this.setState({
        content : content
      })
    } else {
      this.setState({
        content : content.replace(regex,
          '<div class="no-cookie flex items-center justify-center bg-black"><div class="no-cookie__content text-white text-center p-4">Accetta l\'utilizzo dei cookies per visualizzare questo contenuto.</div></div>'
        )
      })
    }
  }

  render () {
    const { content } = this.state

    return (
      <div
        className='entry-content mb-6 text-base leading-normal md:mb-8 md:text-xl lg:mb-13 xl:w-2/3'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }
}

const mapStateToProps = ({ cookieConsent }) => {
  return {
    cookieConsent,
  }
}

export default connect(
  mapStateToProps,
  null
)(Content)
