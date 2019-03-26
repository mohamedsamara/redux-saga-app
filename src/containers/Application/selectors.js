import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApplicationContainerDomain = state =>
  state.get('app', initialState);

const selectApplicationState = () =>
  createSelector(
    selectApplicationContainerDomain,
    isAppLoaded => isAppLoaded.get('isAppLoaded')
  );

export { selectApplicationContainerDomain, selectApplicationState };
