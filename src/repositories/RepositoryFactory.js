import PostRepository from './PostRepository';
import UserRepository from './UserRepository';
import CommentRepository from './CommentRepository';
import PageRepository from './PageRepository';

const repositories = {
    'posts': PostRepository,
    'users': UserRepository,
    'comments': CommentRepository,
    'pages': PageRepository
}

export default {
    get: name => repositories[name]
}