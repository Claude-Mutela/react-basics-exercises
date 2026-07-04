interface PropsButton{
    label:string,
    variant?:'primary' | 'secondary'
}

const Button = ({label, variant='primary'}:PropsButton) => {
    return(
        <button className={variant} >{label}</button>
    )
}
export default Button