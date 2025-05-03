import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./services.module.css"

const Services = () => {
  const servicesList = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 26
      ) {
        edges {
          node {
            id
            frontmatter {
              videoLink
              serviceOrderlink
              title
            }
          }
        }
      }
    }
  `)

  // const oos = useStaticQuery(graphql`
  //     query {
  //       allMarkdownRemark(
  //         sort: { order: DESC, fields: frontmatter___date }
  //         limit: 52
  //       ) {
  //         edges {
  //           node {
  //             id
  //             frontmatter {
  //               videoLink
  //               serviceOrderlink
  //               title
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)

  // filter out md that does not have a video link
  let services = servicesList.allMarkdownRemark.edges.filter(service => {
    return service.node.frontmatter.videoLink
  })

  return (
    <div className={styles.background}>
      <div className={styles.message}>
        <main>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1rU1DTYeXyt3JQJPZWh1vlhYfPyYJXRei/view?usp=sharing"
            >
              Order of Service May 4
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1vXmgoI-06pJCU23g7S2Z-CY994kUo5XM/view?usp=sharing"
            >
              Music May 4
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1_lVMTsVU33qres-zVVVRL8k8QFzqWz8i/view?usp=sharing"
            >
              Prayer List
            </button>
          </form>
          {/* <div className="iframe-container">
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/XAJkDY3Qbwc"
              title="Oct. 2, 2022"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
        </main>
      </div>

      <div className={styles.buttonContainer}>
        {services.map(service => {
          return (
            <form key={service.node.frontmatter.videoLink}>
              <button
                className={styles.button}
                formAction={service.node.frontmatter.videoLink}
              >
                {service.node.frontmatter.title}
              </button>
            </form>
          )
        })}
      </div>
    </div>
  )
}

export default Services
