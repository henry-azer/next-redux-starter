import { useTranslation } from 'react-i18next'
// import { appWithTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import PropTypes from 'prop-types'

import { Box, Typography } from '@mui/material'

import { Inter } from 'next/font/google'
import '../styles/styles.scss'

export const metadata = {
  title: 'Next App',
  description: 'Next app starter',
}

const inter = Inter({ subsets: ['latin'] })

function RootLayout({ Component }) {
  const { t } = useTranslation()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Box>
          <Typography style={{ textAlign: 'center' }} variant="h4">
            {t('layout:main:title')}
          </Typography>
          <Component />;
        </Box>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  Component: PropTypes.node.isRequired,
}

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common', 'footer'])),
//     },
//   }
// }

export default RootLayout
// export default appWithTranslation(RootLayout)
