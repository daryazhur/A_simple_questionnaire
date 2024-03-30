import { Icon } from '../Icon/index';
import './style.css';


export const Option = ({type, text, onSelected}) => {

  // const handleClickOption = () => {
  //   onSelected(text)
  // }

  	const handleClickOption = () => {
      onSelected(type)
    }

  return (
    <div className="option" onClick={handleClickOption}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
