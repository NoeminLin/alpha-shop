import icons from './../../assets/icons/icons.svg'

// 單一步驟
function StepItem({ title, phase, index, isActive, isFinish }) {
  console.log('isActive', isActive)
  return (
    <span className={`progress-group ${isActive ? 'active' : ''} ${isFinish ? 'finish' : ''}`} key={phase}>
      <span className="progress-icon">
        <span className="text">{index + 1}</span>
        <svg className={"icon size-full " + isActive && 'cursor-point'}>
          <use xlinkHref={icons + "#svg-icon-pg-complete"}></use>
        </svg>
      </span>
      <span className="progress-label">{title}</span>
    </span>
  )
}

// 步驟集合
function StepProgress({ step }) {
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
  stepProgessArray.forEach((stepProgess, index) => {
    stepItems.push(<StepItem {...stepProgess} step={step} index={index} key={'step-' + index}
      isActive={step >= index} isFinish={step > index} />)
    if (index !== stepProgessArray.length - 1) {
      stepItems.push(<span className={`progress-bar ${step > index ? 'active' : ''}`} key={'progress-bar-' + index}></span>)
    }
  })

  return (
    <section className="progress-container col col-12">
      {stepItems}
    </section>
  )
}

export default StepProgress