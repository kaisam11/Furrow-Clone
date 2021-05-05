import * as React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import HomeBanner from '../components/homePage/HomeBanner'
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'
import HomeContent from "../components/homePage/HomeContent"
import HomeFeature from "../components/homePage/HomeFeature"
import HomeAbout from "../components/homePage/HomeAbout"

const IndexPage = () => {
  const { cursorStyle } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyle.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  return (
    <Layout>
      <Helmet>
        <title>Furrow</title>
      </Helmet>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeature onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
