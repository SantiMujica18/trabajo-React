
import './App.css';
import AccountMenu from './Components/AccountMenu';
import ContinuousSlider from './Components/ContinuousSlider';
import ControlledAccordions from './Components/ControlledAccordions';
import CustomizedSnackbars from './Components/CustomizedSnackbars';
import IconAlerts from './Components/IconAlerts';
import ResponsiveAppBar from './Components/ResponsiveAppBar';



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <ContinuousSlider />
      <CustomizedSnackbars />
      <ControlledAccordions />
      <IconAlerts />
      <AccountMenu/>
    </div>
  );
}

export default App;
