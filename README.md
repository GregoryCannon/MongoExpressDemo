# MongoExpressDemo

A sample React/Express/Mongo app, that serves both client and the server routes.


Server endpoints:

## /polls

  .get

    (Not in client)
    Gets an array of all poll data.

  .post

    Creates a new poll. Check the model for a full schema, but the standard input
    data will be in the form of:

      {
        name: String
        options: [
          { name: String }
        ]
      }

  .delete

    (Not in client)
    Deletes all polls.


## /polls/id

  .get

    Gets JSON data for a poll, in the form:

      {
        _id: String
        name: String
        __v : Int    (mongo version info)
        status: ["not started"] or ["open"] or ["closed"]
        created_date: String
        options: [{
            name: String
            voteCount: Int
            _id: Int
            voters: [{
                voter_name: String
                voteCount: Int
            }]
        }]
      }

  .put

    Sends a user's votes, in the form:

      {
        name: String
        voter_name: String
        options: [{
          name: String
          voteCount: Int
        }]
      }

  .lock

    Closes a poll.

  .delete

    Deletes a poll.
