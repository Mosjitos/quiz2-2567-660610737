// You can define interfaces for all React components here.
// Do not forget to export properly.

interface PostOwnerProps{
    name : string;
    img : string;
    like : string;
}   
export type {PostOwnerProps};

interface CommentProps{
    userImagePath : string;
    username : string;
    commentText : string;
    likeNum : number;
    replies : CommentProps[];
}
export type  {CommentProps};

interface ReplyProps {
    userImagePath : string;
    username : string;
    commentText : string;
    likeNum : number;
    replies : number;
}

export type { ReplyProps };
