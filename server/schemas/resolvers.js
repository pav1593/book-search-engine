const { User } = require('../models');

const resolvers = {
  Query: {
    me: async (parent,{user=null,id,username}) => {
      return await User.findOne({
        $or: [{ _id: user ? _id : id }, { username: username }],
      });
    },
  },

  Mutation: {
    login: async (parent, args) => {
  
    },
    addUser: async (parent, {username,email,password}) => {

    },
    saveBook: async (parent, {input}) => {

    },
    removeBook: async (parent, {bookId}) => {
 
    },

  },
};

module.exports = resolvers;
