import React from 'react';
import renderer from 'react-test-renderer';
import Img from 'gatsby-image';

import Certifications from '../../src/components/Certifications';

describe('Certifications', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Certifications />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders and makes assertions about child elements', () => {
    const tree = renderer.create(<Certifications />);
    const root = tree.root;

    const a = root.findAllByType('a');
    expect(a.length).toBe(1);

    const img = a[0].findAllByType(Img);
    expect(img.length).toBe(1);
    expect(img[0].props.alt).toBe('AWS Logo');

    const imgPTag = a[0].findByType('p');
    expect(imgPTag.props.children).toBe('AWS Certified Cloud Practitioner');

    const divs = root.findAllByType('div');
    expect(divs[4].props.className.includes('col s4 m2')).toBe(true);
  });
});
