// section
// button-group

function Progress1() {
  return (
    <section className="button-group col col-12" data-phase="address">
      <button className="next">
        下一步
        <svg className="cursor-point">
          {/* <use xlink:href="#svg-icon-right-arrow"></use> */}
        </svg>
      </button>
    </section>
  )
}

// function Progress2() {
//   return (
//     <section className="button-group col col-12" data-phase="shipping">
//       <button className="prev">
//         <svg className="cursor-point">
//           {/* <use xlink:href="#svg-icon-left-arrow"></use> */}
//         </svg>
//         上一步
//       </button>
//       <button className="next">
//         下一步
//         <svg className="cursor-point">
//           {/* <use xlink:href="#svg-icon-right-arrow"></use> */}
//         </svg>
//       </button>
//     </section>
//   )
// }

// function Progress3() {
//   return (
//     <section className="button-group col col-12" data-phase="credit-card">
//       <button className="prev">
//         <svg className="cursor-point">
//           {/* <use xlink:href="#svg-icon-left-arrow"></use> */}
//         </svg>
//         上一步
//       </button>
//       <button className="next">
//         確認下單
//       </button>
//     </section>
//   )
// }

function ProgressControl() {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <Progress1 />
    </section>
  )
}

export default ProgressControl