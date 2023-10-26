// import { test } from '@japa/runner'
// // import Route from 'start/routes'

// test.group('Password', () => {
//   //Teste para verificar se a senha é válida
//   test('should return success for valid password', async ({ client }) => {
//     const response = await client.post('/password')
//     response.assertStatus(200)
//     response.assertBodyContains({ password: 'validpassword' })
//   })

//   // Teste para verificar se a senha é inválida

//   test('should return an error for invalid password', async ({ client }) => {
//     const response = await client.post('/password')

//     response.assertStatus(200)
//     response.assertBodyContains({ password: 'invalid' })
//   })

//   //Teste para verificar se a senha é forte o suficiente

//   test('should return success for strong password', async ({ client }) => {
//     const response = await client.post('/password')

//     response.assertStatus(200)
//     response.assertBodyContains({ success: true, password: 'StrongPassword123!' })
//   })

//   //Teste para verificar se a senha é fraca

//   test('should return an error for weak password', async ({ client }) => {
//     const response = await client.post('/password')

//     response.assertStatus(400)
//     response.assertBodyContains({ error: 'Weak password' })
//   })
// })
