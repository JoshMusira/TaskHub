import './inputfield.css'

const InputField = () => {
    return (
        <form className='input'>
            <input type="text" className='input__box ' placeholder='Enter a task...' />
            <button type="submit" className="input_submit">Go</button>
        </form>

    )
}

export default InputField