/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */

import qs from '../src/query-stringify'

test('it should return undefined when input is empty', () => {
  expect(qs()).toBe(undefined)
})

test('it should return base path', () => {
  expect(qs({
    basePath: '/api/test'
  })).toBe('/api/test')
})

test('it should return base path when query is null', () => {
  expect(qs({
    basePath: '/api/test'
  })).toBe('/api/test')
})

test('it should return entire path with number query', () => {
  expect(qs({
    basePath: '/api/test',
    query: {
      user: 1234
    }
  })).toBe('/api/test?user=1234&limit=25&skip=0')
})

test('it should return entire path with number array query', () => {
  expect(qs({
    basePath: '/api/test',
    query: {
      user: [1234, 3456]
    }
  })).toBe('/api/test?user=1234,3456&limit=25&skip=0')
})

test('it should return entire path with complex query', () => {
  expect(qs({
    basePath: '/api/test',
    query: {
      user: [1234, 3456],
      business: '3333333',
      skip: 10,
      limit: 333
    },
    ignore: ['user']
  })).toBe('/api/test?business=3333333&skip=10&limit=333')
})

test('it should return url', () => {
  expect(qs({
    basePath: '/api/test',
    query: {
      user: [1234, 3456],
      business: '3333333'
    },
    ignore: ['user'],
    url: '/api/anotherTest'
  })).toBe('/api/anotherTest')
})
