import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/index.css'
import './styles/fonts.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import theme from './mui/theme.js'
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_GRAPHCMS_URI,
  // uri:"https://api-us-west-2.hygraph.com/v2/cluu5bl3i0ayq07uw99ccdjbh/master",
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
  // </React.StrictMode>,
)
