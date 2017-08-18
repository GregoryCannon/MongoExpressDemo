var express = require('express');
var router = express.Router();
var poll = require('./controller');

router.route('/')
	.get(poll.getAllPolls)
	.post(poll.createPoll)
	.delete(poll.deleteAllPolls);

router.route('/:id')
	.get(poll.getPoll)
	.put(poll.submitVotes)
	.lock(poll.closePoll)
	.delete(poll.deletePoll);

module.exports = router;
