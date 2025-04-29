import Film from '#models/film'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run () {
    await Film.createMany([
      {
        nama_film: 'Avengers: Endgame',
        genre: 'Action, Sci-Fi',
        usia_minimal: 13
      },
      {
        nama_film: 'The Lion King',
        genre: 'Animation, Adventure',
        usia_minimal: 7
      },
      {
        nama_film: 'Spider-Man: No Way Home',
        genre: 'Action, Adventure',
        usia_minimal: 13
      },
      {
        nama_film: 'Frozen II',
        genre: 'Animation, Adventure, Fantasy',
        usia_minimal: 6
      },
      {
        nama_film: 'Joker',
        genre: 'Crime, Drama, Thriller',
        usia_minimal: 18
      }
    ])
  }
}