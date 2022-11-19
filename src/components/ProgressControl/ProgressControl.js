import icons from './../../assets/icons/icons.svg'

function Button({ type }) {
  return (<button className={type}>
    {type === 'prev' && '上一步'}
    {type === 'next' && '下一步'}
    <svg className="cursor-point" >
      <use xlinkHref={icons + "#svg-icon-right-arrow"}></use>
    </svg>

  </button>)
}

function ButtonGroup({ progressName, next, prev }) {
  return (
    <section className="button-group col col-12" data-phase={progressName}>
      {!!prev && <Button type="prev" />}
      {!!next && <Button type="next" />}
    </section>
  )
}

function Progress1() {
  const progressName = "address"
  return (
    <ButtonGroup progressName={progressName} next={true} prev={false} />
  )
}

// function Progress2() {
//   return (
//     <section className="button-group col col-12" data-phase="shipping">
//       <button className="prev">
//         <svg className="cursor-point">
//           {/* <use xlinkHref="#svg-icon-left-arrow"></use> */}
//         </svg>
//         上一步
//       </button>
//       <button className="next">
//         下一步
//         <svg className="cursor-point">
//           {/* <use xlinkHref="#svg-icon-right-arrow"></use> */}
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
//           {/* <use xlinkHref="#svg-icon-left-arrow"></use> */}
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