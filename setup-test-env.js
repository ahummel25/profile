import { createSerializer, matchers } from 'jest-emotion';
import emotion from '@emotion/react';
import '@testing-library/jest-dom';

expect.addSnapshotSerializer(createSerializer(emotion));
expect.extend(matchers);
