const React = require('react')

const Footer = ({
  config: {
    baseUrl,
    docsUrl,
    repoUrl,
    copyright,
    footerIcon,
    title,
    organizationName,
    projectName,
    twitterUsername,
    facebookAppId,
    url,
  },
}) => {
  const docUrl = (doc) => {
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    return `${baseUrl}${docsPart}${doc}`
  }

  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <a href={baseUrl} className="nav-home">
          {footerIcon && (
            <img src={baseUrl + footerIcon} alt={title} width="80" />
          )}
        </a>

        <div>
          <h5>Docs</h5>
          <a href={docUrl('doc1.html')}>
            Getting Started (or other categories)
          </a>
          <a href={docUrl('doc2.html')}>Guides (or other categories)</a>
          <a href={docUrl('doc3.html')}>API Reference (or other categories)</a>
        </div>

        <div>
          <h5>Community</h5>

          <a
            href="https://shabados.slack.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Slack
          </a>

          <a
            href="https://twitter.com/shabad_os"
            target="_blank"
            rel="noreferrer noopener"
          >
            Twitter
          </a>

          <a
            href="https://www.instagram.com/shabad_os/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/15166196059"
            target="_blank"
            rel="noreferrer noopener"
          >
            WhatsApp
          </a>
        </div>

        <div>
          <h5>More</h5>
          <a href={`${baseUrl}blog`}>Blog</a>

          <a href={repoUrl} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>

          <a
            className="github-button"
            href={repoUrl}
            data-icon="octicon-star"
            data-count-href={`/${organizationName}/${projectName}/stargazers`}
            data-show-count="true"
            data-count-aria-label="# stargazers on GitHub"
            aria-label="Star this project on GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            Star
          </a>

          {twitterUsername && (
            <div className="social">
              <a
                href={`https://twitter.com/${twitterUsername}`}
                className="twitter-follow-button"
              >
                Follow @{twitterUsername}
              </a>
            </div>
          )}

          {facebookAppId && (
            <div className="social">
              <div
                className="fb-like"
                data-href={url}
                data-colorscheme="dark"
                data-layout="standard"
                data-share="true"
                data-width="225"
                data-show-faces="false"
              />
            </div>
          )}
        </div>
      </section>

      <section className="copyright">{copyright}</section>
    </footer>
  )
}

module.exports = Footer
