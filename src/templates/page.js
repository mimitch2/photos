import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default class Page extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const { title, content, featured_media } = this.props.data.wordpressPage

    return (
      <Layout>
        <div>
          {/* <h1 dangerouslySetInnerHTML={{ __html: title }} />
          {featured_media && featured_media.source_url ? (
            <img src={featured_media.source_url} />
          ) : null}

          <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        </div>
      </Layout>
    )
  }
}

// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//       title
//       content
//       featured_media {
//         source_url
//       }
//     }
//   }
// `
