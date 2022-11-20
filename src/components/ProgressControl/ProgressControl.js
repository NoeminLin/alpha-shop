import icons from './../../assets/icons/icons.svg'

function Button({ type, onClick, submit }) {
  return (<button className={type + ' ' + (submit && 'submit')} onClick={onClick}>
    {type === 'prev' && '上一步'}
    {(type === 'next' && !submit) && '下一步'}
    {!!submit && '確認下單'}
    {!submit &&
      <svg className="cursor-point" >
        <use xlinkHref={icons + "#svg-icon-right-arrow"}></use>
      </svg>
    }

  </button>)
}

function ButtonGroup({ progressName, next, prev, submit, onClick }) {
  return (
    <section className="button-group col col-12" data-phase={progressName}>
      {!!prev && <Button type="prev" onClick={onClick} />}
      {!!next && <Button type="next" onClick={onClick} />}
      {!!submit && <Button type="next" onClick={onClick} submit="submit" />}
    </section>
  )
}

function Step({ step, onClick }) {
  console.log('PC step:', step)
  const stepProgessArray = [{
    title: '寄送地址',
    phase: 'address',
    prev: false,
    next: true,
  }, {
    title: '運送方式',
    phase: 'shipping',
    prev: true,
    next: true,
  },
  {
    title: '付款資訊',
    phase: 'credit-card',
    prev: true,
    next: false,
  }]
  const stepInfo = stepProgessArray[step]
  return (
    <ButtonGroup
      progressName={stepInfo.phase}
      next={stepInfo.next}
      prev={stepInfo.prev}
      onClick={onClick}
      submit={step === stepProgessArray.length - 1}
    />
  )
}


function ProgressControl({ step, onClick }) {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <Step step={step} onClick={onClick} />
    </section>
  )
}

export default ProgressControl