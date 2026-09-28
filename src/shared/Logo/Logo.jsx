 
import logo from '../../assets/new/logo.png'

const Logo = () => {
  return (
    <div className="flex items-end gap-2">
      <img src={logo} alt="ZapShift logo" />
      <h1 className="relative -ml-3 text-3xl font-bold leading-none tracking-tight text-[#1F1F1F]">
        ZapShift
      </h1>
    </div>
  )
}

export default Logo