export const MainContent = (props) => {
  return (
    <div id={props.id} className={`flex flex-wrap items-center mt-16 ${ props.addClass ? props.addClass : '' }`}>
      { props.children }
    </div>
  )
}