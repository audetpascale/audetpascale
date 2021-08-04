/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, Flex, jsx, NavLink } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header>
      <nav sx={{ backgroundColor: "muted" }}>
        <Container>
          <Flex as="nav">
            <NavLink href="/" px={4}>
              <StaticImage
                alt="utils"
                src="../images/icon.png"
                sx={{ my: -3 }}
                width={48}
                height={48}
              />
              Accueil
            </NavLink>
            <NavLink href="https://tech-n-app.audetpascale.com/" px={4}>
              Tech 'n' App
            </NavLink>
          </Flex>
        </Container>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {};
