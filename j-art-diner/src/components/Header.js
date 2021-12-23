/** @jsx jsx */
// noinspection ES6UnusedImports
import {Container, Flex, jsx, NavLink} from "theme-ui";
import {StaticImage} from "gatsby-plugin-image";

const Header = ({ items }) => {
  return (
    <header>
      <nav sx={{ backgroundColor: "muted" }}>
        <Container>
          <Flex as="nav">
            <NavLink href="/" px={2}>
              <StaticImage
                alt="utils"
                src="../images/icon.png"
                sx={{ my: -3 }}
                width={48}
                height={48}
              />
              Accueil
            </NavLink>
            {items.map(({ node: post }) => (
              <NavLink key={post.id} href={post.fields.slug} px={2}>
                {post.frontmatter.title}
              </NavLink>
            ))}
          </Flex>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
