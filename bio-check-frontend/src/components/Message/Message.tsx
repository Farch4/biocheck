import './Message.css'

export const Message = ({ message, type }: { message: string; type: string }) => {
    return (
    <div className={`message ${type}`}>
        <p>{message}</p>
    </div>
  )
}