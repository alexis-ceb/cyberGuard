import { CircularProgress } from '@nextui-org/react'

const ProgressIndicator = ({ danger }) => {
  return (
    <CircularProgress
      classNames={{
        svg: 'w-36 h-36 drop-shadow-md',
        indicator: 'stroke-primary',
        track: 'stroke-white/10',
        value: 'text-3xl font-semibold text-stone-500'
      }}
      value={danger}
      strokeWidth={4}
      showValueLabel={true}
    />
  )
}

export default ProgressIndicator
