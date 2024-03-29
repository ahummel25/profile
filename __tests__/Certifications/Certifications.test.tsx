import React from 'react';
import { create } from 'react-test-renderer';
import { GatsbyImage } from 'gatsby-plugin-image';

import Certifications from '../../src/components/Certifications';

describe('Certifications', () => {
  it('renders correctly', () => {
    const tree = create(<Certifications />);

    expect(tree).toBeDefined();
  });

  it('renders and makes assertions about child elements', () => {
    const tree = create(<Certifications />);
    const root = tree.root;

    const a = root.findAllByType('a');
    expect(a.length).toBe(1);

    const img = root.findAllByType(GatsbyImage);
    expect(img.length).toBe(1);
    expect(img[0].props.alt).toBe('AWS Logo');

    const imgPTag = a[0].findByType('p');
    expect(imgPTag.props.children).toBe('AWS Certified Cloud Practitioner');

    const divs = root.findAllByType('div');
    expect(divs[4].props.className.includes('col s4 m2')).toBe(true);
  });
});
