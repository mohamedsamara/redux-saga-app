import { createSelector } from 'reselect';

const selectApplicationDomain = state => state.get('app');

const selectApplication = () => createSelector(selectApplicationDomain);

export default selectApplication;
export { selectApplicationDomain };
