// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import User from 'App/Models/User'

// export default class UsersController {
//   public async store({ request, response }: HttpContextContract) {
//     const body = request.body()
//     const user = await User.create(body)
//     return response.status(201).json({ message: 'User criado com sucesso!', data: user })

//   }

//   public async index() {
//     const users = await User.all()
//     return {
//       data: users,
//     }
//   }

//   public async show({ params }: HttpContextContract) {
//     const user = await User.findOrFail(params.id)

//     return {
//       data: user,
//     }
//   }

//   public async destroy({ params }: HttpContextContract) {
//     const user = await User.findOrFail(params.id)
//     await user.delete()

//     return {
//       message: 'User excluido com sucesso!',
//       data: user,
//     }
//   }
// }

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.all()
    return {
      data: users,
      status: 200,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const { name } = request.body()

    if (!name) {
      return response.status(400).json({
        error: 'Missing required information',
      })
    }

    try {
      const user = await User.create({ name })

      return response.status(201).json({
        data: user,
        message: 'User criado com sucesso!',
      })
    } catch (error) {
      return response.status(500).json({
        error: 'Failed to create user',
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params

    try {
      const user = await User.findOrFail(id)

      return response.status(200).json({
        data: user,
        message: 'User encontrado com sucesso!',
      })
    } catch (error) {
      return response.status(404).json({
        error: 'User not found',
      })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { name } = request.body()

    try {
      const user = await User.findOrFail(id)
      user.name = name
      await user.save()

      return response.status(200).json({
        data: user,
        message: 'User atualizado com sucesso!',
      })
    } catch (error) {
      return response.status(404).json({
        error: 'User not found',
      })
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const { id } = params

    try {
      const user = await User.findOrFail(id)
      await user.delete()

      return {
        success: true,
        data: user,
        message: 'User excluído com sucesso!',
        status: 200,
      }
    } catch (error) {
      return {
        error: 'User not found',
        status: 404,
      }
    }
  }
}
