import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Zach Beecher</GradientText> 👋
        </>
      }
      description={
        <>
          Zach Beecher is a Full Stack Developer with experience in developing
          websites for Alaska Airlines e-commerce team, Cirkled In, and
          ChalkDoc. Software used: Node.js, Java, Python, MySQL, Spring, API,
          Junit, Maven, HTML, CSS, Javascript, React.js, Angular, Bootstrap,
          jQuery, and Python web scraping. Zach has also mentored students at
          PromineoTech coding bootcamp.Most recently he built a multiplayer
          blackjack game with React, Node.js, deck of card API, and Mongodb, and
          a Trello clone using next.js, react, tailwindCSS. Proficient in
          version control tools such as Git, GitHub, and has experience working
          with cloud platforms such as AWS and Heroku. He is available for
          website development projects, contact methods:{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.github.com/ziggity"
            target="_blank"
          >
            github.com/ziggity.
          </a>{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.linkedin.com/in/zachbeecher"
            target="_blank"
          >
            linkedin.com/in/zachbeecher{' '}
          </a>
          <a className="text-cyan-400 hover:underline" href="/">
            zachbeecher@gmail.com{' '}
          </a>{' '}
          (206)-294-1485
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatarsvg.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
