'use client'

import { useState } from 'react'
// 리액트 방식으로 새로고침없이 state와 ajax요청(fetch)
import './comment.css'

// 컴포넌트는 대문자로 시작
export default function Comment(){

    const [comment, setComment] = useState('');     // input창에 입력한 내용
    const [commentList, setCommentList] = useState([]);     // 보여줄 댓글들



    return(
        <div className="comment-container">
            <hr/>
            {/* onChange : 무언가 입력될때마다 발동되는 함수 */}
            <input onChange={(e)=>{setComment(e.target.value)}} id='comment-input'/>
            {/* 버튼이 클릭되면 /api/comment/new 에 저장해달라고 요청을 보내자 */}
            <button onClick={()=>{
                document.getElementById('comment-input').value = '';
                
            }}>댓글 입력</button>
        </div>
    )
}
