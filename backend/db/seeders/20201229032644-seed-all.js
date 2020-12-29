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
      { name: faker.random.words(), step: '1', userId: user1 },
      { name: faker.random.words(), step: '2', userId: user1 },
      { name: faker.random.words(), step: '3', userId: user1 },
      { name: faker.random.words(), step: '4', userId: user1 },
      { name: faker.random.words(), step: '5', userId: user1 },
      { name: faker.random.words(), step: '6', userId: user1 },
      { name: faker.random.words(), step: '7', userId: user1 },
      { name: faker.random.words(), step: '8', userId: user1 },
      { name: faker.random.words(), step: '9', userId: user1 },
      { name: faker.random.words(), step: '10', userId: user1 },
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
      { text: faker.lorem.paragraph(), userId: user7, projectId: project3 },
      { text: faker.lorem.paragraph(), userId: user9, projectId: project5 },
    ], {
      returning: true
    });

    const instructions = await queryInterface.bulkInsert('Instructions', [
      { text: faker.lorem.sentence(), projectId: project1 },
      { text: faker.lorem.sentence(), projectId: project1 },
      { text: faker.lorem.sentence(), projectId: project1 },
      { text: faker.lorem.sentence(), projectId: project2 },
      { text: faker.lorem.sentence(), projectId: project2 },
      { text: faker.lorem.sentence(), projectId: project2 },
      { text: faker.lorem.sentence(), projectId: project3 },
      { text: faker.lorem.sentence(), projectId: project3 },
      { text: faker.lorem.sentence(), projectId: project3 },
      { text: faker.lorem.sentence(), projectId: project4 },
      { text: faker.lorem.sentence(), projectId: project4 },
      { text: faker.lorem.sentence(), projectId: project4 },
      { text: faker.lorem.sentence(), projectId: project5 },
      { text: faker.lorem.sentence(), projectId: project5 },
      { text: faker.lorem.sentence(), projectId: project5 },
      { text: faker.lorem.sentence(), projectId: project6 },
      { text: faker.lorem.sentence(), projectId: project6 },
      { text: faker.lorem.sentence(), projectId: project6 },
      { text: faker.lorem.sentence(), projectId: project7 },
      { text: faker.lorem.sentence(), projectId: project7 },
      { text: faker.lorem.sentence(), projectId: project7 },
      { text: faker.lorem.sentence(), projectId: project8 },
      { text: faker.lorem.sentence(), projectId: project8 },
      { text: faker.lorem.sentence(), projectId: project8 },
      { text: faker.lorem.sentence(), projectId: project9 },
      { text: faker.lorem.sentence(), projectId: project9 },
      { text: faker.lorem.sentence(), projectId: project9 },
      { text: faker.lorem.sentence(), projectId: project10 },
      { text: faker.lorem.sentence(), projectId: project10 },
      { text: faker.lorem.sentence(), projectId: project10 },
    ], {
      returning: true
    });

    const instruction1 = instructions[1].id
    const instruction2 = instructions[4].id
    const instruction3 = instructions[7].id
    const instruction4 = instructions[12].id
    const instruction5 = instructions[15].id
    const instruction6 = instructions[22].id

    const instruction7 = instructions[2].id
    const instruction8 = instructions[5].id
    const instruction9 = instructions[8].id
    const instruction10 = instructions[14].id
    const instruction11 = instructions[17].id
    const instruction12 = instructions[20].id

    const images = await queryInterface.bulkInsert('Images', [
      { url: faker.image.imageUrl(), instructionId: instruction1 },
      { url: faker.image.imageUrl(), instructionId: instruction2 },
      { url: faker.image.imageUrl(), instructionId: instruction3 },
      { url: faker.image.imageUrl(), instructionId: instruction4 },
      { url: faker.image.imageUrl(), instructionId: instruction5 },
      { url: faker.image.imageUrl(), instructionId: instruction6 },
    ], {
      returning: true
    });

    const videos = await queryInterface.bulkInsert('Videos', [
      { url: faker.image.imageUrl(), instructionId: instruction7 },
      { url: faker.image.imageUrl(), instructionId: instruction8 },
      { url: faker.image.imageUrl(), instructionId: instruction9 },
      { url: faker.image.imageUrl(), instructionId: instruction10 },
      { url: faker.image.imageUrl(), instructionId: instruction11 },
      { url: faker.image.imageUrl(), instructionId: instruction12 },
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
