import { Header } from '../../ui';
import { AllAddressesComponent } from '../components';
import { Navbar } from '../components/Navbar';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <AllAddressesComponent />
    </>
  )
}
