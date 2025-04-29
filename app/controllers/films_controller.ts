import type { HttpContext } from '@adonisjs/core/http'
import Film from '#models/film'

export default class FilmController {
  // Menampilkan semua film
  async index({ response }: HttpContext) {
    const films = await Film.all()
    return response.ok({ data: films })
  }

  // Menampilkan satu film berdasarkan ID
  async show({ params, response }: HttpContext) {
    const film = await Film.find(params.id)
    if (!film) {
      return response.notFound({ message: 'Film tidak ditemukan' })
    }
    return response.ok(film)
  }

  // Update data film berdasarkan ID
  async update({ params, request, response }: HttpContext) {
    const film = await Film.find(params.id)
    if (!film) return response.notFound({ message: 'Film tidak ditemukan' })

    const data = request.only(['nama_film', 'genre', 'usia_minimal'])
    film.merge(data)
    await film.save()

    return response.ok(film)
  }

  // Menghapus film berdasarkan ID
  async destroy({ params, response }: HttpContext) {
    const film = await Film.find(params.id)
    if (!film) return response.notFound({ message: 'Film tidak ditemukan' })

    await film.delete()
    return response.ok({ message: 'Film berhasil dihapus' })
  }
}