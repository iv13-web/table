import PropTypes from 'prop-types'

const headingStyles = {
  display: 'inline-block',
  padding: '.5rem',
  fontSize: '1.2rem',
  borderRadius: '4px',
  fontWeight: '500',
  color: 'white'
}

export default function SearchStatus({ length }) {
  const renderPhrase = (number) => {
    const casesToChange = {
      mod: [12, 13, 14],
      other: ['2', '3', '4']
    }
    const numStr = number.toString()
    const lastChar = numStr.charAt(numStr.length - 1)
    let correctWord
    if (casesToChange.mod.includes(number % 100)) {
      correctWord = 'человек'
    } else if (casesToChange.other.includes(lastChar)) {
      correctWord = 'человека'
    } else {
      correctWord = 'человек'
    }

    return number
      ? `${number} ${correctWord} 
         ${
           lastChar === '1' && number % 100 !== 11 ? 'тусанет' : 'тусанут'
         } с тобой сегодня`
      : 'Никто с тобой не тусанет'
  }

  return (
    <div className={!length ? 'red' : 'teal'} style={headingStyles}>
      {renderPhrase(length)}
    </div>
  )
}

SearchStatus.propTypes = {
  length: PropTypes.number
}
