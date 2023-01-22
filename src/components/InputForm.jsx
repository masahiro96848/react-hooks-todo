export const InputForm = (props) => {
    const { inputValue, placeholder, handleChangeValue } = props

    return (
        <input
            className="input-area"
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChangeValue}
        />
    )
}
