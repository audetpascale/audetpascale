/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, jsx, Text } from "theme-ui";
import PropTypes from "prop-types";

const Footer = ({ author, title, image, year }) => {
  return (
    <footer sx={{ backgroundColor: "muted" }}>
      <Container>
        <Text>
          © {year} - {new Date().getFullYear()} {author}.
          <span sx={{ float: "right" }}>
            {image}
            {title} est propulsé par{" "}
            <a href="https://www.gatsbyjs.com/">Gatsby</a> et{" "}
            <a href="https://www.netlify.com/">Netlify</a>.
          </span>
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.any,
  year: PropTypes.string,
};
