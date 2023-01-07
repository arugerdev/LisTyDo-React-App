import './ErrorMessage.css'

export default function ErrorMessage({message}) {

    return (
        <div className='error-panel'>
            <h1 className='error'>{message}</h1>
        </div>
    )

}