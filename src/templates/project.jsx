import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from '../layouts';
import { TagsBlock, Header, SEO } from '../components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/prism';

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

const CarouselContainer = styled.div`
  margin: 0 auto 1rem auto;
  max-width: 600px;
  border: 1px solid black;
`;

const ActionLink = styled.a`
  font-size: 1.1rem;
  font-weight: 700;
`;

const Project = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { html, frontmatter, excerpt } = data.markdownRemark;
  const {
    date,
    title,
    github,
    download,
    tags,
    path,
    description,
    screenshots,
  } = frontmatter;
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      <Header title={title} date={date} cover={image} />
      <Container>
        <CarouselContainer>
          {/*showThumbs has to be false for the carouse to work with Gatsby images*/}
          <Carousel
            showThumbs={false}
            emulateTouch={true}
            useKeyboardArrows={true}
            centerMode={false}
            centerSlidePercentage={85}
          >
            {screenshots.map(sh => {
              return (
                <div key={sh.id}>
                  <Img fluid={sh.childImageSharp.fluid} />
                  {/*<p className="legend">Screenshot {sh.index}</p>*/}
                </div>
              );
            })}
          </Carousel>
        </CarouselContainer>
        <Content input={html} />
        <TagsBlock list={tags || []} />
        {github ? <ActionLink href={github}>View on GitHub</ActionLink> : ''}
        {download ? <ActionLink href={download}>Download</ActionLink> : ''}
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Project;

Project.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        subtitle
        github
        download
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 95 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
        screenshots {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
