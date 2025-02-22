type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const callBackHandler = () => {
        props.callBack()
    }

    return (
        <button id={'hw04-button'} onClick={callBackHandler}>
            {props.name}
        </button>
    )
}