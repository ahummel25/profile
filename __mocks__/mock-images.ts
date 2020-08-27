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
  'oracleImg'
];

const mockImagesResponse: IImages = {};

imgTypes.forEach((imgType: string): object => {
  const imgText = imgType.replace('Img', '');

  return (mockImagesResponse[imgType] = {
    childImageSharp: {
      fluid: {
        aspectRatio: 1.5664414414414414,
        base64:
          'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEj',
        src: `/static/a68ec0a3134b8610c476cd0fa3c0cf7e/2f1b1/${imgText}.jpg`,
        srcSet: `/static/a68ec0a3134b8610c476cd0fa3c0cf7e/fd013/${imgText}.jpg 200w,
						  /static/a68ec0a3134b8610c476cd0fa3c0cf7e/25252/${imgText}.jpg 400w,
						  /static/a68ec0a3134b8610c476cd0fa3c0cf7e/2f1b1/${imgText}.jpg 800w,
						  /static/a68ec0a3134b8610c476cd0fa3c0cf7e/0ff54/${imgText}.jpg 1200w,
						  /static/a68ec0a3134b8610c476cd0fa3c0cf7e/6d185/${imgText}.jpg 1391w`,
        sizes: '(max-width: 800px) 100vw, 800px'
      }
    }
  });
});

export default mockImagesResponse;
