import PropTypes from 'prop-types';
import {Box, Title} from './Section.styled'

export const Section = ({ title, children }) => {
  return (<section>
      <Box>
      {title && <Title>{title}</Title>}
      {children}
      </Box>
    </section>)
}

Section.propTypes = {
  title: PropTypes.string,
};