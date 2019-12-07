import { graphql } from "gatsby";

export const getProfileImage = graphql`
  query {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
