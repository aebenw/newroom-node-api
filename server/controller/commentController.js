import { Comment } from '../models';

export const postComment = (req, res) => {
    Comment.create({content: req.body.content, user: req.body.user}).then(doc => {
      res.status(200).send(doc)
    }, e => res.status(400).send(e))
};

export const showComment = async (req, res) => {
  Comment.findById(req.params.id)
  .populate({path: 'user', select: 'name'})
  .exec()
  .then(doc => {
      res.status(200).send(doc)
  })

}
