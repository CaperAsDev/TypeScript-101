import { subDays, format } from 'date-fns';
import _ from 'lodash';

const date = new Date(1995, 0, 2);
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'Valentina',
    role: 'seller'
  },
  {
    username: 'Zulema',
    role: 'seller'
  },
  {
    username: 'Santiago',
    role: 'Customer'
  }
];

const rtaLodash = _.groupBy(data, (item)=>item.role);
console.log(rtaLodash);