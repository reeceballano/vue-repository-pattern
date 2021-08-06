import PostRepository from './PostRepository';
import UserRepository from './UserRepository';
import CommentRepository from './CommentRepository';

const repositories = {
    'posts': PostRepository,
    'users': UserRepository,
    'comments': CommentRepository,
}

export default {
    get: name => repositories[name]
}