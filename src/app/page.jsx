import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

// import { useTranslation } from 'react-i18next'

export function HomePage() {
  return (
    <Box>
      <Typography style={{ textAlign: 'center' }} variant="h4">
        {/* {t('layout:main:title')} */}
        Home Page
      </Typography>
    </Box>
  )
}

HomePage.propTypes = {
  // repo: PropTypes.object.isRequired,
}

export default HomePage
