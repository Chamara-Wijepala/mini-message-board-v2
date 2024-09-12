const getAllMessages = `SELECT * FROM messages`;

const insertMessage = `
  INSERT INTO messages (username, message_body, date_added) VALUES ($1, $2, $3)
`;

module.exports = {
	getAllMessages,
	insertMessage,
};
