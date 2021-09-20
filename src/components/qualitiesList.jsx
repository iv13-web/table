import Quality from './quality'
import * as PropTypes from 'prop-types'

export default function QualitiesList({qualities}) {
  return (
    <>
      {qualities.map(quality => (
        <Quality
          key={quality._id}
          {...quality}
        />
      ))}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropTypes.array
}