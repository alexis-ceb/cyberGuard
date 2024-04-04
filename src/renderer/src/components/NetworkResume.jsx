import ProgressIndicator from './progressIndicator'

const NetworkResume = ({ danger, resume }) => {
  return (
    <div className="h-full w-full flex flex-row items-center justify-evenly gap-4 overflow-clip">
      <div className="flex justify-center items-center">
        <ProgressIndicator danger={danger} />
      </div>
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
        <p className="font-medium text-stone-700">Network resume</p>
        <p className="text-sm">{resume}</p>
      </div>
    </div>
  )
}

export default NetworkResume
