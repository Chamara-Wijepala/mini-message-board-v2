const getAllMessages = `SELECT * FROM messages`;

const insertMessage = `
  INSERT INTO messages (username, text, date) VALUES ($1, $2, $3)
`;

module.exports = {
	getAllMessages,
	insertMessage,
};
