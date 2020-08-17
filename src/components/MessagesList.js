import React, { Component } from 'react'
import faker from 'faker'
import { Message } from './Message';
import { WebsocketMockAdapter } from '../core/emmiter';
import { UserList } from './UserList';
import { Modal } from './Modal/Modal'


class MessageList extends Component {
    messagesEndRef = React.createRef()
    
    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }
    
    componentWillUnmount(){

    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    constructor(props) {
        super(props)
        let mock = new WebsocketMockAdapter(this.props.addMessage, 5000)
        this.state = {
            messageText: '',
            users: [...mock.getUsers(), this.props.curUser],
            isShow: false,
        }
    }

    openModalHandler = () => {
        this.setState({ isShow: true })
    }

    closeModalHandler = () => {
        this.setState({ isShow: false })
    }

    render() {
        const { messages } = this.props
        return (
            <div className='chat'>
                <Modal isShow={this.state.isShow} closeHandler={this.closeModalHandler}>
                    <UserList users={this.state.users} />
                </Modal>
                <div className='buttons-wrapper'>
                    <button onClick={this.openModalHandler}>Members</button>
                    <button onClick={(event) => {
                        localStorage.removeItem('AuthUser')
                        this.props.clearMessage()
                    }}>Log out</button>
                </div>

                <div className='message-list'>
                    <ul>
                        {messages.map(m => <Message key={m.id} message={m}
                            user={this.state.users.find(item => item.id === m.user_id)} />)}
                    </ul>
                    <div ref={this.messagesEndRef} />
                </div>
                <form
                    className='input-form'
                    onSubmit={(event) => {
                        event.preventDefault()
                        if (this.state.messageText.trim() !== '') {
                            const newMessage = {
                                id: faker.random.uuid(),
                                date: Date.now(),
                                user_id: this.props.curUser.id,
                                text: this.state.messageText
                            }
                            this.props.addMessage(newMessage, 'currentUser')
                        }
                        this.setState({ messageText: '' })
                    }}
                >
                    <input
                        placeholder='message'
                        value={this.state.messageText}
                        onChange={event => this.setState({ messageText: event.target.value })} />
                </form>
            </div>
        )
    }
}
export default MessageList

