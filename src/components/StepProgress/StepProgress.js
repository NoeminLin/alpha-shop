import icons from './../../assets/icons/icons.svg'

// 單一步驟
function StepItem({ title, phase, index, isActive, isFinish }) {
  console.log('isActive', isActive)
  return (
    <span className="progress-group" key={phase}>
      <span className="progress-icon">
        <span className="text">{index + 1}</span>
        <svg className={"icon size-full " + isActive && 'cursor-point' } style={!isFinish && { display:'none' }}>
          <use xlinkHref={icons + "#svg-icon-pg-complete"}></use>
        </svg>
      </span>
      <span className="progress-label">{title}</span>
    </span>
  )
}

// 步驟集合
function StepProgress() {
  const progress = 0;
  const stepProgessArray = [{
    title: '寄送地址',
    phase: 'address',
  }, {
    title: '運送方式',
    phase: 'shipping',
  },
  {
    title: '付款資訊',
    phase: 'credit-card',
  }]

  const stepItems = []
  stepProgessArray.forEach((step, index) => {
    stepItems.push(<StepItem {...step} index={index} key={'step-' + index} isActive={progress === index} />)
    if (index !== stepProgessArray.length - 1) {
      stepItems.push(<span className="progress-bar" key={'progress-bar-' + index}></span>)
    }
  })

  return (
    <section className="progress-container col col-12">
      {stepItems}
    </section>
  )
}

export default StepProgress