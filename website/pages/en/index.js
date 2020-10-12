const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const { MarkdownBlock, Container, GridBlock } = CompLibrary

const SplashContainer = ({ children }) => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{children}</div>
    </div>
  </div>
)

const ProjectTitle = ({ title, tagline }) => (
  <h2 className="projectTitle">
    {title}
    <small>{tagline}</small>
  </h2>
)

const Logo = ({ img_src }) => (
  <div className="projectLogo">
    <img src={img_src} alt="Project Logo" />
  </div>
)

const Button = ({ href, target, children }) => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={href} target={target}>
      {children}
    </a>
  </div>
)

const PromoSection = ({ children }) => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{children}</div>
    </div>
  </div>
)

const Block = ({ background, id, children, layout }) => (
  <Container padding={['bottom', 'top']} id={id} background={background}>
    <GridBlock align="center" contents={children} layout={layout} />
  </Container>
)

const Features = ({ url }) => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: `${url}img/undraw_react.svg`,
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: `${url}img/undraw_operating_system.svg`,
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
)

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{ textAlign: 'center' }}
  >
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
)

const TryOut = ({ url }) => (
  <Block id="try">
    {[
      {
        content:
          'To make your landing page more attractive, use illustrations! Check out ' +
          '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
          'The illustrations you see on this page are from unDraw.',
        image: `${url}img/undraw_code_review.svg`,
        imageAlign: 'left',
        title: 'Wonderful SVG Illustrations',
      },
    ]}
  </Block>
)

const Description = ({ url }) => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: `${url}img/undraw_note_list.svg`,
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
)

const LearnHow = ({ url }) => (
  <Block background="light">
    {[
      {
        content:
          'Each new Docusaurus project has **randomly-generated** theme colors.',
        image: `${url}img/undraw_youtube_tutorial.svg`,
        imageAlign: 'right',
        title: 'Randomly Generated Theme Colors',
      },
    ]}
  </Block>
)

const HomeSplash = ({
  config: { baseUrl, docsUrl, tagline, title },
  language = '',
}) => {
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`

  return (
    <SplashContainer>
      <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
      <div className="inner">
        <ProjectTitle tagline={tagline} title={title} />
        <PromoSection>
          <Button href="#try">Try It Out</Button>
          <Button href={docUrl('doc1.html')}>Example Link</Button>
          <Button href={docUrl('doc2.html')}>Example Link 2</Button>
        </PromoSection>
      </div>
    </SplashContainer>
  )
}

const Index = ({ config: siteConfig, language = '' }) => {
  const { baseUrl } = siteConfig

  return (
    <div>
      <HomeSplash config={siteConfig} language={language} />
      <div className="mainContainer">
        <Features url={baseUrl} />
        <FeatureCallout />
        <LearnHow url={baseUrl} />
        <TryOut url={baseUrl} />
        <Description url={baseUrl} />
      </div>
    </div>
  )
}

module.exports = Index
