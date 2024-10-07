// import React from "react"
// import * as styles from "./textSignUp.module.css"

// ;<script
//   id="textmagic_widget_id"
//   src="https://widgets.textmagic.com/widget-script.js"
//   data-code="657e81770d34809"
//   data-type="subscribe"
//   defer
// ></script>

// const textSignUp = () => {
//   return (
//     <div className={styles.container} id="textSignUp">
//       <div className="tm-widget">
//         <div className="tm-widget-inner">
//           <iframe
//             src="https://my.textmagic.com/userwidgets/cmd/show/code/657e81770d34809/default"
//             width="568"
//             height="349"
//             frameborder="0"
//             marginheight="0"
//             marginwidth="0"
//             title="Text SignUp"
//           >
//             Loading...
//           </iframe>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default textSignUp

import React, { useEffect } from "react"
// import { Helmet } from "react-helmet"

const TextSignUp = () => {
  useEffect(() => {
    // This effect will run after the component mounts
    const script = document.createElement("script")
    script.src = "https://widgets.textmagic.com/widget-script.js"
    // script.id = "textSignUp"
    script.id = "textmagic_widget_id"
    script.setAttribute("data-code", "a56b070e3862602")
    script.setAttribute("data-type", "subscribe")
    script.defer = false
    document.body.appendChild(script)

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script)
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <>
      {/* <Helmet> */}
      {/* You can add any additional head elements here if needed */}
      {/* </Helmet> */}
      <div id="textSignUp">
        <div id="textmagic-form-container">
          {/* The TextMagic form will be injected here by their script */}
        </div>
      </div>
    </>
  )
}

export default TextSignUp
