import React from 'react';
import './ChatRoom.scss';
import Header from '../../components/Element/Header/Header';
import { chatData } from '../../libs/dummy';
import ChatBubble from './components/ChatBubble';

function ChatRoom() {
  return (
    <>
      <Header text={chatData.userName} className="fixed-header">
        {/* user name 누르면 이동하게 하기 */}
        <span className="a11y-hidden">님과의 채팅방</span>
      </Header>

      <main>
        <section className="chat-sheet">
          {chatData.contents.map(item => (
            <ChatBubble data={item} />
          ))}
        </section>

        <section className="chat-input">
          <h2 className="a11y-hidden">채팅입력창</h2>
          <label htmlFor="inputMessage" className="label-input-message">
            <span className="a11y-hidden">메세지 입력</span>
            <input type="text" id="inputMessage" placeholder="댓글 입력하기..." />
          </label>

          <label htmlFor="inputImg" role="tabpanel" className="label-input-img" tabIndex={0}>
            <span className="a11y-hidden">이미지 첨부 버튼</span>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#C4C4C4" />
              <path
                d="M24.4167 9.75H11.5833C10.5708 9.75 9.75 10.5708 9.75 11.5833V24.4167C9.75 25.4292 10.5708 26.25 11.5833 26.25H24.4167C25.4292 26.25 26.25 25.4292 26.25 24.4167V11.5833C26.25 10.5708 25.4292 9.75 24.4167 9.75Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.7915 16.1665C15.5509 16.1665 16.1665 15.5509 16.1665 14.7915C16.1665 14.0321 15.5509 13.4165 14.7915 13.4165C14.0321 13.4165 13.4165 14.0321 13.4165 14.7915C13.4165 15.5509 14.0321 16.1665 14.7915 16.1665Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M26.2502 20.7498L21.6668 16.1665L11.5835 26.2498" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input id="inputImg" type="file" />
          </label>
          <button type="submit" className="btn-send" disabled>
            <span className="a11y-hidden">메세지</span>전송
          </button>
        </section>

        {/* 모달창 */}
        {/* <article className="post-modal-background">
          <h2 className="a11y-hidden">모달창</h2>
          <div className="post-modal-content">
            <div className="post-modal-bar" />
            <p className="a11y-hidden">채팅방 나가기</p>
            <div className="modal-content">
              <button type="button" className="modal-description">
                채팅방 나가기
              </button>
            </div>
          </div>
        </article> */}
      </main>
    </>
  );
}

export default ChatRoom;
