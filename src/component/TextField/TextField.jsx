export default function TextField({placeholder, type, onChange}) {
    return(
        <input placeholder={placeholder} type={type} onChange={(val)=> onChange(val.target.value)}/>
    )
}
