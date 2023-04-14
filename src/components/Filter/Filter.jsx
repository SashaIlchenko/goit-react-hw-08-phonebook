import PropTypes from 'prop-types';
import { FilterField, Input } from './Filter.styled';
import { filter } from 'Redux/contacts/FilterSlice';
import { selectFilter } from 'Redux/contacts/Selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(selectFilter);

    return <FilterField>Find contact by Name
        <Input type="text" value={value}
            onChange={(e) => { dispatch(filter(e.currentTarget.value)) }}
            onBlur={() => dispatch(filter(''))}></Input></FilterField>
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}