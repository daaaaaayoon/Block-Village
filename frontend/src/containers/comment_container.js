import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentForm from '../components/comment_form/comment_form';
import * as AnswerAction from '../modules/answer';

const CommentContainer = ({ userInfo, type, selectedId }) => {
    // store에 있는 state와 dispatch 가져오는 작업
    const commentList = useSelector(state => state.answer.commentList);
    const dispatch = useDispatch();

    useEffect(() => {
        if(type === 'answer') getAnswerCommentList();
    }, [selectedId]);

    /*
    api 요청 보내는 함수
    */
    // 현재 선택한 답안의 댓글 조회
    const getAnswerCommentList = async () => {
        try{
            await dispatch(AnswerAction.getAnswerCommentList({ answerId: selectedId }))
        }catch(e) {
            console.log(e);
        }
    };    

    // 현재 선택한 답안의 댓글 제작
    const setAnswerComment = async (comment) => {
        try{
            await dispatch(AnswerAction.setAnswerComment({ 
                email: userInfo, answerId: selectedId, comment,
            }));
            getAnswerCommentList();
        }catch(e) {
            console.log(e);
        }
    }; 

    // 현재 선택한 답안의 댓글 수정
    const modifyAnswerComment = async (id, comment) => {
        try{
            await dispatch(AnswerAction.modifyAnswerComment({ 
                email: userInfo, commentId: id, comment,
            }));
            getAnswerCommentList();
        }catch(e) {
            console.log(e);
        }
    }; 

    // 현재 선택한 답안의 댓글 삭제
    const deleteAnswerComment = async (id) => {
        try{
            await dispatch(AnswerAction.deleteAnswerComment({ 
                email: userInfo, commentId: id,
            }));
            getAnswerCommentList();
        }catch(e) {
            console.log(e);
        }
    }; 

    return (<>
        { type === 'answer' && 
            <CommentForm
                userInfo={userInfo}
                commentList={commentList}
                setComment={setAnswerComment}
                modifyComment={modifyAnswerComment}
                deleteComment={deleteAnswerComment}/>
        }
    </>);
}

export default CommentContainer;