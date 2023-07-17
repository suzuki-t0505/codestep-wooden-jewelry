export const MainContentText = (props) => {
  return (
    <p className={`text-base ${props.addClass ? props.addClass : ''}`}>{ props.children }</p>
  )
}