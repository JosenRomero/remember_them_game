
const ListItem = ({ num, text }) => {

  return (
    <div className="flex gap-3 items-center">
      <span className="bg-zinc-900 rounded-lg text-white p-2">{num}</span>
      <p className="leading-normal">{text}</p>
    </div>
  )

}

export default ListItem
