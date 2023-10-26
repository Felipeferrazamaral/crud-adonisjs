import { test } from '@japa/runner'

test.group('User', () => {
  // Teste para obter um usuário específico
  test('should get a specific user', async ({ client }) => {
    const response = await client.get('/api/users/1')

    response.assertStatus(200)
    response.assertBodyContains({ id: 1, name: 'Felipiiouu' })
  })
  // Teste para atualizar um usuário existente
  test('should update an existing user', async ({ client }) => {
    const response = await client.put('/api/users/1')

    response.assertStatus(200)
    response.assertBodyContains({ id: 1, name: 'Updated Name' })
  })

  //Teste para excluir um usuário
  test('should delete a user', async ({ client }) => {
    const response = await client.delete('/api/users/1')

    response.assertStatus(200)
  })

  //Teste para lidar com erros ao criar um usuário sem fornecer informações obrigatórias

  test('should return an error when creating a user without required information', async ({
    client,
  }) => {
    const response = await client.post('/api/users')

    response.assertStatus(400)
    response.assertBodyContains({ error: 'Missing required information' })
  })

  //Teste para lidar com erros ao tentar obter um usuário inexistente:

  test('should return an error when getting a non-existent user', async ({ client }) => {
    const response = await client.get('/api/users/999')

    response.assertStatus(404)
    response.assertBodyContains({ error: 'User not found' })
  })
})

// import { test } from '@japa/runner'
// import supertest from 'supertest'
// import UsersController from 'App/Controllers/Http/UsersController'

// test.group('UsersController', () => {
//   test('GET /users', async (assert) => {
//     const response = await supertest(UsersController.index).get('/users')

//     assert.equal(response.status, 200)
//     assert.exists(response.body.data)
//   })

//   test('POST /users', async (assert) => {
//     const response = await supertest(UsersController.store)
//       .post('/api/users')
//       .send({ name: 'John Doe' })

//     assert.equal(response.status, 201)
//     assert.exists(response.body.data)
//     assert.equal(response.body.message, 'User criado com sucesso!')
//   })

//   test('GET /users/:id', async (assert) => {
//     const response = await supertest(UsersController.show).get('/api/users/1')

//     assert.equal(response.status, 200)
//     assert.exists(response.body.data)
//     assert.equal(response.body.message, 'User encontrado com sucesso!')
//   })

//   test('PUT /users/:id', async (assert) => {
//     const response = await supertest(UsersController.update)
//       .put('/api/users/1')
//       .send({ name: 'John Smith' })

//     assert.equal(response.status, 200)
//     assert.exists(response.body.data)
//     assert.equal(response.body.message, 'User atualizado com sucesso!')
//   })

//   test('DELETE /users/:id', async (assert) => {
//     const response = await supertest(UsersController.destroy).delete('/api/users/1')

//     assert.equal(response.status, 200)
//     assert.exists(response.body.data)
//     assert.equal(response.body.message, 'User excluído com sucesso!')
//   })
// })
