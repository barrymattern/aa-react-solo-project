'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const users = await queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {
      returning: true
    })

    const user1 = users[0].id;
    const user2 = users[1].id;
    const user3 = users[2].id;
    const user4 = users[3].id;
    const user5 = users[4].id;
    const user6 = users[5].id;
    const user7 = users[6].id;
    const user8 = users[7].id;
    const user9 = users[8].id;
    const user10 = users[9].id;

    const projects = await queryInterface.bulkInsert('Projects', [
      { name: faker.random.words(), step: '[1, 2, 3, 4, 5, 6]', userId: user1 },
      { name: faker.random.words(), step: '[1, 2, 3, 4, 5, 6]', userId: user2 },
      { name: faker.random.words(), step: '[1, 2, 3, 4, 5, 6]', userId: user3 },
      { name: faker.random.words(), step: '[1, 2, 3, 4, 5, 6]', userId: user4 },
      { name: faker.random.words(), step: '[1, 2, 3, 4, 5, 6]', userId: user5 },
      { name: faker.random.words(), step: '[1, 2, 3, 4, 5, 6]', userId: user6 },
      { name: faker.random.words(), step: '[1, 2, 3, 4, 5, 6]', userId: user7 },
      { name: faker.random.words(), step: '[1, 2, 3, 4, 5, 6]', userId: user8 },
      { name: faker.random.words(), step: '[1, 2, 3, 4, 5, 6]', userId: user9 },
      { name: faker.random.words(), step: '[1, 2, 3, 4, 5, 6]', userId: user10 },
    ], {
      returning: true
    });

    const project1 = projects[0].id;
    const project2 = projects[1].id;
    const project3 = projects[2].id;
    const project4 = projects[3].id;
    const project5 = projects[4].id;
    const project6 = projects[5].id;
    const project7 = projects[6].id;
    const project8 = projects[7].id;
    const project9 = projects[8].id;
    const project10 = projects[9].id;

    const comments = await queryInterface.bulkInsert('Comments', [
      { text: faker.lorem.paragraph(), userId: user4, projectId: project1 },
      { text: faker.lorem.paragraph(), userId: user5, projectId: project1 },
      { text: faker.lorem.paragraph(), userId: user3, projectId: project1 },
      { text: faker.lorem.paragraph(), userId: user7, projectId: project3 },
      { text: faker.lorem.paragraph(), userId: user6, projectId: project3 },
      { text: faker.lorem.paragraph(), userId: user8, projectId: project3 },
      { text: faker.lorem.paragraph(), userId: user9, projectId: project5 },
      { text: faker.lorem.paragraph(), userId: user1, projectId: project5 },
      { text: faker.lorem.paragraph(), userId: user2, projectId: project5 },
    ], {
      returning: true
    });

    const instructions = await queryInterface.bulkInsert('Instructions', [
      { text: faker.lorem.sentence(), projectId: project1 },
      { text: faker.lorem.sentence(), projectId: project1 },
      { text: faker.lorem.sentence(), projectId: project1 },
      { text: faker.lorem.sentence(), projectId: project1 },
      { text: faker.lorem.sentence(), projectId: project1 },
      { text: faker.lorem.sentence(), projectId: project1 },
      { text: faker.lorem.sentence(), projectId: project2 },
      { text: faker.lorem.sentence(), projectId: project2 },
      { text: faker.lorem.sentence(), projectId: project2 },
      { text: faker.lorem.sentence(), projectId: project2 },
      { text: faker.lorem.sentence(), projectId: project2 },
      { text: faker.lorem.sentence(), projectId: project2 },
      { text: faker.lorem.sentence(), projectId: project3 },
      { text: faker.lorem.sentence(), projectId: project3 },
      { text: faker.lorem.sentence(), projectId: project3 },
      { text: faker.lorem.sentence(), projectId: project3 },
      { text: faker.lorem.sentence(), projectId: project3 },
      { text: faker.lorem.sentence(), projectId: project3 },
      { text: faker.lorem.sentence(), projectId: project4 },
      { text: faker.lorem.sentence(), projectId: project4 },
      { text: faker.lorem.sentence(), projectId: project4 },
      { text: faker.lorem.sentence(), projectId: project4 },
      { text: faker.lorem.sentence(), projectId: project4 },
      { text: faker.lorem.sentence(), projectId: project4 },
      { text: faker.lorem.sentence(), projectId: project5 },
      { text: faker.lorem.sentence(), projectId: project5 },
      { text: faker.lorem.sentence(), projectId: project5 },
      { text: faker.lorem.sentence(), projectId: project5 },
      { text: faker.lorem.sentence(), projectId: project5 },
      { text: faker.lorem.sentence(), projectId: project5 },
      { text: faker.lorem.sentence(), projectId: project6 },
      { text: faker.lorem.sentence(), projectId: project6 },
      { text: faker.lorem.sentence(), projectId: project6 },
      { text: faker.lorem.sentence(), projectId: project6 },
      { text: faker.lorem.sentence(), projectId: project6 },
      { text: faker.lorem.sentence(), projectId: project6 },
      { text: faker.lorem.sentence(), projectId: project7 },
      { text: faker.lorem.sentence(), projectId: project7 },
      { text: faker.lorem.sentence(), projectId: project7 },
      { text: faker.lorem.sentence(), projectId: project7 },
      { text: faker.lorem.sentence(), projectId: project7 },
      { text: faker.lorem.sentence(), projectId: project7 },
      { text: faker.lorem.sentence(), projectId: project8 },
      { text: faker.lorem.sentence(), projectId: project8 },
      { text: faker.lorem.sentence(), projectId: project8 },
      { text: faker.lorem.sentence(), projectId: project8 },
      { text: faker.lorem.sentence(), projectId: project8 },
      { text: faker.lorem.sentence(), projectId: project8 },
      { text: faker.lorem.sentence(), projectId: project9 },
      { text: faker.lorem.sentence(), projectId: project9 },
      { text: faker.lorem.sentence(), projectId: project9 },
      { text: faker.lorem.sentence(), projectId: project9 },
      { text: faker.lorem.sentence(), projectId: project9 },
      { text: faker.lorem.sentence(), projectId: project9 },
      { text: faker.lorem.sentence(), projectId: project10 },
      { text: faker.lorem.sentence(), projectId: project10 },
      { text: faker.lorem.sentence(), projectId: project10 },
      { text: faker.lorem.sentence(), projectId: project10 },
      { text: faker.lorem.sentence(), projectId: project10 },
      { text: faker.lorem.sentence(), projectId: project10 },
    ], {
      returning: true
    });

    const instruction1 = instructions[0].id
    const instruction2 = instructions[1].id
    const instruction3 = instructions[2].id
    const instruction4 = instructions[3].id
    const instruction5 = instructions[4].id

    const images = await queryInterface.bulkInsert('Images', [
      { url: faker.random.image(), projectId: project1, instructionId: instruction1 },
      { url: faker.random.image(), projectId: project1, instructionId: instruction2 },
      { url: faker.random.image(), projectId: project1, instructionId: instruction4 },
      { url: faker.random.image(), projectId: project2 },
      { url: faker.random.image(), projectId: project3, instructionId: instruction4 },
      { url: faker.random.image(), projectId: project3, instructionId: instruction5 },
      { url: faker.random.image(), projectId: project4 },
      { url: faker.random.image(), projectId: project5, instructionId: instruction5 },
      { url: faker.random.image(), projectId: project6, instructionId: instruction1 },
      { url: faker.random.image(), projectId: project6 },
    ], {
      returning: true
    });

    const videos = await queryInterface.bulkInsert('Videos', [
      { url: faker.random.image(), projectId: project1, instructionId: instruction5 },
      { url: faker.random.image(), projectId: project2, instructionId: instruction1 },
      { url: faker.random.image(), projectId: project3 },
      { url: faker.random.image(), projectId: project5, instructionId: instruction2 },
      { url: faker.random.image(), projectId: project5, instructionId: instruction3 },
      { url: faker.random.image(), projectId: project6, instructionId: instruction1 },
    ], {
      returning: true
    });
  },


  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    await queryInterface.bulkDelete('Users');
    await queryInterface.bulkDelete('Projects');
    await queryInterface.bulkDelete('Comments');
    await queryInterface.bulkDelete('Instructions');
    await queryInterface.bulkDelete('Images');
    await queryInterface.bulkDelete('Videos');
  }
};
