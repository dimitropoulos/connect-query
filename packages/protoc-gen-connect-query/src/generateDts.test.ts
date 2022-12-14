// Copyright 2021-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { describe, expect, it } from '@jest/globals';
import { transpile } from './jest/helpers';
import packageJson from '../package.json';

describe('generateDts', () => {
  it('generates a full d.ts file', () => {
    const result = transpile('dts')(
      'proto/eliza-ElizaService_connectquery.d.ts',
    );
    expect(result).toStrictEqual([
      '// Copyright 2021-2022 Buf Technologies, Inc.',
      '//',
      '// Licensed under the Apache License, Version 2.0 (the "License");',
      '// you may not use this file except in compliance with the License.',
      '// You may obtain a copy of the License at',
      '//',
      '//      http://www.apache.org/licenses/LICENSE-2.0',
      '//',
      '// Unless required by applicable law or agreed to in writing, software',
      '// distributed under the License is distributed on an "AS IS" BASIS,',
      '// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.',
      '// See the License for the specific language governing permissions and',
      '// limitations under the License.',
      '',
      `// @generated by protoc-gen-connect-query v${packageJson.version} with parameter "target=dts"`,
      '// @generated from file proto/eliza.proto (package buf.connect.demo.eliza.v1, syntax proto3)',
      '/* eslint-disable */',
      '// @ts-nocheck',
      '',
      'import { UnaryHooks } from "@bufbuild/connect-query";',
      'import { SayRequest, SayResponse } from "./eliza_pb.js";',
      '',
      'export const say: UnaryHooks<SayRequest, SayResponse>;',
      'export const sayAgain: UnaryHooks<SayRequest, SayResponse>;',
    ]);
  });
});
