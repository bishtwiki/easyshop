
import './forminput.style.scss'
const FormInput=({handlerchange,label,...otherprops})=>{

    return (
    <>
    <div className="group">
    <input className="form-input" onChange={handlerchange} {...otherprops}/>
    {label ?
    (<label className={`${otherprops.value.length ? 'shrink':''}
    form-input-label`}
>
    {label}
    </label>
    ):null}

    </div>
    </>)

}

export default FormInput