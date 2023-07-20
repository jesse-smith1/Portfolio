/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('links').del()
  await knex('links').insert([
    { id: 1, image: '../Public/images/Github.png' },
    { id: 2, image: '../Public/images/Linkedin.png' },
  ])
}
