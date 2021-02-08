const app = require('../src/app');
const { API_TOKEN } = require('../src/config');
const expect = require('chai').expect;
const request = require('supertest');

describe('Get guides', () => {
  it('GET / responds with 200', () => {
    return supertest(app)
      .get('/')
      .set({ 'Authorization': `Bearer ${API_TOKEN}` })
      .expect(200)
  })
})

describe('Post guide', () => {
  it('POST / responds with 201', () => {
    return supertest(app)
      .post('/')
      .set({ 'Authorization': `Bearer ${API_TOKEN}` })
      .query({id: '123', title: 'TITLE_TEST', text: 'TEXT_TEST', author: 'AUTHOR_TEST', url:'', key:''})
      .expect(201)
  })
})

describe('Edit Guide', () => {
  it('PATCH / responds with 201', () => {
    return supertest(app)
      .patch('/123')
      .set({ 'Authorization': `Bearer ${API_TOKEN}` })
      .query({id: '123', title: 'TITLE_TEST', text: 'TEXT_TEST', author: 'AUTHOR_TEST', url:'', key:''})
      .expect(201)
  })
})

describe('Delete guide', () => {
  it('DELETE / responds with 204', () => {
    return supertest(app)
      .delete('/123')
      .set({ 'Authorization': `Bearer ${API_TOKEN}` })
      .query({id: '123'})
      .expect(204)
  })
})