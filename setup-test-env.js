import { createSerializer, matchers } from 'jest-emotion';
import emotion from '@emotion/core';
import '@testing-library/jest-dom';

expect.addSnapshotSerializer(createSerializer(emotion));
expect.extend(matchers);
