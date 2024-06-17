import PropTypes from 'prop-types'

function Banner ({url, descricao}) {
    return (
        <>
            <img src={url} alt = {descricao}  height="250px" />
        </>
    )
}

Banner.propTypes = {
    descricao : PropTypes.string.isRequired,
    url : PropTypes.string
}

Banner.defaultProps = {
    url : "https://placehold.co/250"
}

export default Banner