# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JavaScript course repository containing lecture materials and lab assignments. The content is in Korean.

## Repository Structure

- `lecture/` - Lecture examples covering JavaScript concepts (classes, `this` keyword, lexical scope, DOM manipulation, type casting)
- `Lab/` - Lab assignments for students (GPA calculator, calculator exercises)
- `tests/` - Test/scratch files (git-ignored)

## Running Code

**JavaScript files (.js):** Run with Node.js
```bash
node lecture/class_basic.js
```

**HTML files (.html):** Open directly in a browser or use Live Server extension in VSCode

**VSCode Debugger:** Use "Run Current File" launch configuration (F5) to debug the currently open JS file with Node.js

## Configuration

- Module system: CommonJS (`"type": "commonjs"`)
- ESLint enabled for JavaScript validation
