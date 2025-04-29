import Route from '@adonisjs/core/services/router'
import FilmController from '#controllers/films_controller'

// Menampilkan semua film
Route.get('/films', [FilmController, 'index'])

// Menampilkan satu film berdasarkan ID
Route.get('/films/:id', [FilmController, 'show'])

// Update data film berdasarkan ID
Route.put('/films/:id', [FilmController, 'update'])

// Menghapus film berdasarkan ID
Route.delete('/films/:id', [FilmController, 'destroy'])