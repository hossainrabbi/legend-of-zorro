import { addBalance } from '../redux/actions/balanceAction';

const btnItem = [
    {
        id: 1,
        name: '+ 10,000',
        bgColor: '#0392f7',
        type: addBalance,
    },
    {
        id: 2,
        name: '- 10,000',
        bgColor: '#d66300',
        type: '',
    },
    {
        id: 3,
        name: 'Charity',
        bgColor: '#dc3545',
        type: '',
    },
];

export default btnItem;
