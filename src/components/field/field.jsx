import { Link } from "react-router-dom"

export const FieldForm = ({ labelFor, label, type, inputName, value }) => {
  return (
    <div className="field flex flex-col w-full">
      <label className="text-sm mb-2" htmlFor={labelFor}>{label}</label>
      <input className="text-sm px-4 py-3 rounded-lg text-zinc-900 focus:outline-none focus:border-none mb-2" type={type} name={inputName} placeholder={value} />
    </div>
  )
}

export const FieldButton = ({text}) => {
  return (
    <input className="bg-white text-zinc-900 w-full py-3 rounded-lg mt-4 mb-2 cursor-pointer hover:bg-zinc-400 duration-300" type="submit" value={text} />
  )
}

export const FieldText = ({ text, linkTo, link}) => {
  return (
    <p className="text-xs text-center">{text} <Link to={linkTo} className="italic text-zinc-400 underline">{link}</Link> now.</p>
  )
}