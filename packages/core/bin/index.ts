#!/usr/bin/env node

import { join } from '../index'

const argv = process.argv.slice(2)

console.log(join(argv))
