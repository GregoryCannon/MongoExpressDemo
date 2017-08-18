var mongoose = require('mongoose');
var Poll = require('./model');
var _ = require('lodash');

// Standard callback
const standard = (res) => {
  return (function(err, poll) {
    if (err) res.send(err);
    res.json(poll);
  });
};

// Callback with message
const message = (res, msg) => {
  return (function(err, _) {
    if (err) res.send(err);
    res.json({ message: msg });
  });
};


exports.createPoll = (req, res) => {
  const addCreationDefaults = (poll) => {
    poll.options.forEach(function(option){
      option.voteCount = 0;
      option.voters = [];
    })
    return poll;
  }

  const newPoll = new Poll(addCreationDefaults(req.body));
  newPoll.save(standard(res));
}


exports.closePoll = (req, res) => {
  Poll.findById(req.params.id, function(err, currentPoll){
    if (err) res.send(err);

    currentPoll.status = ['closed'];
    Poll.findByIdAndUpdate(req.params.id, currentPoll, {new: true}, standard(res));
  });
}


exports.deletePoll = (req, res) => {
  Poll.remove({ _id: req.params.id }, message(res, 'removed poll'));
}


exports.deleteAllPolls = (req, res) => {
  Poll.remove({}, message(res, 'removed all polls'));
}


exports.getPoll = (req, res) => {
  Poll.findById(req.params.id, standard(res));
}


exports.getAllPolls = (req, res) => {
  Poll.find({}, standard(res));
}


exports.submitVotes = (req, res) => {
  Poll.findById(req.params.id, function(err, currentPoll){
    if (err) res.send(err);

    if (currentPoll.open){
      currentPoll.options.forEach(function(option){
        const newVote = req.body.options.find(v => (v.name == option.name));

        if (newVote.voteCount){
          // Remove previous votes from voter, then and add the new one
          option.voters = _.remove(option.voters, v => v.voter_name == req.body.voter_name)
          option.voters.push({
            voter_name: req.body.voter_name,
            voteCount: newVote.voteCount
          });
          option.voteCount = _.sumBy(option.voters, 'voteCount');
        }
      });
      Poll.findByIdAndUpdate(req.params.id, currentPoll, {new: true}, standard(res));
    }

    else {
      res.json({ message: 'cannot submit votes - poll is closed.'});
    }
  });
}
