import BackButtonIcon from '../../components/BackButtonIcon'
import Navbar from '../../components/Navbar'
import Typography from '../../components/Typography'

const SettingsNavbar = () => (
  <Navbar
    left={<BackButtonIcon />}
    main={<Typography variant="headline">Settings</Typography>}
  />
)

export default SettingsNavbar
