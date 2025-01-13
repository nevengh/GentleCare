import'./ModalPopUp.css'
interface ModalProps {
    message: string;
    onClose: () => void;
  }
const ModalPopUp: React.FC<ModalProps> = ({ message, onClose })=> {
  return (
    <div className='ModalPopUp'>
        <div className="popup_contnt">
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default ModalPopUp