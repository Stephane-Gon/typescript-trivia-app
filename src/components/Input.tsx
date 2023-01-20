import { InputProps } from "../types"

const Input = ({details, value, name, handleClick}: InputProps) => {

  let dynamicClass: string = ''
  if(name === 'difficulty') {
    dynamicClass = details.difficulty === value ? 'single active' : 'single'
  } else {
    dynamicClass = details.category === value ? 'single active' : 'single'
  }

  let formatedValue: string = (value.charAt(0).toUpperCase() + value.slice(1)).replaceAll('_', ' ')

  return (
    <input 
      readOnly 
      className={dynamicClass} 
      type="text" 
      value={formatedValue} 
      name={name} 
      placeholder={formatedValue} 
      onClick={handleClick}/>
  )
}

export default Input