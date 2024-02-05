// project import
import SimpleBar from '../../../../components/third-party/SimpleBar';
import Navigation from './Navigation';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
  <SimpleBar
    sx={{
      '& .simplebar-content': {
        display: 'flex',
        flexDirection: 'column',
        marginX: 2
      }
    }}
  >
    <Navigation />
  </SimpleBar>
);

export default DrawerContent;