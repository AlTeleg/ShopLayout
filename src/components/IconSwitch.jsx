export default function IconSwitch({ icon, onSwitch }) {
  return (
    <span className={`material-icons ${icon}`} onClick={onSwitch}>
    {icon}
    </span>
  )
}
