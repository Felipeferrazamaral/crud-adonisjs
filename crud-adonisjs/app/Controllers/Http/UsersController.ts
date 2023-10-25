import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const user = await User.create(body)
    return response.status(201).json({ message: 'User criado com sucesso!', data: user })

    
  }

  public async index() {
    const users = await User.all()
    return {
      data: users,
    }
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    return {
      data: user,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()

    return {
      message: 'User excluido com sucesso!',
      data: user,
    }
  }
}
