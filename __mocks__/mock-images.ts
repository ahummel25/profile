import { IImages } from '../src/interfaces';

const imgTypes = [
  'profileImg',
  'awsImg',
  'i11Img',
  'juristatImg',
  'wwtImg',
  'htmlImg',
  'reactImg',
  'cssImg',
  'sassImg',
  'bootstrapImg',
  'materializeImg',
  'styCompImg',
  'tsImg',
  'jqueryImg',
  'nodeImg',
  'pythonImg',
  'goImg',
  'javaImg',
  'mysqlImg',
  'oracleImg',
  'meImg'
];

const mockImagesResponse: IImages = {};

imgTypes.forEach(
  (imgType: string): object =>
    (mockImagesResponse[imgType] = {
      childImageSharp: {
        gatsbyImageData: {
          layout: 'constrained',
          width: 100,
          height: 100,
          images: {
            fallback: {
              src: 'some/mock/img.png'
            }
          }
        }
      }
    })
);

export default mockImagesResponse;
