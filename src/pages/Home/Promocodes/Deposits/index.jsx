import { Box,Table , TableBody,TableCell,TableHead,TableRow} from '@mui/material'
import { Link } from 'react-router-dom'
import Title from './Title'

const Deposits = () => {
    function createData(ID, Date, Users, Amount, Status, Manage) {
        return { ID, Date, Users, Amount, Status, Manage };
      }
      
      const rows = [
        createData(
          0,
          '16 Mar, 2019',
          'Elvis Presley',
          'Tupelo, MS',
          'VISA ⠀•••• 3719',
          312.44,
        ),
        createData(
          1,
          '16 Mar, 2019',
          'Paul McCartney',
          'London, UK',
          'VISA ⠀•••• 2574',
          866.99,
        ),
        createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
        createData(
          3,
          '16 Mar, 2019',
          'Michael Jackson',
          'Gary, IN',
          'AMEX ⠀•••• 2000',
          654.39,
        ),
        createData(
          4,
          '15 Mar, 2019',
          'Bruce Springsteen',
          'Long Branch, NJ',
          'VISA ⠀•••• 5919',
          212.79,
        ),
      ];
      
    function preventDefault(event) {
        event.preventDefault();
      }
  return (
    <Box>
        <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Users</TableCell>
            <TableCell>Date</TableCell>
            <TableCell> Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Manage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ID}>
              <TableCell>{row.Date}</TableCell>
              <TableCell>{row.Users}</TableCell>
              <TableCell>{row.Amount}</TableCell>
              <TableCell>{row.Status}</TableCell>
              <TableCell align="right">{`$${row.Manage}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </Box>
  )
}

export default Deposits