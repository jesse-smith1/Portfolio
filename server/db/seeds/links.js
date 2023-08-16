/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('links').del()
  await knex('links').insert([
    {
      id: 1,
      image: '../client/images/Github.png',
      link: 'https://github.com/jesse-smith1',
    },
    {
      id: 2,
      image: '../client/images/Linkedin.png',
      link: 'www.linkedin.com/in/jesse-ta-smith',
    },
  ])
}
